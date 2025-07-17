import Banner from "@/components/banner";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/type/products";
export const revalidate = false;
async function getProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10",{
    cache: "force-cache",
  });
  return res.json();
}

export default async function Home() {

  const products = await getProducts();
  return (
    <div>
      <Banner />
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-5 items-center gap-5 w-[1200px]">
        {products.map((product: Product) => (
        <Link href={`/products/${product.id}`}  
          className="rounded-xl shadow-lg border border-yellow-300 bg-white transition-transform hover:scale-105 hover:shadow-2xl duration-200 p-4 flex flex-col gap-3"
          key={product.id}
        >
          <Image
            className="object-cover rounded-lg border-2 border-yellow-300 mb-2 shadow-md mx-auto"
            src={typeof product.images[0] === 'string' ? product.images[0] : '/public/image/logo.png'}
            alt={product.title || 'Product image'}
            width={150}
            height={150}
            unoptimized
            priority={true}
          />
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center w-full">
              <p className="text-base font-bold text-yellow-700 drop-shadow-sm text-center mb-1">
                {product.title}
              </p>
              <p className="text-lg font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                {product.price} VNĐ
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-auto">
            <button
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 transition-all duration-200"
            >
              Mua ngay
            </button>
          </div>
        </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
