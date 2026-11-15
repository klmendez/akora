import Reveal from '../Reveal/Reveal'
import styles from './Technologies.module.css'

const GROUPS = [
  {
    title: 'Diseño y prototipado',
    items: ['Figma', 'Canva', 'Adobe Illustrator', 'UX/UI', 'Prototipos interactivos'],
  },
  {
    title: 'Desarrollo web',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Lógica y backend',
    items: ['Python', 'PHP', 'Node.js', 'APIs e integraciones', 'Formularios dinámicos'],
  },
  {
    title: 'Bases de datos',
    items: ['Firebase', 'MySQL', 'PostgreSQL', 'Google Sheets', 'Almacenamiento en la nube'],
  },
  {
    title: 'Publicación y gestión',
    items: ['GitHub', 'GitHub Pages', 'Netlify', 'Vercel', 'Dominios y hosting', 'Google Analytics'],
  },
  {
    title: 'Automatización',
    items: ['Integraciones WhatsApp', 'Envío automático de correos', 'Generación de reportes', 'Procesamiento de datos'],
  },
]

function Technologies() {
  return (
    <section className={`${styles.technologies} section-alt`}>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow">Stack tecnológico</span>
            <h2 className="section-title">Tecnologías que usamos</h2>
            <p className="section-lead">
              Trabajamos con tecnologías modernas, seleccionadas según las necesidades de cada proyecto.
            </p>
          </Reveal>
        </div>

        <div className={styles.groups}>
          {GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <div className={styles.group}>
                <div className={styles.groupTitle}>{group.title}</div>
                <div className={styles.chips}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className={styles.note}>
            Elegimos la tecnología adecuada para que cada solución sea rápida, segura,
            escalable y fácil de usar.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Technologies
