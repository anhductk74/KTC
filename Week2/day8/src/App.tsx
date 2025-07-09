import './App.css'
import LoginForm from './Pages/LoginForm'
import RegisterForm from './Pages/RegisterForm'
import { BrowserRouter, Routes, Route } from 'react-router'
import Form2 from './Pages/Form2'
import HomeWork from './HomeWork'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
      <Form2 />
      <HomeWork />
      </BrowserRouter>
    </>

  )
}

export default App
