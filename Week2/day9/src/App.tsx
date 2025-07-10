import './App.css'
import AuthContext from './TaskManagement/context'
import Login from './TaskManagement/Login'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import type { User } from './TaskManagement/Model/User'
import MyTask from './TaskManagement/MyTask'
import OurTask from './TaskManagement/OurTask'
import Layout from './TaskManagement/Layout/Layout'

function App() {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('users');
    return storedUser ? JSON.parse(storedUser) : null;
  })
  return (
    <>
    <AuthContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
      <Routes>
        {/* Trang login riêng */}
        <Route path="/" element={<Login />} />
        {/* Các route có NavBar */}
        {user && (
        <Route element={<Layout />}>
          <Route path="/home" element={<OurTask />} />
          <Route path="/my_tasks" element={<MyTask />} />
          <Route path="/*" element={<Login />} />
        </Route>
        )}
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    </>
  )
}

export default App
