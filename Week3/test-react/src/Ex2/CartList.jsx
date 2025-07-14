import React from 'react';
import { useCart } from './CartProvider';

const CartList = () => {
  const { cart, totalPrice } = useCart();

  return (
    <div className="max-w-xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-md">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>

  {cart.length === 0 ? (
    <p className="text-gray-500 italic">Your cart is empty.</p>
  ) : (
    <ul className="divide-y divide-gray-200">
      {cart.map((item, index) => (
        <li key={index} className="flex justify-between items-center py-3">
          <div>
            <p className="text-gray-800 font-medium">{item.name}</p>
          </div>
          <p className="text-blue-600 font-semibold">${item.price}</p>
        </li>
      ))}
      <li className="flex justify-between items-center py-3">
        <p className="text-gray-800 font-medium">Total Price</p>
        <p className="text-blue-600 font-semibold">${totalPrice}</p>
      </li>
    </ul>
  )}
</div>

  );
};

export default CartList;
