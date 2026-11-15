import ResponsiveText from '../ResponsiveText'

import alixsonImg from '../../assets/projects/alixson-valentina.png'
import barriosValenciaImg from '../../assets/projects/barrios-valencia.png'
import guapiImg from '../../assets/projects/etnodesarrollo-guapi.png'
import Reveal from '../Reveal/Reveal'
import styles from './ProjectsHero.module.css'

function ProjectsHero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.layout}>
          <Reveal className={styles.copy}>
            <h1><ResponsiveText short="Ideas hechas realidad.">Proyectos que hacen avanzar a una marca.</ResponsiveText></h1>
            <p>
              Cada sitio nace para resolver una necesidad concreta: vender, conectar,
              informar o hacer que una marca tenga una presencia que se siente propia.
            </p>
            <a href="#lista-proyectos" className={styles.exploreLink}>
              Explorar proyectos 
            </a>
          </Reveal>

          <Reveal className={styles.showcase} delay={130}>
            <figure className={`${styles.shot} ${styles.mainShot}`}>
              <img src={alixsonImg} alt="Portafolio de Alixson Valentina" />
            </figure>
            <figure className={`${styles.shot} ${styles.topShot}`}>
              <img src={guapiImg} alt="Planes de Etnodesarrollo de Guapi" />
            </figure>
            <figure className={`${styles.shot} ${styles.bottomShot}`}>
              <img src={barriosValenciaImg} alt="Sitio web de Barrios Valencia Abogados" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ProjectsHero
