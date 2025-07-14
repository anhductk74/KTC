import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 w-full max-w-lg flex flex-col gap-6 border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-2">Liên hệ</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Tên</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập tên của bạn"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập email của bạn"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Nội dung</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Nhập nội dung liên hệ"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Gửi liên hệ
        </button>
      </form>
    </div>
  );
};

export default Contact;