import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee', marginBottom: '2rem' }}>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar