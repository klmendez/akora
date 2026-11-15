import { Link } from 'react-router-dom'
import { PROJECT_CASES } from '../../data/projectCases'
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
import abpPortalImg from '../../assets/projects/abp-portal.jpg'
import styles from './Projects.module.css'

const FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Diseño web' },
  { id: 'contenido', label: 'Contenido' },
  { id: 'identidad', label: 'Identidad' },
  { id: 'sistema', label: 'Software' },
  { id: 'automatizacion', label: 'Automatización' },
]

const PROJECTS = [
  { id: 'aygomez', order: 3, title: 'AYGomez Consultoría', category: 'Identidad corporativa · Diseño digital', filters: ['identidad'], image: '/projects/aygomez/identidad.png', desc: 'Una identidad visual para conectar la marca con sus materiales corporativos.', features: ['Logotipo y variantes', 'Paleta de marca', 'Aplicaciones corporativas'], tags: ['Identidad', 'Consultoría', 'Diseño digital'] },
  {
    id: 'la-tuba', order: 7, title: 'La Tuba Gastrobar', category: 'Desarrollo web · Carta digital · Contenido',
    filters: ['web', 'contenido'], image: laTubaImg, url: 'https://latubagastrobar.netlify.app/',
    desc: 'Proyecto web para La Tuba Gastrobar, una de las marcas con las que trabajamos en AKORA 212.',
    features: ['Presencia digital del negocio', 'Identidad de marca'], tags: ['Gastronomía', 'Diseño web'],
  },
  {
    id: 'mr-o', order: 8, title: 'Mr O. School', category: 'Sitio web educativo bilingüe',
    filters: ['web'], image: mrOImg, url: 'https://misteroschool.com/',
    desc: 'Sitio en español e inglés para presentar programas de idiomas, el perfil del profesor y los planes de la escuela.',
    features: ['Navegación en dos idiomas', 'Programas de inglés y español', 'Presentación de planes', 'Contacto por WhatsApp'], tags: ['Educación', 'Bilingüe', 'Marca personal'],
  },
  {
    id: '501', order: 9, title: 'Almacén 501', category: 'Catálogo · Contenido comercial',
    filters: ['web', 'sistema', 'contenido'], image: modaImg, url: 'https://501m.netlify.app/',
    desc: 'Catálogo pensado para celulares, con experiencias para compradores al detal y al por mayor.',
    features: ['Búsqueda y filtros de productos', 'Favoritos y vista rápida', 'Selección de cantidades', 'Consultas por WhatsApp'], tags: ['Catálogo', 'Moda', 'Pedidos'],
  },
  {
    id: 'rio-guajui', order: 10, title: 'Consejo Comunitario del Río Guajuí', category: 'Portal comunitario',
    filters: ['web'], image: guajuiImg, url: 'https://guajui.netlify.app/',
    desc: 'Portal del Consejo Comunitario del Río Guajuí, una presencia digital para su identidad y su territorio.',
    features: ['Identidad del consejo comunitario', 'Información del territorio'], tags: ['Comunidad', 'Territorio', 'Diseño web'],
  },
  {
    id: 'abp-gestion', order: 11, title: 'ABP · Portal de clientes', category: 'Plataforma de seguros',
    filters: ['sistema'], image: abpPortalImg, url: 'https://abpsegurosltda.com/#/login-clientes',
    desc: 'Acceso digital para los clientes de ABP, integrado con la presencia web de la agencia.',
    features: ['Acceso para clientes', 'Plataforma de seguros'], tags: ['Software a medida', 'Portal de clientes', 'Seguros'],
  },
  {
    id: 'abp-seguros',
    order: 5,
    title: 'ABP Agencia de Seguros',
    category: 'Sitio web corporativo',
    filters: ['web'],
    image: abpSegurosImg,
    url: 'https://abpsegurosltda.com/',
    concept: false,
    desc: 'Página corporativa para presentar los servicios de la agencia, generar confianza y facilitar el contacto directo con asesores.',
    features: ['Presentación de servicios', 'Formularios de contacto', 'Acceso directo a asesores', 'Diseño adaptable a dispositivos'],
    tags: ['Diseño web', 'Corporativo', 'Formularios'],
  },
  {
    id: 'barrios-valencia',
    order: 2,
    title: 'Barrios Valencia Abogados',
    category: 'Desarrollo web · Estrategia audiovisual',
    filters: ['web', 'contenido'],
    image: barriosValenciaImg,
    url: 'https://www.barriosvalencia.com/',
    concept: false,
    desc: 'Sitio web para firma de abogados especialistas en derecho pensional y laboral, con casos de éxito y agendamiento de consultas.',
    features: ['Información de servicios jurídicos', 'Casos de éxito', 'Perfil profesional', 'Agendamiento de consultas'],
    tags: ['Diseño web', 'Corporativo', 'Agendamiento'],
  },
  {
    id: 'etnodesarrollo-guapi',
    order: 4,
    title: 'Planes de Etnodesarrollo de Guapi',
    category: 'Sitio web informativo',
    filters: ['web'],
    image: etnodesarrolloGuapiImg,
    url: 'https://planesdeetnodesarrolloguapi.com/',
    concept: false,
    desc: 'Plataforma informativa que presenta los planes de etnodesarrollo de los cinco Consejos Comunitarios de Guapi, Cauca.',
    features: ['Consulta de planes de etnodesarrollo', 'Información de cinco consejos comunitarios', 'Contenido territorial y comunitario', 'Navegación adaptable'],
    tags: ['Diseño web', 'Contenido', 'Responsive'],
  },
  {
    id: 'alixson-valentina',
    order: 1,
    title: 'Alixson Valentina',
    category: 'Portafolio profesional',
    filters: ['web'],
    image: alixsonValentinaImg,
    url: 'https://alixsonvalentina.netlify.app/',
    concept: false,
    desc: 'Portafolio digital para modelo y creadora de contenido UGC, diseñado para presentar su perfil, experiencia y colaboraciones.',
    features: ['Presentación de perfil profesional', 'Galería de trabajos', 'Muestra de colaboraciones UGC', 'Canales de contacto'],
    tags: ['Diseño web', 'Portafolio', 'Marca personal'],
  },
  {
    id: 'la-temporada',
    order: 6,
    title: 'La Temporada',
    category: 'Tienda en línea',
    filters: ['web', 'sistema', 'automatizacion'],
    image: laTemporadaImg,
    url: 'https://la-temporada-eta.vercel.app/',
    concept: false,
    desc: 'Tienda en línea de regalos y productos de temporada, con catálogo, carrito y gestión de pedidos.',
    features: ['Catálogo por temporadas', 'Carrito de compras', 'Datos de entrega y formas de pago', 'Registro y envío de pedidos'],
    tags: ['E-commerce', 'Carrito', 'Pedidos', 'Responsive'],
  },
]

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
          <p>Conoce el objetivo, nuestro trabajo y la solución de cada proyecto. Explora capturas reales en escritorio y móvil, identidades y piezas de contenido.</p>
        </div>
        <div className={styles.filters}>
          {FILTERS.map((filter) => (
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

        <p className="mobile-rail-hint">Desliza para ver más proyectos. Toca una captura para ampliarla.</p><div key={active} className={`${styles.grid} mobile-rail`} tabIndex={0} role="region" aria-label="Proyectos de AKORA">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 80}>
              <article id={project.id} className={styles.projectRow} aria-label={project.title}>
                  <div className={styles.thumb}>
                    <ProjectGallery title={project.title} captures={projectCaptures[project.id]} fallback={project.image} />
                  </div>
                  <div className={styles.body}>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={`${styles.desc} desktop-only`}>{project.desc}</p>
                    <ul className={`${styles.features} desktop-only`} aria-label={`Funcionalidades de ${project.title}`}>
                      {project.features.map((feature) => (
                        <li key={feature}>
                          <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`${styles.tags} desktop-only`}>
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <details className={styles.caseStudy}>
                      <summary>Conoce el caso</summary>
                      <dl><dt>El objetivo</dt><dd>{PROJECT_CASES[project.id].need}</dd><dt>Nuestro trabajo</dt><dd>{PROJECT_CASES[project.id].work}</dd><dt>La solución entregada</dt><dd>{PROJECT_CASES[project.id].result}</dd></dl>
                      {PROJECT_CASES[project.id].posts?.map((post, i) => <Link className={styles.linkBtn} key={post} to={`/servicios/contenido-digital?video=${post}#contenido-redes`}>Reproducir video {i + 1}</Link>)}
                    </details>
                    <div className={styles.actionsRow}>
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
