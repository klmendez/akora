import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal'
import logo from '../../assets/akora-logo-official.svg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowLine} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <span className="eyebrow">AKORA 212 / DIGITAL LAB</span>
          <h1 className={styles.title}>Tu negocio tiene potencial. <span className={styles.titleGold}>Nosotras lo llevamos al mundo digital.</span></h1>
          <p className={styles.lead}>
            Diseñamos marcas, desarrollamos experiencias digitales y creamos soluciones que ayudan a los negocios a crecer.
          </p>
          <div className={styles.actions}>
            <Link to="/contacto" className="btn btn-gold">Cuéntanos tu proyecto</Link>
            <Link to="/proyectos" className="btn btn-outline">Explorar proyectos</Link>
          </div>
          <p className={styles.disciplines}>DISEÑO / TECNOLOGÍA / ESTRATEGIA</p>
        </Reveal>

        <Reveal className={styles.visual} delay={150}>
          <div className={styles.logoGlow} aria-hidden="true" />
          <img src={logo} alt="AKORA 212 · Digital Lab" className={styles.logoImg} />
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
