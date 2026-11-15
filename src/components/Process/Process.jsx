import ResponsiveText from '../ResponsiveText'
import Reveal from '../Reveal/Reveal'
import styles from './Process.module.css'

const STEPS = [
 { number: '01', title: 'Descubrimiento', text: 'Conversamos sobre tu negocio, tus clientes y lo que quieres resolver. Definimos juntas el objetivo.' },
 { number: '02', title: 'Propuesta', text: 'Acordamos alcance, entregables, inversión, revisiones y calendario. Sabes qué vamos a construir antes de empezar.' },
 { number: '03', title: 'Diseño y desarrollo', text: 'Damos forma a la solución y compartimos avances para mantenerte cerca de las decisiones.' },
 { number: '04', title: 'Revisión', text: 'Probamos el trabajo contigo, recogemos comentarios y realizamos los ajustes acordados.' },
 { number: '05', title: 'Entrega', text: 'Entregamos o publicamos el proyecto y te orientamos en su uso. El acompañamiento posterior se define en la propuesta.' },
]

function Process() {
  return (
    <section id="proceso" className={`${styles.process} section-alt page-top`}>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow">Cómo trabajamos</span>
            <h1 className="section-title"><ResponsiveText short="De la idea a la entrega.">De la primera conversación a la entrega.</ResponsiveText></h1>
            <p className="section-lead">
              Un método claro para que sepas exactamente qué esperar en cada etapa de tu proyecto.
            </p>
          </Reveal>
        </div>

        <p className="mobile-rail-hint">Desliza para conocer las cinco etapas</p><div className={`${styles.list} mobile-rail`} tabIndex={0} role="region" aria-label="Proceso de trabajo">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 60}>
              <div className={styles.step}>
                <span className={styles.number}>{step.number}</span>
                <div className={styles.content}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
