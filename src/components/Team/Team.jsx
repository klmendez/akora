import ResponsiveText from '../ResponsiveText'
import MobileDetails from '../MobileDetails'
import Reveal from '../Reveal/Reveal'
import styles from './Team.module.css'

const MEMBERS = [
  {
    initials: 'KM',
    name: 'Karen Mendez',
    role: 'Desarrollo y automatización',
    skills: ['Desarrollo web', 'Análisis de datos', 'Automatización', 'Gestión de proyectos', 'Soluciones administrativas'],
  },
  {
    initials: 'A',
    name: 'Angiee Argote',
    role: 'Diseño y experiencia',
    skills: ['Diseño', 'Contenido', 'Experiencia de usuario', 'Comunicación digital', 'Gestión de marca'],
  },
]

function Team() {
  return (
    <section id="nosotras" className={`${styles.team} page-top`}>
      <div className="container">
        <div className={styles.intro}>
          <Reveal>
            <span className="eyebrow">Sobre nosotras</span>
            <h1 className="section-title"><ResponsiveText short="Somos Karen y Angiee.">Detrás de cada proyecto hay ideas, personas y muchas ganas de crear.</ResponsiveText></h1>
            <p className="section-lead">
              Somos AKORA 212, un laboratorio digital donde combinamos diseño, creatividad y tecnología para desarrollar soluciones adaptadas a cada negocio.
            </p>
            <p className="section-lead"><ResponsiveText short="Ingenieras informáticas del Colegio Mayor del Cauca.">Somos Karen Mendez y Angiee Argote, ingenieras informáticas egresadas de la Institución Universitaria Colegio Mayor del Cauca.</ResponsiveText></p>
            <p className="section-lead desktop-only">Creemos que cada marca tiene una historia diferente y que la tecnología debe ayudarla a crecer, no complicarla.
            </p>
          </Reveal>
        </div>

        <p className="mobile-rail-hint">Desliza para conocernos</p><div className={`${styles.grid} mobile-rail`} tabIndex={0} role="region" aria-label="Equipo de AKORA">
          {MEMBERS.map((member, index) => (
            <Reveal key={member.name} delay={index * 100}>
              <div className={styles.card}>
                <span className={styles.avatar}>0{index + 1}</span>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.degree}>Ingeniera Informática</p>
                <div className={styles.role}>{member.role}</div>
                <MobileDetails summary="Especialidades"><div className={styles.skills}>
                  {member.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div></MobileDetails>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
