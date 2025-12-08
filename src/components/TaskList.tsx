import React, { useEffect, useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import EditTaskModal from "./EditTaskModal";
import { api } from "../utils/api";

const TaskList = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [editingTask, setEditingTask] = useState<any | null>(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  // ----------------------------------------
  // LOAD TASKS FROM BACKEND
  // ----------------------------------------
  const loadTasks = async () => {
    try {
      const data = await api.get("/tasks");
      // Backend returns array of tasks with _id
      setTasks(Array.isArray(data) ? data : []);
    } catch (error: any) {
      console.error("Error loading tasks", error);
      // If unauthorized, redirect to login
      if (error.message?.includes('token') || error.message?.includes('Access denied')) {
        alert("Session expired. Please login again.");
        window.location.href = "/login";
      }
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // ----------------------------------------
  // CREATE TASK
  // ----------------------------------------
  const handleCreateTask = async (task: any) => {
    try {
      const newTask = await api.post("/tasks", task);
      await loadTasks(); // Reload tasks to get the complete list
      setCreateModalOpen(false);
    } catch (error: any) {
      console.error("Error creating task:", error);
      alert(error.message || "Failed to create task");
    }
  };

  // ----------------------------------------
  // UPDATE TASK
  // ----------------------------------------
  const handleEditTask = async (updated: any) => {
    try {
      // Backend uses _id, not id
      const taskId = updated._id || updated.id;
      
      // Remove _id from body (it's in the URL)
      const { _id, ...updateData } = updated;
      
      await api.put(`/tasks/${taskId}`, updateData);
      await loadTasks();
      setEditingTask(null);
    } catch (error: any) {
      console.error("Error updating task:", error);
      alert(error.message || "Failed to update task");
    }
  };

  // ----------------------------------------
  // DELETE TASK
  // ----------------------------------------
  const handleDeleteTask = async (id: string) => {
    try {
      if (!confirm("Are you sure you want to delete this task?")) {
        return;
      }
      await api.delete(`/tasks/${id}`);
      await loadTasks(); // Reload tasks after deletion
    } catch (error: any) {
      console.error("Error deleting task:", error);
      alert(error.message || "Failed to delete task");
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setCreateModalOpen(true)}
        >
          + New Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No tasks yet. Create your first task!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li key={task._id} className="border p-3 rounded shadow-sm bg-white dark:bg-gray-800">
              <div className="flex justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">{task.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {task.status || 'pending'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{task.description}</p>
                  {task.dueDate && (
                    <p className="text-sm text-gray-400">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4 ml-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => setEditingTask(task)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Create Modal */}
      {isCreateModalOpen && (
        <CreateTaskModal
          onClose={() => setCreateModalOpen(false)}
          onCreate={handleCreateTask}
        />
      )}

      {/* Edit Modal */}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleEditTask}
        />
      )}
    </div>
  );
};

export default TaskList;
