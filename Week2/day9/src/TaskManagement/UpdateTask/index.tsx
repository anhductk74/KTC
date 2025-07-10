import { useForm } from 'react-hook-form';
import UpdateTask from '../Service/UpdateTask';
import type { Task } from '../Model/Task';

type UpdateTaskFormProps = {
    onSuccess: () => void;
    task: Task;
};

const UpdateTaskForm = ({ onSuccess, task }: UpdateTaskFormProps) => {
  const user = JSON.parse(localStorage.getItem('users') ?? '')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Task>();

  const onSubmit = async (data: Task) => {
    data.id = task.id
    data.updated_by = user?.id
    data.updated_time = new Date().toISOString()
    UpdateTask(data).then(() => {
        reset()
        onSuccess()
    })
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white text-gray-800 rounded-lg p-6 w-full max-w-lg shadow-lg space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Update Task</h2>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          defaultValue={task.title}
          {...register('title', { required: 'Title is required' })}
          placeholder="Enter task title"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-blue-500"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <input
          type="text"
          defaultValue={task.description}
          {...register('description', { required: 'Description is required' })}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        {errors.assignee_id && <p className="text-red-500 text-sm">{errors.assignee_id.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Status</label>
        <select
          defaultValue={task.status}
          {...register('status')}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        >
          <option value="to_do">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">Priority</label>
        <select
          defaultValue={task.priority}
          {...register('priority')}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Start Date</label>
        <input
          type="datetime-local"
          defaultValue={task.start_date ? new Date(task.start_date).toISOString().slice(0, 16) : ''}
          {...register('start_date', { required: true })}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Due Date</label>
        <input
          type="datetime-local"
          defaultValue={task.due_date ? new Date(task.due_date).toISOString().slice(0, 16) : ''}
          {...register('due_date', { required: true })}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition"
      >
        Update Task
      </button>
    </form>
  );
};

export default UpdateTaskForm;
