import React, { useState } from "react";

const EditTaskModal = ({ task, onClose, onSave }: any) => {
  const [form, setForm] = useState({
    _id: task._id, // Use _id to match backend
    title: task.title,
    description: task.description,
    status: task.status || "pending",
    dueDate: task.dueDate ? (task.dueDate.slice(0, 10)) : "",
  });

  const handleSubmit = () => {
    // Prepare update data (exclude _id from body, it's in the URL)
    const updateData: any = {
      _id: form._id, // Keep _id for the URL
      title: form.title,
      description: form.description,
      status: form.status || "pending",
    };
    
    // Only include dueDate if it's provided
    if (form.dueDate) {
      updateData.dueDate = form.dueDate;
    }
    
    onSave(updateData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-white p-6 rounded-[12px] shadow-lg w-full max-w-md mx-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-6 text-[#0F172A]">Edit Task</h2>

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
            <label className="block text-sm font-medium text-[#64748B] mb-2">Status</label>
            <select
              className="border border-[#E2E8F0] p-3 w-full rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
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
            className="px-6 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[10px] font-medium"
            onClick={handleSubmit}
            disabled={!form.title.trim()}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
