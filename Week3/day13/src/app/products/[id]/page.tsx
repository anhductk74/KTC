import React from "react";
import { Product } from "@/type/products";
import Image from "next/image";
// Lấy dữ liệu sản phẩm từ API
async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    // Với ISR, bạn có thể bỏ cache: 'no-store'
    next: { revalidate: 60 }, // revalidate mỗi 60s
  });

  if (!res.ok) throw new Error("Không thể lấy sản phẩm");
  return res.json();
}

// Revalidate trang sau mỗi 60 giây (ISR)
export const revalidate = 60;


export async function generateStaticParams() {
  const products = await fetch('https://api.escuelajs.co/api/v1/products').then((res) => res.json());

  if (!products || !Array.isArray(products)) {
    return [];
  }

  return products.slice(0, 5).map((product: Product) => ({
    id: product.id.toString(),
  }));
}

// Component hiển thị chi tiết sản phẩm
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  const imageUrl =
    Array.isArray(product.images) && product.images[0]
      ? product.images[0]
      : "/image/logo.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
      <div className="bg-white rounded-xl shadow-lg border border-yellow-300 p-8 w-full max-w-xl flex flex-col items-center gap-6">
        <Image
          src={imageUrl}
          alt={product.title}
          className="w-64 h-64 object-cover rounded-lg border-2 border-yellow-300 shadow-md mb-4"
          width={256}
          height={256}
          unoptimized
        />
        <h1 className="text-2xl font-bold text-yellow-700 mb-2 text-center">
          {product.title}
        </h1>
        <p className="text-xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
          {product.price} VNĐ
        </p>
        <p className="text-gray-700 text-center mb-4">{product.description}</p>
        <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 transition-all duration-200">
          Mua ngay
        </button>
      </div>
    </div>
  );
}
