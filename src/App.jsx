import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Proyectos from './pages/Proyectos'
import Nosotras from './pages/Nosotras'
import Proceso from './pages/Proceso'
import Contacto from './pages/Contacto'
import Planes from './pages/Planes'
import ServicioDetalle from './pages/ServicioDetalle'
import PageMeta from './components/PageMeta'
import ConversionEvents from './components/ConversionEvents'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <PageMeta />
      <ConversionEvents />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<ServicioDetalle />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/proceso" element={<Proceso />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
