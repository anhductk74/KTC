import React from 'react';
import { useCart } from './CartProvider';

const CartList = () => {
  const { cart, totalPrice } = useCart();

  return (
    <div className="w-full max-w-md mt-6 p-6 bg-white rounded-xl shadow-md border border-gray-100">
  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
    🛒 <span>Your Cart</span>
  </h2>

  {cart.length === 0 ? (
    <p className="text-gray-500 italic">Your cart is empty.</p>
  ) : (
    <div className="space-y-3">
      <ul className="divide-y divide-gray-200">
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 px-1 hover:bg-gray-50 transition rounded"
          >
            <p className="text-gray-700">{item.name}</p>
            <p className="text-blue-600 font-medium">${item.price}</p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center pt-4 border-t">
        <span className="font-semibold text-gray-700">Total</span>
        <span className="font-bold text-green-600">${totalPrice}</span>
      </div>
    </div>
  )}
</div>



  );
};

export default CartList;
