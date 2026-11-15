import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BOOST_SERVICE } from '../SocialBoost/SocialBoost'
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../../config/contact'
import { MessageCircle, Mail } from 'lucide-react'
import Reveal from '../Reveal/Reveal'
import styles from './Contact.module.css'

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}


const SERVICE_OPTIONS = [
  'Una página web', 'Contenido para redes', 'Software o automatización',
  'Identidad visual', 'Necesito asesoría para decidir', BOOST_SERVICE,
]

const BUDGET_OPTIONS = [
  'Desde $500.000',
  '$900.000 - $1.200.000',
  'Más de $1.200.000',
  'Por definir',
]

const INITIAL_STATE = {
  name: '',
  business: '',
  email: '',
  whatsapp: '',
  service: SERVICE_OPTIONS[0],
  budget: 'Por definir',
  message: '',
}

function buildWhatsAppMessage(data) {
  return [
    `Hola AKORA 212, quiero cotizar un proyecto.`,
    `Nombre: ${data.name}`,
    data.business && `Empresa/emprendimiento: ${data.business}`,
    data.email && `Correo: ${data.email}`,
    data.whatsapp && `WhatsApp: ${data.whatsapp}`,
    `Servicio: ${data.service}`,
    data.plan && `Plan de interés: ${data.plan}`,
    `Presupuesto: ${data.budget}`,
    `Descripción: ${data.message}`,
  ]
    .filter(Boolean)
    .join('\n')
}

function Contact() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(() => {
    const requested = searchParams.get('servicio')
    const plan = searchParams.get('plan')
    return { ...INITIAL_STATE, plan: ['Página inicial', 'Web profesional', 'Catálogo digital'].includes(plan) ? plan : '', service: SERVICE_OPTIONS.includes(requested) ? requested : 'Necesito asesoría para decidir' }
  })
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const text = buildWhatsAppMessage(form)
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
    window.dispatchEvent(new CustomEvent('akora:conversion', { detail: { event: 'contact_intent', service: form.service } }))
    setSent(true)
  }

  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal className={styles.info}>
            <span className="eyebrow">Contacto</span>
            <h1 className="section-title">Toda gran idea empieza con una conversación.</h1>
            <p className="section-lead">
              Cuéntanos qué tienes en mente y conversemos sobre cómo hacerlo realidad.
            </p>

            <div className={styles.channels}>
              <a
                className={styles.channel}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.channelIcon} aria-hidden="true">
                  <MessageCircle size={18} strokeWidth={1.75} />
                </span>
                <span>
                  <div className={styles.channelLabel}>WhatsApp</div>
                  <div className={styles.channelValue}>{WHATSAPP_DISPLAY}</div>
                </span>
              </a>
              <a className={styles.channel} href="mailto:hola@akora212.com">
                <span className={styles.channelIcon} aria-hidden="true">
                  <Mail size={18} strokeWidth={1.75} />
                </span>
                <span>
                  <div className={styles.channelLabel}>Correo</div>
                  <div className={styles.channelValue}>hola@akora212.com</div>
                </span>
              </a>
              <a
                className={styles.channel}
                href="https://www.instagram.com/by_akora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.channelIcon} aria-hidden="true">
                  <InstagramIcon width={18} height={18} />
                </span>
                <span>
                  <div className={styles.channelLabel}>Instagram</div>
                  <div className={styles.channelValue}>@by_akora</div>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <p className={styles.full}>Al continuar se abrirá WhatsApp con tu idea lista para enviar.{form.plan && <><br />Plan de interés: <strong>{form.plan}</strong></>}</p>
              <div className={styles.field}>
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="business">Nombre de tu negocio</label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  value={form.business}
                  onChange={handleChange}
                  placeholder="Opcional"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Correo (opcional)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tucorreo@correo.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="whatsapp">WhatsApp (opcional)</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="Tu número de WhatsApp"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="service">¿Qué necesitas?</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="budget">Presupuesto aproximado</label>
                <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="message">Cuéntanos tu idea</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente qué necesitas"
                />
              </div>

              <div className={styles.submitRow}>
                <button type="submit" className="btn btn-gold">Conversar por WhatsApp</button>
                {sent && (
                  <span className={styles.success}>
                    Tu mensaje está preparado. Envíalo desde WhatsApp para iniciar la conversación.
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
