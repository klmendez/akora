import ResponsiveText from '../components/ResponsiveText'
import MobileDetails from '../components/MobileDetails'
import { sitePath } from '../config/site'
import { Link, useParams } from 'react-router-dom'
import { SERVICES, serviceContact } from '../data/services'
import SocialBoost from '../components/SocialBoost/SocialBoost'
import SocialWork from '../components/SocialWork/SocialWork'
import styles from './Editorial.module.css'
export default function ServicioDetalle() {
 const { slug } = useParams()
 const service = SERVICES.find(item => item.slug === slug)
 if (!service) return <section className={styles.page}><div className="container"><h1>Servicio no encontrado</h1><Link className={styles.textLink} to="/servicios">Explorar servicios</Link></div></section>
 return <><section className={styles.page}><div className="container">
  <div className={styles.intro}><Link className={styles.textLink} to="/servicios">Todos los servicios</Link><div className={styles.serviceLabel}><span className="eyebrow">{service.title}</span></div><h1>{service.headline}</h1><p><ResponsiveText short={service.short}>{service.text}</ResponsiveText></p><div className={styles.actions}><Link className="btn btn-gold" to={serviceContact(service)}>Cuéntanos tu proyecto</Link><Link className={styles.textLink} to={service.slug === 'contenido-digital' ? '#impulso-redes' : '/planes'}>Ver inversión y alcance</Link></div></div>
  <MobileDetails summary="Para quién es y qué incluye"><div className={styles.split}><div><span className="eyebrow">Pensado para ti</span><h2>Una solución con propósito.</h2><p>{service.fit}</p><p>Primero entendemos tu negocio. Después acordamos qué vamos a crear, cómo lo revisaremos y qué recibirás al finalizar.</p></div><div><h2>Qué podemos entregarte</h2><ul className={styles.deliverables}>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul><p>El alcance, las revisiones y el calendario se definen en tu propuesta.</p></div></div></MobileDetails>
  {service.slug !== 'contenido-digital' && <div className={styles.example}><img src={sitePath(service.image)} alt={`Trabajo de AKORA 212 para ${service.example}`} loading="lazy" /><div><span className="eyebrow">Un caso real</span><h2>{service.example}</h2><p>{service.exampleText}</p><Link className={styles.textLink} to={service.href}>Explorar el proyecto</Link></div></div>}
 </div></section>{service.slug === 'contenido-digital' && <><SocialBoost /><SocialWork /></>}</>
}
