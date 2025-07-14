import React from 'react';
import { useCart } from './CartProvider';

const products = [
  { id: 1, name: 'Laptop Dell', price: 1200 },
  { id: 2, name: 'Macbook Pro', price: 2550 },
  { id: 3, name: 'Iphone 15 Pro', price: 1560 },
  { id: 4, name: 'Tai Nghe Bluetooth', price: 1650 },
  { id: 5, name: 'Iphone 16 Pro', price: 1500 },
  { id: 6, name: 'Iphone 17 Pro', price: 1250 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow text-center">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="mb-2">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
