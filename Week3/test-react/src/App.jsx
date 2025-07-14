import './App.css'
import BuyerForm from './Ex1/BuyerForm'
import NavBar from './Components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductList from './Ex2/ProductList'
import CartProvider from './Ex2/CartProvider'
import CartList from './Ex2/CartList'

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={
            <div className="w-full flex justify-around p-6">
              <CartList />
              <BuyerForm />
            </div>
          } />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
