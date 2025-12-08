import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserMenu } from './UserMenu';
import { Button } from './ui/button';
import { ListTodo, CheckCircle2, Clock, Plus, LogOut } from 'lucide-react';
import logo from '../assets/c62f533105c0c1e5b2518d71113997455d7bb5ad.png';
import { api } from '../utils/api';
import CreateTaskModal from './CreateTaskModal';

interface Task {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  dueDate?: string;
  createdAt?: string;
}

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;

  const stats = [
    {
      title: 'Total Tasks',
      value: totalTasks,
      icon: ListTodo,
      color: 'bg-blue-50',
      iconColor: 'text-[#2563EB]',
    },
    {
      title: 'Completed Tasks',
      value: completedTasks,
      icon: CheckCircle2,
      color: 'bg-green-50',
      iconColor: 'text-[#10B981]',
    },
    {
      title: 'Pending Tasks',
      value: pendingTasks,
      icon: Clock,
      color: 'bg-orange-50',
      iconColor: 'text-[#F59E0B]',
    },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Load tasks function to be reused
  const loadTasks = async () => {
    try {
      const data = await api.get('/tasks');
      setTasks(data);
    } catch (error: any) {
      console.error('Error loading tasks:', error);
      if (error.message?.includes('token') || error.message?.includes('Access denied')) {
        logout();
        navigate('/login');
      }
    }
  };

  // Handle creating a new task
  const handleCreateTask = async (taskData: any) => {
    try {
      await api.post('/tasks', taskData);
      await loadTasks(); // Reload tasks after creation
      setCreateModalOpen(false);
    } catch (error: any) {
      console.error('Error creating task:', error);
      alert(error.message || 'Failed to create task');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ZM Logo" className="w-10 h-10 object-contain" />
              <h3>Personal Task Manager</h3>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-[#E2E8F0] rounded-[10px]"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <UserMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-[#64748B]">Here's an overview of your tasks</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[#64748B] mb-2">{stat.title}</p>
                    <h2>{stat.value}</h2>
                  </div>
                  <div className={`w-12 h-12 rounded-[10px] ${stat.color} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-[12px] border border-[#E2E8F0] p-6 shadow-sm">
          <h3 className="mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button
              onClick={() => navigate('/tasks')}
              className="h-14 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px] justify-start px-6"
            >
              <ListTodo className="w-5 h-5 mr-3" />
              View All Tasks
            </Button>
            <Button
              onClick={() => setCreateModalOpen(true)}
              variant="outline"
              className="h-14 border-[#E2E8F0] rounded-[10px] justify-start px-6"
            >
              <Plus className="w-5 h-5 mr-3" />
              Add New Task
            </Button>
          </div>
        </div>
      </main>

      {/* Create Task Modal */}
      {isCreateModalOpen && (
        <CreateTaskModal
          onClose={() => setCreateModalOpen(false)}
          onCreate={handleCreateTask}
        />
      )}
    </div>
  );
};