import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCart } from '../Ex2/CartProvider';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Name is required')
      .min(2, 'Minimum 2 characters'),

    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email'),

    address: yup
      .string()
      .required('Address is required')
      .min(5, 'Minimum 5 characters'),
  })
  .required();

const BuyerForm = () => {
    const { cart, totalPrice } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { name, email, address } = data;
    console.log(name, email, address, cart, "Total Price: "+totalPrice);
  };

  return (
    <div className='w-full max-w-md'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Buyer Form</h2>

        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register('email')}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium mb-1">
            Address
          </label>
          <textarea
            id="address"
            rows="3"
            {...register('address')}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BuyerForm;
