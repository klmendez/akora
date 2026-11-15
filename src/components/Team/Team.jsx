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
            <h1 className="section-title">Detrás de cada proyecto hay ideas, personas y muchas ganas de crear.</h1>
            <p className="section-lead">
              Somos AKORA 212, un laboratorio digital donde combinamos diseño, creatividad y tecnología para desarrollar soluciones adaptadas a cada negocio.
            </p>
            <p className="section-lead">Somos Karen Mendez y Angiee Argote, ingenieras informáticas egresadas de la Institución Universitaria Colegio Mayor del Cauca.</p>
            <p className="section-lead">Creemos que cada marca tiene una historia diferente y que la tecnología debe ayudarla a crecer, no complicarla.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {MEMBERS.map((member, index) => (
            <Reveal key={member.name} delay={index * 100}>
              <div className={styles.card}>
                <span className={styles.avatar}>0{index + 1}</span>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.degree}>Ingeniera Informática</p>
                <div className={styles.role}>{member.role}</div>
                <div className={styles.skills}>
                  {member.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
