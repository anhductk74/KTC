import React, { useEffect, useState } from 'react'
import ourTaskService from '../Service/Ourtask'
import NavBar from '../NavBar'

type OurTask = {
    id: string
    title: string
    description: string
    start_date: string
    due_date: string
    priority: string
    assignee_id: string
    created_time: string
    updated_time: string
    status: string
}

const OurTask = () => {
    const [ourTask, setOurTask] = useState<OurTask[]>([])
    useEffect(() => {
        ourTaskService().then((res) => {
            setOurTask(res)
            console.log(res)
        })
    }, [])
  return (
    <div className="overflow-x-auto p-4">
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
      </tr>
    </thead>
    <tbody className="text-sm text-white">
      {ourTask.map((task, index) => (
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
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default OurTask