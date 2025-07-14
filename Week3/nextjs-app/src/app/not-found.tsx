import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">Không tìm thấy trang</h2>
      <p className="text-gray-500 mb-6">Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
      <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Quay về trang chủ</Link>
    </div>
  );
} 