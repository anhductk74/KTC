import Link from 'next/link'
import React from 'react'
        
const Navbar = () => {
  return (
    <div className='flex gap-5 p-5'>
        <Link className='text-blue-500' href="/task-ssr">Task SSR</Link>
        <Link className='text-blue-500' href="/task-ssg">Task SSG</Link>
        <Link className='text-blue-500' href="/task-isr/9">Task ISR</Link>
        <Link className='text-blue-500' href="/task-csr">Task CSR</Link>
    </div>
  )
}

export default Navbar