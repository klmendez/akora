import { useEffect, useState } from 'react'
import { Braces, Compass, Lightbulb, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import TrustedBy from '../components/TrustedBy/TrustedBy'
import ServicesOverview from '../components/ServicesOverview/ServicesOverview'
import Reveal from '../components/Reveal/Reveal'
import styles from './Home.module.css'
import alixsonImage from '../assets/projects/alixson-valentina.png'
import barriosImage from '../assets/projects/barrios-valencia.png'
import temporadaImage from '../assets/projects/la-temporada.png'
import laTubaImage from '../assets/projects/la-tuba.jpg'
import mrOImage from '../assets/projects/mr-o.jpg'
import modaImage from '../assets/projects/501.jpg'
import guajuiImage from '../assets/projects/rio-guajui.jpg'
import guapiImage from '../assets/projects/etnodesarrollo-guapi.png'
import abpImage from '../assets/projects/abp-seguros.png'
import abpPortalImage from '../assets/projects/abp-portal.jpg'

const STEPS = [
  { icon: Compass, title: 'Descubrimos', text: 'Entendemos tu negocio, tus objetivos y lo que necesitas.' },
  { icon: Lightbulb, title: 'Diseñamos', text: 'Definimos una estrategia y una propuesta a tu medida.' },
  { icon: Braces, title: 'Desarrollamos', text: 'Convertimos las ideas en una solución digital real.' },
  { icon: Rocket, title: 'Impulsamos', text: 'Te acompañamos en el lanzamiento y crecimiento.' },
]

const PROJECTS = [
  { title: 'Barrios Valencia Abogados', category: 'Sitio web corporativo', image: barriosImage, href: 'https://www.barriosvalencia.com/' },
  { title: 'La Tuba Gastrobar', category: 'Experiencia digital gastronómica', image: laTubaImage, href: 'https://latubagastrobar.netlify.app/' },
  { title: 'Mr O. School', category: 'Sitio web educativo bilingüe', image: mrOImage, href: 'https://misteroschool.com/' },
  { title: '501', category: 'Catálogo de moda urbana', image: modaImage, href: 'https://501m.netlify.app/' },
  { title: 'Consejo Comunitario del Río Guajuí', category: 'Portal comunitario', image: guajuiImage, href: 'https://guajui.netlify.app/' },
  { title: 'ABP Agencia de Seguros', category: 'Sitio web corporativo', image: abpImage, href: 'https://abpsegurosltda.com/' },
  { title: 'La Temporada', category: 'Tienda en línea', image: temporadaImage, href: 'https://la-temporada-eta.vercel.app/' },
  { title: 'Alixson Valentina', category: 'Portafolio profesional', image: alixsonImage, href: 'https://alixsonvalentina.netlify.app/' },
  { title: 'Planes de Etnodesarrollo de Guapi', category: 'Sitio web informativo', image: guapiImage, href: 'https://planesdeetnodesarrolloguapi.com/' },
  { title: 'ABP · Portal de clientes', category: 'Plataforma de seguros', image: abpPortalImage, href: 'https://abpsegurosltda.com/#/login-clientes' },
]

function Home() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [projectsPaused, setProjectsPaused] = useState(false)
  useEffect(() => {
    if (projectsPaused) return
    const timer = setInterval(() => setProjectIndex(index => (index + 1) % PROJECTS.length), 5000)
    return () => clearInterval(timer)
  }, [projectsPaused])
  const project = PROJECTS[projectIndex]

  return (
    <>
      <Hero />
      <TrustedBy />

      <ServicesOverview />

      <section className={styles.projects} id="proyectos">
        <div className={`container ${styles.projectLayout}`}>
          <Reveal className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Proyectos destacados</span>
            <h2 className={styles.sectionTitle}>Ideas que cobran vida</h2>
            <p className={styles.copy}>Cada proyecto es una historia de colaboración, creatividad y resultados.</p>
            <Link className={styles.textLink} to="/proyectos">Ver todos los proyectos </Link>
          </Reveal>
          <Reveal className={styles.projectShowcase}>
            <div aria-label="Proyectos destacados" aria-roledescription="carrusel">
              <a key={project.title} className={styles.project} href={project.href} target="_blank" rel="noopener noreferrer">
                <div className={styles.projectImage}><img src={project.image} alt={project.title} /></div>
                <h3>{project.title}</h3><p>{project.category}</p>
              </a>
              <div className={styles.projectControls}>
                <button type="button" onClick={() => setProjectIndex(index => (index - 1 + PROJECTS.length) % PROJECTS.length)} aria-label="Proyecto anterior">Anterior</button>
                <span>{String(projectIndex + 1).padStart(2, '0')} / {PROJECTS.length}</span>
                <button type="button" onClick={() => setProjectIndex(index => (index + 1) % PROJECTS.length)} aria-label="Proyecto siguiente">Siguiente</button>
                <button type="button" onClick={() => setProjectsPaused(value => !value)} aria-label={projectsPaused ? 'Reanudar proyectos' : 'Pausar proyectos'}>{projectsPaused ? 'Reanudar' : 'Pausar'}</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.process} id="proceso">
        <div className={`container ${styles.processLayout}`}>
          <Reveal className={styles.sectionIntro}>
            <span className={styles.eyebrow}>Nuestro proceso</span>
            <h2 className={styles.sectionTitle}>De la idea al resultado</h2>
            <p className={styles.copy}>Un camino claro, colaborativo y enfocado en lo que realmente importa: tu crecimiento.</p>
            <Link className={styles.textLink} to="/proceso">Conoce nuestro proceso</Link>
          </Reveal>
          <div><p className="mobile-rail-hint">Desliza para conocer las etapas</p><div className={`${styles.steps} mobile-rail`} tabIndex={0} role="region" aria-label="Etapas de trabajo">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <article className={styles.step}>
                  <div className={styles.stepNumber}>0{index + 1}</div>
                  <step.icon size={26} strokeWidth={1.6} />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div></div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className={`container ${styles.testimonialLayout}`}>
          <Reveal><span className={styles.eyebrow}>Un punto de partida</span><h2 className={styles.sectionTitle}>Una inversión pensada para tu siguiente paso.</h2></Reveal>
          <Reveal><p className={styles.copy}>Conoce los planes de desarrollo web y cómo definimos los entregables, las revisiones y el calendario de tu proyecto.</p><Link className={styles.textLink} to="/planes">Explorar planes e inversión</Link></Reveal>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div><span>¿Tienes un proyecto en mente?</span><h2>Hablemos de lo que podemos construir juntos</h2><p>Cuéntanos tu idea y conversemos sobre cómo hacerla realidad.</p></div>
          <Link to="/contacto">Hablemos de tu proyecto </Link>
        </div>
      </section>
    </>
  )
}

export default Home
