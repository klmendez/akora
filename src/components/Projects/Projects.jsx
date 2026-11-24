import { Link } from 'react-router-dom'
import { PROJECT_CASES } from '../../data/projectCases'
import { PROJECTS, PROJECT_FILTERS } from '../../data/projects'
import { useMemo, useState } from 'react'
import { Check } from 'lucide-react'
import Reveal from '../Reveal/Reveal'
import ProjectGallery from '../ProjectGallery/ProjectGallery'
import projectCaptures from '../../data/projectCaptures.json'
import abpSegurosImg from '../../assets/projects/abp-seguros.png'
import barriosValenciaImg from '../../assets/projects/barrios-valencia.png'
import etnodesarrolloGuapiImg from '../../assets/projects/etnodesarrollo-guapi.png'
import alixsonValentinaImg from '../../assets/projects/alixson-valentina.png'
import laTemporadaImg from '../../assets/projects/la-temporada.png'
import laTubaImg from '../../assets/projects/la-tuba.jpg'
import mrOImg from '../../assets/projects/mr-o.jpg'
import modaImg from '../../assets/projects/501.jpg'
import guajuiImg from '../../assets/projects/rio-guajui.jpg'
import styles from './Projects.module.css'

function Projects() {
  const [active, setActive] = useState('todos')

  const filtered = useMemo(() => {
    const projects = active === 'todos'
      ? PROJECTS
      : PROJECTS.filter((project) => project.filters.includes(active))

    return [...projects].sort((a, b) => a.order - b.order)
  }, [active])

  return (
    <section id="lista-proyectos" className={styles.projects}>
      <div className="container">
        <div className={styles.galleryIntro}>
          <span>Dentro de cada proyecto</span>
          <p>Conoce el objetivo, nuestro trabajo y la soluciÃ³n de cada proyecto. Explora capturas reales en escritorio y mÃ³vil, identidades y piezas de contenido.</p>
        </div>
        <div className={styles.filters}>
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`${styles.filterBtn} ${active === filter.id ? styles.active : ''}`}
              aria-pressed={active === filter.id}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="mobile-rail-hint">Desliza para ver mÃ¡s proyectos. Toca una captura para ampliarla.</p><div key={active} className={`${styles.grid} mobile-rail`} tabIndex={0} role="region" aria-label="Proyectos de AKORA">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 80}>
              <article id={project.id} className={styles.projectRow} aria-label={project.title}>
                  <div className={styles.thumb}>
                    <ProjectGallery title={project.title} captures={projectCaptures[project.id]} fallback={project.image} />
                  </div>
                  <div className={styles.body}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.title}><Link to={`/proyectos/${project.id}`}>{project.title}</Link></h3>
                    <p className={`${styles.desc} desktop-only`}>{project.description}</p>
                    <ul className={`${styles.features} desktop-only`} aria-label={`Funcionalidades de ${project.title}`}>
                      {project.features.map((feature) => (
                        <li key={feature}>
                          <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`${styles.tags} desktop-only`}>
                      {project.technologies.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <details className={`${styles.caseStudy} desktop-only`}>
                      <summary>Conoce el caso</summary>
                      <dl><dt>El objetivo</dt><dd>{PROJECT_CASES[project.id].need}</dd><dt>Nuestro trabajo</dt><dd>{PROJECT_CASES[project.id].work}</dd><dt>La soluciÃ³n entregada</dt><dd>{PROJECT_CASES[project.id].result}</dd></dl>
                      {PROJECT_CASES[project.id].posts?.map((post, i) => <Link className={styles.linkBtn} key={post} to={`/servicios/contenido-digital?video=${post}#contenido-redes`}>Reproducir video {i + 1}</Link>)}
                    </details>
                    <div className={styles.actionsRow}>
                      <Link to={`/proyectos/${project.id}`} className={styles.linkBtn}>Conocer este proyecto</Link>
                      {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.linkBtn} aria-label={`Visitar sitio de ${project.title}`}>
                        {project.linkLabel || 'Visitar sitio'} 
                      </a>}
                    </div>
                  </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
