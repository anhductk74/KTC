import React from 'react';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    description: 'Điện thoại Apple cao cấp nhất 2023',
    price: '33.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Flagship Android mạnh mẽ',
    price: '28.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/42/303890/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg',
  },
  {
    id: 3,
    name: 'MacBook Air M2 2024',
    description: 'Laptop Apple mỏng nhẹ, pin lâu',
    price: '27.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/44/313217/macbook-air-13-inch-m2-2024-bac-thumb-600x600.jpg',
  },
  {
    id: 4,
    name: 'ASUS Vivobook 15',
    description: 'Laptop học tập, văn phòng',
    price: '12.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/44/309776/asus-vivobook-x1504va-i3-nj032w-thumb-600x600.jpg',
  },
  {
    id: 5,
    name: 'iPad Air 5',
    description: 'Máy tính bảng Apple, chip M1',
    price: '14.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/522/247517/ipad-air-5-xanh-thumb-600x600.jpg',
  },
  {
    id: 6,
    name: 'Xiaomi Pad 6',
    description: 'Tablet Android giá tốt',
    price: '7.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/522/314431/xiaomi-pad-6-vang-thumb-600x600.jpg',
  },
  {
    id: 7,
    name: 'iMac 24 inch M3',
    description: 'Máy tính All-in-one Apple',
    price: '36.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/5698/317509/imac-m3-2023-xanh-thumb-600x600.jpg',
  },
  {
    id: 8,
    name: 'Dell Inspiron 15',
    description: 'Laptop phổ thông, bền bỉ',
    price: '15.990.000₫',
    image: 'https://cdn.tgdd.vn/Products/Images/44/309776/dell-inspiron-15-3520-i5-70295796-thumb-600x600.jpg',
  },
];

const Products = () => {
  return (
    <div className="w-full px-2 sm:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Danh sách sản phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-2 duration-200"
          >
            <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
            <p className="text-gray-500 text-sm mb-2 text-center">{product.description}</p>
            <div className="text-blue-600 font-bold text-lg mb-2">{product.price}</div>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;