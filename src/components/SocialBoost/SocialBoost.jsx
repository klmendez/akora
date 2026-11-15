import MobileDetails from '../MobileDetails'
import { Camera, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal'
import styles from './SocialBoost.module.css'

export const BOOST_SERVICE = 'Impulso en redes · 4 videos'
export const BOOST_CONTACT = `/contacto?servicio=${encodeURIComponent(BOOST_SERVICE)}`

function SocialBoost() {
  return (
    <section className={styles.section} id="impulso-redes">
      <div className="container">
        <Reveal className={styles.layout}>
          <div className={styles.copy}>
            <span className="eyebrow">Contenido que acerca tu negocio</span>
            <h2>Tu negocio tiene una historia.<br />Pongámosle tu voz.</h2>
            <p>Grabamos a los dueños de negocios para mostrar quiénes están detrás de cada marca y comenzar su impulso en redes.</p>
            <div className={styles.brands} aria-label="Marcas con las que trabajamos">
              <span>Ya trabajamos con</span>
              <strong>Barrios Valencia</strong><strong>La Tuba</strong><strong>Mr O.</strong>
            </div>
          </div>
          <div className={styles.plan}>
            <span className={styles.label}><Video size={18} /> Plan de impulso en redes</span>
            <div className={styles.price}>$500.000 <span>COP / paquete</span></div>
            <p className={styles.quantity}>4 videos para dar el primer paso</p>
            <MobileDetails summary="Qué incluye el paquete"><ul>
              <li><Camera size={19} /> Grabación con los dueños del negocio</li>
              <li><Video size={19} /> Contenido para presentar tu marca en redes</li>
              <li> Un inicio para tu presencia digital</li>
            </ul></MobileDetails>
            <Link to={BOOST_CONTACT} className="btn btn-gold">Quiero impulsar mi negocio </Link>
            <MobileDetails summary="Grabación, revisiones y entregas"><p className={styles.note}>Antes de empezar acordamos las ideas, ubicación de grabación, duración y formato de los videos, revisiones y fechas de entrega. Si necesitas publicación o pauta, su alcance e inversión se detallan en la propuesta.</p></MobileDetails>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default SocialBoost
