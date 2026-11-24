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
import { PROJECTS } from '../data/projects'

const STEPS = [
  { icon: Compass, title: 'Descubrimos', text: 'Entendemos tu negocio, tus objetivos y lo que necesitas.' },
  { icon: Lightbulb, title: 'Diseñamos', text: 'Definimos una estrategia y una propuesta a tu medida.' },
  { icon: Braces, title: 'Desarrollamos', text: 'Convertimos las ideas en una solución digital real.' },
  { icon: Rocket, title: 'Impulsamos', text: 'Te acompañamos en el lanzamiento y crecimiento.' },
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
    <div className={styles.home}>
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
              <Link key={project.title} className={styles.project} to={`/proyectos/${project.id}`}>
                <div className={styles.projectImage}><img src={project.image} alt={project.title} /></div>
                <h3>{project.title}</h3><p>{project.category}</p>
              </Link>
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
          <div><div className={styles.steps} role="region" aria-label="Etapas de trabajo">
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
          <div><span>Tu proyecto comienza aquí</span><h2>Hablemos de lo que podemos construir juntos</h2><p>Cuéntanos tu idea y conversemos sobre cómo hacerla realidad.</p></div>
          <Link to="/contacto">Hablemos de tu proyecto </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
