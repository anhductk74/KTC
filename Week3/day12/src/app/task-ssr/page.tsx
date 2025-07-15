// app/task-ssr/page.tsx

import { Product } from "@/type";

export const dynamic = 'force-dynamic' // đảm bảo SSR

async function getData() {
  const res = await fetch('https://server.aptech.io/online-shop/products', {
    cache: 'no-store', // không lưu cache → luôn fetch mới
  });
  return res.json();
}

export default async function TaskSSR() {
  const fetchTime = new Date().toLocaleString(); // tính tại mỗi lần gọi server
  const data = await getData();

  return (
    <div>
      <h1>🔁 Task SSR (Server-Side Rendering)</h1>
      <p><strong>Fetch Time (Server):</strong> {fetchTime}</p>
      <ul>
      {data.slice(0, 5).map((item: Product) => (
  <div key={item.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd' }}>
    <p><strong>ID:</strong> {item.id}</p>
    <p><strong>Name:</strong> {item.name}</p>
    <p><strong>Description:</strong> {item.description}</p>
    <p><strong>Price:</strong> ${item.price}</p>
    <p><strong>Stock:</strong> {item.stock}</p>
  </div>
))}

      </ul>
    </div>
  );
}
