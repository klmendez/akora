import { Target, Puzzle, MessageCircle, TrendingUp } from 'lucide-react'
import Reveal from '../Reveal/Reveal'
import styles from './Differentiators.module.css'

const ITEMS = [
  {
    icon: Target,
    title: 'Soluciones a la medida',
    text: 'Cada proyecto se diseña según las necesidades reales del negocio.',
  },
  {
    icon: Puzzle,
    title: 'Diseño y funcionalidad',
    text: 'No solo buscamos que se vea bien, sino que sea sencillo, rápido y útil.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicación cercana',
    text: 'Acompañamos al cliente durante cada etapa del proyecto.',
  },
  {
    icon: TrendingUp,
    title: 'Visión estratégica',
    text: 'Creamos soluciones pensando en el crecimiento y la operación del negocio.',
  },
]

function Differentiators() {
  return (
    <section className={`${styles.differentiators} section-alt`}>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow">Diferenciales</span>
            <h2 className="section-title">¿Por qué trabajar con AKORA 212?</h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className={styles.card}>
                <div className={styles.icon} aria-hidden="true">
                  <item.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators
