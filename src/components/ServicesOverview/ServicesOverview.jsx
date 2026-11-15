import { SERVICES } from '../../data/services'
import { Blocks, Braces, Compass, Workflow, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal'
import styles from './ServicesOverview.module.css'

const ICONS = [Camera, Braces, Blocks, Workflow, Compass]

function ServicesOverview() {
  return (
    <section id="servicios" className={styles.section} aria-labelledby="home-services-title">
      <div className="container">
        <Reveal className={styles.intro}>
          <div>
            <span className={styles.eyebrow}>Nuestros servicios</span>
            <h2 id="home-services-title">Soluciones digitales<br />para negocios reales<span>.</span></h2>
          </div>
          <div className={styles.summary}>
            <p>Contenido que conecta, marcas con identidad y tecnología que simplifica. Diseñamos la solución que tu negocio necesita para avanzar.</p>
            <Link to="/servicios">Conoce todos nuestros servicios </Link>
          </div>
        </Reveal>

        <p className={styles.scrollHint}>Desliza para explorar </p>
        <div className={styles.row} tabIndex={0} role="region" aria-label="Nuestros cinco servicios">
          {SERVICES.map((service, index) => (
            <div key={service.title} className={styles.service}>
              <article>
                <div className={styles.serviceTop}>
                  <span>0{index + 1}</span>
                  {(() => { const Icon = ICONS[index]; return <Icon size={28} strokeWidth={1.3} aria-hidden="true" /> })()}
                </div>
                <h3><Link to={`/servicios/${service.slug}`}>{service.title}</Link></h3>
                <p>{service.text}</p>
                <ul aria-label={`Soluciones de ${service.title}`}>
                  {service.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
