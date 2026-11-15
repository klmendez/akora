import { Link } from 'react-router-dom'
import { SERVICES } from '../../data/services'
import Reveal from '../Reveal/Reveal'
import styles from '../../pages/Editorial.module.css'
export default function Services() {
 return <section className={styles.page}><div className="container">
  <Reveal className={styles.intro}><span className="eyebrow">Nuestros servicios</span><h1>Creatividad y tecnología.<br />Una misma dirección.</h1><p>Tu negocio tiene su propia historia. Combinamos contenido, diseño y desarrollo para ayudarte a contarla y construir lo que sigue.</p><Link className={styles.textLink} to="/planes">Explorar planes e inversión</Link></Reveal>
  <div className={styles.list}>{SERVICES.map((service, i) => <Reveal key={service.slug}><article className={styles.row}>
   <span className={styles.number}>0{i + 1}</span><div><span className="eyebrow">{service.title}</span><h2>{service.headline}</h2></div><div><p>{service.text}</p><Link className={styles.textLink} to={`/servicios/${service.slug}`}>Explorar {service.title.toLowerCase()}</Link></div>
  </article></Reveal>)}</div>
  <details className={styles.secondary}><summary>La tecnología detrás de las ideas</summary><p>Trabajamos con herramientas como React, Python y bases de datos según las necesidades de cada proyecto. Elegimos la tecnología después de entender el problema, el presupuesto y quién usará la solución.</p></details>
 </div></section>
}
