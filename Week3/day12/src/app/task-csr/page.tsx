'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/type'

export default function TaskCSR() {
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [fetchTime, setFetchTime] = useState('')

  useEffect(() => {
    fetch('https://server.aptech.io/online-shop/products')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFetchTime(new Date().toLocaleString()) 
        setLoading(false)
      })
  }, [])

  if (loading) return <div>⏳ Loading (Client)...</div>

  return (
    <div>
      <h1>🌐 TaskCSR (Client-Side Rendering)</h1>
      <p><strong>Fetch time (client):</strong> {fetchTime}</p>
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
  )
}
