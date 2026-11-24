import ResponsiveText from '../ResponsiveText'
import { SERVICES } from '../../data/services'
import { Blocks, Braces, Compass, Workflow, Camera, Plus } from 'lucide-react'
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
            <span className={styles.sectionLabel}>Lo que hacemos</span>
            <h2 id="home-services-title">Soluciones digitales<br />para negocios reales<span>.</span></h2>
            <p className={styles.introText}>Diseñamos, desarrollamos y conectamos tecnología con las necesidades de tu negocio.</p>
          </div>
        </Reveal>

        <Reveal className={styles.accordion} delay={100}>
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index]
            return (
              <details className={styles.item} name="home-services" key={service.slug}>
                <summary className={styles.itemSummary}>
                  <span className={styles.itemIcon}><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span>
                  <span>{service.title}</span>
                  <Plus className={styles.expandIcon} size={20} aria-hidden="true" />
                </summary>
                <div className={styles.itemContent}>
                  <p><ResponsiveText short={service.short}>{service.text}</ResponsiveText></p>
                  <Link to={`/servicios/${service.slug}`}>Conocer servicio</Link>
                </div>
              </details>
            )
          })}
        </Reveal>
        <div className={styles.allServices}><Link to="/servicios">Explorar todos los servicios</Link></div>
      </div>
    </section>
  )
}

export default ServicesOverview
