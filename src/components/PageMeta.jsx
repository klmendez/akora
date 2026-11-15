import { useLocation } from 'react-router-dom'
import { SERVICES } from '../data/services'
const PAGES = {
 '/': ['Laboratorio creativo y tecnológico', 'Diseño, contenido y tecnología para ayudar a tu negocio a crecer. Conoce el trabajo de AKORA 212.'],
 '/servicios': ['Servicios digitales', 'Contenido digital, desarrollo web, software a medida, automatización e identidad visual para negocios.'],
 '/proyectos': ['Proyectos y casos reales', 'Explora proyectos reales de AKORA 212, capturas de escritorio y móvil y trabajos de identidad y contenido.'],
 '/planes': ['Planes e inversión', 'Planes web desde $500.000 COP. Compara alcances y conoce cómo acordamos revisiones, tiempos y costos recurrentes.'],
 '/nosotras': ['Nosotras', 'Conoce a las personas detrás de AKORA 212 y nuestra forma de combinar creatividad, diseño y tecnología.'],
 '/proceso': ['Nuestro proceso', 'Descubrimiento, propuesta, desarrollo, revisión y entrega: así trabajamos contigo en AKORA 212.'],
 '/contacto': ['Cuéntanos tu proyecto', 'Cuéntanos tu idea y conversemos por WhatsApp sobre la solución que necesita tu negocio.'],
}
export default function PageMeta() {
 const location = useLocation()
 const pathname = location.pathname.replace(/\/$/, '') || '/'
 const service = SERVICES.find(s => pathname === `/servicios/${s.slug}`)
 const [name, description] = service ? [service.title, service.text] : PAGES[pathname] || ['Explora nuestro trabajo', 'Creatividad y tecnología para negocios.']
 const title = `${name} | AKORA 212 · Digital Lab`
 return <><title>{title}</title><meta name="description" content={description} /><meta property="og:title" content={title} /><meta property="og:description" content={description} /></>
}
