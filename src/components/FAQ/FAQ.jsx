import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from '../Reveal/Reveal'
import styles from './FAQ.module.css'

const QUESTIONS = [
  {
    q: 'Qué incluye el plan de impulso en redes',
    a: 'El paquete cuesta $500.000 COP e incluye 4 videos con grabación de los dueños del negocio para comenzar su impulso en redes. En la conversación inicial definimos las ideas, la grabación y las entregas.',
  },
  {
    q: 'Cuánto tarda una página web',
    a: 'Depende del alcance del proyecto. Una página sencilla puede tomar entre una y tres semanas, mientras que una plataforma personalizada requiere una planeación mayor.',
  },
  {
    q: 'La página funciona en celulares',
    a: 'Sí. Todos nuestros proyectos se diseñan para adaptarse a celulares, tabletas y computadores.',
  },
  {
    q: 'Necesito tener dominio y hosting',
    a: 'No necesariamente. Podemos orientarte durante la compra y configuración de estos servicios.',
  },
  {
    q: 'Realizan modificaciones después de la entrega',
    a: 'Sí. Cada proyecto incluye una etapa de ajustes y también pueden contratarse planes de mantenimiento.',
  },
  {
    q: 'Cómo se inicia un proyecto',
    a: 'Primero realizamos una conversación para conocer la idea y posteriormente entregamos una propuesta con alcance, tiempo y valor.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={`${styles.faq} section-alt page-top`}>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="section-title">Resolvemos tus dudas</h2>
          </Reveal>
        </div>

        <div className={styles.list}>
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={item.q} delay={index * 50}>
                <div className={styles.item}>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
                      <Plus size={16} strokeWidth={2} />
                    </span>
                  </button>
                  <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
                    <p className={styles.answerInner}>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
