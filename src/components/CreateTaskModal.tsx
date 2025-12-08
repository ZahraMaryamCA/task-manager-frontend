import React, { useState } from "react";

const CreateTaskModal = ({ onClose, onCreate }: any) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });

  const handleSubmit = () => {
    // Validate that title is provided
    if (!form.title.trim()) {
      alert('Please enter a task title');
      return;
    }

    // Only send dueDate if it's provided
    const taskData: any = {
      title: form.title.trim(),
      description: form.description.trim(),
      status: form.status || "pending",
    };
    
    if (form.dueDate) {
      taskData.dueDate = form.dueDate;
    }
    
    onCreate(taskData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-white p-6 rounded-[12px] shadow-lg w-full max-w-md mx-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-6 text-[#0F172A]">Create New Task</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#64748B] mb-2">Title</label>
            <input
              className="border border-[#E2E8F0] p-3 w-full rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              placeholder="Enter task title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#64748B] mb-2">Description</label>
            <textarea
              className="border border-[#E2E8F0] p-3 w-full rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] min-h-[100px] resize-none"
              placeholder="Enter task description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#64748B] mb-2">Due Date (Optional)</label>
            <input
              className="border border-[#E2E8F0] p-3 w-full rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              type="date"
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button 
            className="px-6 py-2 border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:bg-[#F8FAFC]" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[10px]"
            onClick={handleSubmit}
            disabled={!form.title.trim()}
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
