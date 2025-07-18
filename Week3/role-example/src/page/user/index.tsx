import React, { useEffect, useState } from 'react';
import { getAllUsersWithRoles } from '../../service/user';
import { Link } from 'react-router';
import type { User } from '../../types/user';

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsersWithRoles();
      setUsers(users);
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">👤 User Management</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Full Name</th>
              <th className="px-4 py-3 border-b">Username</th>
              <th className="px-4 py-3 border-b">Status</th>
              <th className="px-4 py-3 border-b">Roles</th>
              <th className="px-4 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 border-b text-center">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.fullName || '—'}</td>
                <td className="px-4 py-2 border-b">{user.username}</td>
                <td className="px-4 py-2 border-b capitalize">{user.status}</td>
                <td className="px-4 py-2 border-b">
                  {user.roles.map((role) => role.name).join(', ')}
                </td>
                <td className="px-4 py-2 border-b space-x-2 text-center">
                  <Link to={`/user/edit/${user.id}`}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                      Edit
                    </button>
                  </Link>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                    Delete
                  </button>
                  
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 py-6">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
