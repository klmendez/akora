import ResponsiveText from '../ResponsiveText'
import MobileDetails from '../MobileDetails'
import { Link } from 'react-router-dom'
import styles from './Pricing.module.css'
const PLANS = [
 { name: 'Página inicial', price: '500.000', fit: 'Comienza tu presencia en internet.', features: ['Una página para presentar tu negocio', 'Diseño adaptable a celulares', 'Contacto por WhatsApp y redes', 'Publicación inicial'] },
 { name: 'Web profesional', price: '900.000', fit: 'Presenta tu marca, servicios y proyectos.', features: ['Varias secciones con diseño personalizado', 'Portafolio o presentación de servicios', 'Formularios y contacto por WhatsApp', 'Configuración y optimización inicial'] },
 { name: 'Catálogo digital', price: '1.200.000', fit: 'Exhibe productos y facilita pedidos.', features: ['Productos organizados por categorías', 'Detalle de cada producto', 'Carrito o resumen de pedido', 'Envío del pedido a WhatsApp'] },
]
const QUESTIONS = [
 ['¿Cuántas revisiones incluye?', 'El número de rondas y qué se revisa en cada una quedan definidos en la propuesta antes de comenzar. Los cambios de alcance se cotizan por separado.'],
 ['¿Cuándo estará listo?', 'Acordamos un calendario según el alcance y la disponibilidad de contenidos. La propuesta especifica las entregas y los momentos de revisión.'],
 ['¿Incluye dominio y hosting?', 'No se consideran incluidos en estos valores de referencia. La propuesta indicará si necesitas contratarlos, quién los administra y cuánto cuestan sus renovaciones.'],
 ['¿Existen costos recurrentes?', 'Puede haber renovaciones de dominio, hosting, licencias o servicios externos. El mantenimiento y las actualizaciones se acuerdan por separado; detallamos estos conceptos antes de contratar.'],
 ['¿El catálogo incluye pagos en línea?', 'El plan de referencia facilita pedidos por WhatsApp. Pasarelas de pago, inventario y paneles administrativos se cotizan según las funciones que necesites.'],
 ['¿Cómo se acuerdan los pagos?', 'La propuesta establece anticipo, saldo y etapas de pago. También deja por escrito los entregables y responsabilidades de cada parte.'],
]
export default function Pricing() {
 return <section className={styles.pricing}><div className="container">
  <div className={styles.intro}><span className="eyebrow">Planes e inversión</span><h1><ResponsiveText short="Planes para tu siguiente paso.">Una inversión digital pensada para crecer contigo.</ResponsiveText></h1><p>Elige un punto de partida. Definimos contigo el alcance y el valor final antes de comenzar.</p></div>
  <p className="mobile-rail-hint">Desliza para comparar los tres planes</p><div className={`${styles.grid} mobile-rail`} tabIndex={0} role="region" aria-label="Planes de desarrollo web">{PLANS.map((plan,i) => <article className={styles.plan} key={plan.name}><span className={styles.number}>0{i+1} / DESARROLLO WEB</span><h2>{plan.name}</h2><p>{plan.fit}</p><div className={styles.price}><small>Desde</small>${plan.price}<small>COP / proyecto</small></div><MobileDetails summary="Qué incluye"><ul>{plan.features.map(f => <li key={f}>{f}</li>)}</ul></MobileDetails><Link className={styles.link} to={`/contacto?servicio=Una%20p%C3%A1gina%20web&plan=${encodeURIComponent(plan.name)}`}>Consultar este plan</Link></article>)}</div>
  <div className={styles.custom}><div><span className="eyebrow">A tu medida</span><h2>Software, automatización e identidad</h2><p>Cotizamos según los procesos, integraciones y piezas que necesita tu negocio.</p></div><Link className="btn btn-gold" to="/contacto">Definamos tu proyecto</Link></div>
  <div className={styles.custom}><div><span className="eyebrow">Tu marca en movimiento</span><h2>¿Buscas contenido para redes?</h2><p>Conoce el plan de impulso, sus entregables y ejemplos de nuestro trabajo.</p></div><Link className={styles.link} to="/servicios/contenido-digital#impulso-redes">Explorar el plan de contenido</Link></div>
  <div className={styles.faq}><h2>Antes de empezar,<br />todo claro.</h2><div><p className="mobile-rail-hint">Desliza para consultar las preguntas</p><div className="mobile-rail" tabIndex={0} role="region" aria-label="Preguntas sobre los planes">{QUESTIONS.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></div>
 </div></section>
}
