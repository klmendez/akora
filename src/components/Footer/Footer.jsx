import { Link } from 'react-router-dom'
import logo from '../../assets/akora-logo-official.svg'
import styles from './Footer.module.css'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../../config/contact'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={logo} alt="AKORA 212 · Digital Lab" className={styles.logoImg} />
            <p className={styles.tagline}>
              Construimos el futuro digital de tu negocio. Diseño web,
              desarrollo de software, automatización e impulso en redes.
            </p>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h4>Navegación</h4>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/proyectos">Proyectos</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/servicios/contenido-digital#impulso-redes">Impulso en redes</Link></li>
                <li><Link to="/nosotras">Nosotras</Link></li>
                <li><Link to="/planes">Planes</Link></li>
                <li><Link to="/proceso">Proceso</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Contacto</h4>
              <ul>
                <li><span>hola@akora212.com</span></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></li>
                <li><span>Colombia</span></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacidad">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} AKORA 212. Todos los derechos reservados.</span>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/by_akora/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
