/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useEffect } from 'react';

import { apiClient } from '@/libraries/api-client';
import { useAuthStore } from '@/useAuthStore';
import { useRouter } from 'next/navigation';
import { deleteTask } from '@/service/task';
import type { Task } from "@/type/task";

export default function Tasks() {
  const { logOut } = useAuthStore((state) => state);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const navigate = useRouter();
  const [role, setRole] = React.useState<string>('');
  const user = useAuthStore((state) => state.loggedInUser);
  useEffect(() => {
    if (user) {
      const role = user.roles[0].name;
      setRole(role);  
    }
  }, [user]);
  useEffect(() => {
    const authStorage = localStorage.getItem('auth-storage');
    if (!authStorage) {
      navigate.push('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = (await apiClient.get('/workspaces/tasks')) as Task[];
        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((t) => t.id !== Number(taskId)));
    } catch (err) {
      alert('Xóa task thất bại!');
    }
  };  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Danh sách Task</h1>
          <button
            onClick={() => {
              logOut();
              navigate.push('/login');
            }}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold shadow"
          >
            Đăng xuất
          </button>
        </div>
        
        <div className="grid gap-6">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-500">Không có task nào.</div>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="border border-gray-200 rounded-lg p-6 shadow-sm bg-gray-50 hover:shadow-md transition">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-blue-800">{task.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${task.status === 'done' ? 'bg-green-200 text-green-800' : task.status === 'in_progress' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'}`}>{task.status}</span>
                </div>
                <p className="text-gray-700 mb-2">{task.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div><span className="font-medium">Priority:</span> <span className={`font-bold ${task.priority === 'high' ? 'text-red-600' : task.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'}`}>{task.priority}</span></div>
                  {task.due_date && <div><span className="font-medium">Due:</span> {new Date(task.due_date).toLocaleDateString()}</div>}
                  <div><span className="font-medium">Assignee ID:</span> {task.assignee_id}</div>
                  {role === 'Administrators' && (
                  <button
                    className="ml-auto px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition font-semibold"
                    onClick={() => handleDeleteTask(task.id.toString())}
                  >
                    Xóa
                  </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}