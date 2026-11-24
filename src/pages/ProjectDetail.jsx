import { Link, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import { PROJECTS } from '../data/projects'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find(item => item.id === slug)

  if (!project) return <section className={`${styles.detail} page-top`}><div className="container"><h1>Proyecto no encontrado</h1><Link to="/proyectos">Volver a proyectos</Link></div></section>

  return <>
    <PageMeta title={`${project.title} | Proyectos AKORA 212`} description={project.description} />
    <section className={`${styles.detail} page-top`}>
      <div className="container">
        <Link className={styles.back} to="/proyectos">Volver a proyectos</Link>
        <div className={styles.hero}>
          <div className={styles.visual}><img src={project.image} alt={`Vista de ${project.title}`} /></div>
          <div className={styles.intro}><span>{project.category}</span><h1>{project.title}</h1><p>{project.description}</p>
            <div className={styles.actions}>{project.url && <a href={project.url} target="_blank" rel="noreferrer">Ver sitio <ExternalLink size={15} /></a>}<Link to={`/contacto?servicio=${encodeURIComponent('Una página web')}&proyecto=${encodeURIComponent(project.title)}`}>Hablemos de un proyecto similar</Link></div>
          </div>
        </div>
        <div className={styles.columns}>
          <section><span className={styles.label}>Qué incluye</span><h2>Una experiencia hecha para su objetivo.</h2><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
          <section><span className={styles.label}>Tecnología</span><h2>Herramientas del proyecto</h2><div className={styles.tags}>{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><p className={styles.note}>La tecnología se confirma según el alcance y las integraciones acordadas.</p></section>
          <section className={styles.investment}><span className={styles.label}>Inversión de referencia</span><h2>{project.investment}</h2><p>El valor final depende del contenido, las funciones, las integraciones y los entregables. Dominio, hosting y servicios externos se cotizan aparte.</p><Link to="/planes">Ver planes y alcance</Link></section>
        </div>
      </div>
    </section>
  </>
}
