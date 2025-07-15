import { Product } from "@/type";

async function getData() {
    const res = await fetch('https://server.aptech.io/online-shop/products', {
      cache: 'force-cache',
    });
    return res.json();
  }
  
  const buildTime = new Date().toLocaleString();
  
  export default async function TaskSSG() {
    const data = await getData();
  
    return (
      <div>
        <h1>❄️ TaskSSG (Static Site Generation)</h1>
        <p><strong>Build Time:</strong> {buildTime}</p>
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
  