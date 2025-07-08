// import './App.css'
// import HomePage from './assets/Afternoon/page/HomePage'
// import Navbar from './assets/Afternoon/Components/NavBar'
// import Category from './assets/Afternoon/page/Category'
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from './HomeWork/Componets/NavBar'
import Header from './HomeWork/Componets/Header'
import PatientsPage from './HomeWork/Pages/PatientsPage'
import OverView from './HomeWork/Pages/OverView'
import DashBoard from './HomeWork/Pages/DashBoard'
import './App.css'

function App() {

  return (
    <>
      {/* <div className="container">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
    </BrowserRouter>
    </div> */}

      {/* HomeWork */}
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <div className="container_right">
            <Header />
            <div className="container_right_content">
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/patients" element={<PatientsPage />} />
                <Route path="/overview" element={<OverView />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
