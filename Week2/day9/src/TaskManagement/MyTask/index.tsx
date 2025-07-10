import { useContext, useEffect, useState } from 'react'
import myTaskService from '../Service/MyTask'
import AuthContext from '../context'
import CreateTaskForm from '../CreateTask'
import DeleteTask from '../Service/DeleteTask'
import UpdateTask from '../UpdateTask'
import type { Task } from '../Model/Task'


// type OurTask = {
//     id: string
//     title: string
//     description: string
//     start_date: string
//     due_date: string
//     priority: string
//     assignee_id: string
//     created_time: string
//     updated_time: string
//     status: string
// }

const MyTask = () => {
    const [showForm, setShowForm] = useState(false);
    const [reload, setReload] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [taskUpdate, setTaskUpdate] = useState<Task | null>(null);
    const { user } = useContext(AuthContext)
    const [myTask, setMyTask] = useState<Task[]>([])
    useEffect(() => {
        myTaskService(user?.id ?? 0).then((res) => {
            setMyTask(res)
        })
    }, [reload])


    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá task này?");
        if (!confirmDelete) return;

        DeleteTask(id).then(() => {
            setReload(!reload);
        }).catch((err) => {
            console.error("Xoá task thất bại:", err);
            alert("Đã xảy ra lỗi khi xoá task.");
        });
    };

    const handleUpdate = (task: Task) => {
        setTaskUpdate(task);
        setShowUpdateForm(true);
    }

    return (
        <div className="overflow-x-auto p-1">
            <div className="p-2 flex justify-end">
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    + Add New Task
                </button>

                {showForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded shadow relative w-[90%] max-w-lg">
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-2 right-2 text-red-600 text-xl font-bold"
                            >
                                &times;
                            </button>
                            <CreateTaskForm onSuccess={() => {
                                setShowForm(false);
                                setReload(!reload);
                            }} />

                        </div>
                    </div>
                )}
            </div>
            <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                    <tr>
                        <th className="px-4 py-3 border">ID</th>
                        <th className="px-4 py-3 border">Title</th>
                        <th className="px-4 py-3 border">Description</th>
                        <th className="px-4 py-3 border">Start Date</th>
                        <th className="px-4 py-3 border">End Date</th>
                        <th className="px-4 py-3 border">Priority</th>
                        <th className="px-4 py-3 border">Assignee</th>
                        <th className="px-4 py-3 border">Created At</th>
                        <th className="px-4 py-3 border">Updated At</th>
                        <th className="px-4 py-3 border">Status</th>
                        <th className="px-4 py-3 border">Action</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-white">
                    {myTask.map((task, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-50 hover:text-black even:bg-white odd:bg-gray-50 transition duration-200"
                        >
                            <td className="px-4 py-2 border text-center">{task?.id}</td>
                            <td className="px-4 py-2 border">{task?.title}</td>
                            <td className="px-4 py-2 border">{task?.description}</td>
                            <td className="px-4 py-2 border">{new Date(task.start_date).toLocaleDateString()}</td>
                            <td className="px-4 py-2 border">{new Date(task.due_date).toLocaleDateString()}</td>
                            <td className={`px-4 py-2 border text-center font-semibold
            ${task?.priority === 'high' ? 'text-red-600'
                                    : task?.priority === 'medium' ? 'text-yellow-600'
                                        : 'text-green-600'}
            `}>
                                {task?.priority}
                            </td>
                            <td className="px-4 py-2 border">{task?.assignee_id}</td>
                            <td className="px-4 py-2 border">{new Date(task.created_time).toLocaleDateString()}</td>
                            <td className="px-4 py-2 border">{new Date(task.updated_time).toLocaleDateString()}</td>
                            <td className="px-4 py-2 border">{task?.status}</td>
                            <td className="px-4 py-2 border text-center">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm mr-2" onClick={() => handleUpdate(task as Task)}>
                                    Edit
                                </button>

                                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm" onClick={() => handleDelete(task.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showUpdateForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow relative w-[90%] max-w-lg">
                        <button
                            onClick={() => setShowUpdateForm(false)}
                            className="absolute top-2 right-2 text-red-600 text-xl font-bold"
                        >
                            &times;
                        </button>
                        <UpdateTask onSuccess={() => {
                            setShowUpdateForm(false);
                            setReload(!reload);
                        }} task={taskUpdate as Task} />

                    </div>
                </div>
            )}
        </div>

    )
}

export default MyTask