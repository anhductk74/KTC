import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useParams } from 'react-router';
import type { Roles, User } from '../../types/user';
import { getRoles, getUserDetail, updateUser, removeRoleToUser, addRoleToUser } from '../../service/user';
import { useNavigate } from 'react-router';

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  username: yup.string().required('Username is required'),
  isActive: yup.boolean().required('Status is required'),
});

export default function EditUserForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<User>({
    id: 0,
    fullName: '',
    username: '',
    status: '',
    roles: []
  });
  const [roles, setRoles] = useState<Roles[]>([]);
  const [selectedRoleIds, setSelectedRoleIds] = useState<number[]>([]);


  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserDetail(Number(id));
      setUser(user);
      setSelectedRoleIds(user.roles.map((role) => role.id as number));

      reset({
        fullName: user.fullName,
        username: user.username,
        isActive: user.status === 'active',
      });
    };
    fetchUser();
  }, [id]);


  useEffect(() => {
    const fetchRoles = async () => {
      const roles = await getRoles();
      console.log("roles", roles);
      setRoles(roles);
    };
    fetchRoles();
  }, [])

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: user.fullName ?? '',
      username: user.username ?? '',
      isActive: user.status === 'active',
    }
  });


  const onSubmit = async (data: any) => {
    const userData = {
      fullName: data.fullName,
      username: data.username,
      status: data.isActive ? 'active' : 'inactive',
    };
    try {
      const response = await updateUser(Number(id), userData);
      console.log("response", response);
      navigate('/user-management');
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancel = () => {
    navigate('/user-management'); 
  };

  const handleUpdateRoles = async (role_id: number, checked: boolean) => {
    const data = {
      role_id: role_id
    }
    if (checked) {
      await addRoleToUser(Number(id), data).then(() => {
        alert("add role to user success");
      });
    } else {
      await removeRoleToUser(Number(id), data).then(() => {
        alert("remove role to user success");
      });
    }
  }


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">📝 Edit User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="space-y-4">

          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              {...register('fullName')}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              {...register('username')}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('isActive')}
              className="h-4 w-4"
            />
            <label className="text-sm font-medium">Active</label>
          </div>

          <div>
            <label className="block text-sm font-medium">Roles</label>
            <div className="flex items-center gap-2">
              {roles.map((role) => (
                <div key={role.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selectedRoleIds.includes(role.id as number)}
                    onChange={(e) => {
                      handleUpdateRoles(role.id as number, e.target.checked);
                      if (e.target.checked) {
                        setSelectedRoleIds([...selectedRoleIds, role.id as number]);
                      } else {
                        setSelectedRoleIds(selectedRoleIds.filter((id) => id !== role.id));
                      }
                    }}
                  />
                  <label className="text-sm font-medium">{role.name}</label>
                </div>
              ))}

            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button className="bg-gray-200 px-4 py-2 rounded-md" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
