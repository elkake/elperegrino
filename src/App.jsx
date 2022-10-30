import { GlobalContext } from './Context/GlobalContext'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './layout/Home'
import './App.css'
import Header from './layout/header/Header'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from './layout/footer/Footer'
import NavD from './layout/nav/NavD'
import Nosotros from './page/nosotros/Nosotros'
import Productos from './page/productos/Productos'
import Recetas from './page/recetas/Recetas'
function App() {
  return (
    <GlobalContext>
      <NavD />
      <ParallaxProvider>
        <Header />
      </ParallaxProvider>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/recetas" element={<Recetas />} />
      </Routes>
      <Footer />
    </GlobalContext>
  )
}

export default App
