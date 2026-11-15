import Reveal from '../Reveal/Reveal'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about} id="soluciones">
      <div className={styles.container}>
        <div className={styles.layout}>
          <Reveal className={styles.heading}>
            <span className={styles.eyebrow}>Soluciones para tu negocio</span>
            <h2 className={styles.title}>Una solución digital que trabaja contigo.</h2>
          </Reveal>

          <Reveal className={styles.content} delay={100}>
            <p>
              Combinamos diseño, desarrollo y automatización para que tu negocio
              comunique mejor, venda con claridad y pueda crecer sin complicarse.
            </p>
            <ul className={styles.points}>
              <li>Sitios web que convierten visitas en oportunidades.</li>
              <li>Herramientas que ordenan la operación diaria.</li>
              <li>Procesos que ahorran tiempo a tu equipo.</li>
            </ul>
            <Link to="/servicios" className="btn btn-outline">Conoce las soluciones</Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
