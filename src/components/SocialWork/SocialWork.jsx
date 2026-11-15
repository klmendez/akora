import { sitePath } from '../../config/site'
import { Camera } from 'lucide-react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { BOOST_CONTACT } from '../SocialBoost/SocialBoost'
import styles from './SocialWork.module.css'

const POSTS = [
  { id: 'DdPS5UmqFZw', brand: 'AKORA 212' },
  { id: 'DfscZNpmemI', brand: 'La Tuba Gastrobar' },
  { id: 'DfpxWgegVWK', brand: 'Barrios Valencia', detail: 'Primera publicación' },
  { id: 'Dej7cG-AjMT', brand: 'Barrios Valencia', detail: 'Segunda publicación' },
]

function SocialWork() {
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const selected = POSTS.findIndex(item => item.id === params.get('video'))
  const active = selected < 0 ? 0 : selected
  const setActive = index => {
    const next = new URLSearchParams(params)
    next.set('video', POSTS[index].id)
    navigate({ pathname: location.pathname, search: `?${next}`, hash: location.hash }, { replace: true, preventScrollReset: true })
  }
  const post = POSTS[active]

  return (
    <section className={styles.section} aria-labelledby="social-work-title" id="contenido-redes">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Nuestro trabajo en redes</span>
          <h2 id="social-work-title">Historias reales.<br />Marcas con voz propia<span>.</span></h2>
          <p>Conoce algunas de las piezas que hemos creado. Contenido para acercar las marcas a las personas y mostrar lo que hace especial a cada negocio.</p>
          <div className={styles.selector} aria-label="Elige una publicación">
            {POSTS.map((item, index) => (
              <button type="button" key={item.id} onClick={() => setActive(index)} aria-pressed={active === index} aria-controls="social-post-viewer">
                <span className={styles.number}>0{index + 1}</span>
                <span>{item.brand}{item.detail && <small>{item.detail}</small>}</span>
              </button>
            ))}
          </div>
          <Link to={BOOST_CONTACT} className={styles.contact}>Hagamos contenido para tu negocio</Link>
        </div>
        <div className={styles.viewer} id="social-post-viewer" role="region" aria-label={`Publicación de ${post.brand}`}>
          <div className={styles.viewerHeading}>
            <span><Camera size={16} aria-hidden="true" /> {post.brand}</span>
            <span>{active + 1} / {POSTS.length}</span>
          </div>
          <video
            key={post.id}
            src={sitePath(`/social/${post.id}.mp4`)}
            poster={sitePath(`/social/${post.id}.jpg`)}
            aria-label={`Video de ${post.brand}${post.detail ? `: ${post.detail}` : ''}`}
            controls
            playsInline
            preload="none"
            className={styles.video}
          >
            Tu navegador no puede reproducir este video.
          </video>
          <p className={styles.note}>Reproduce el video aquí. Puedes activar el sonido y ampliar la pantalla desde los controles.</p>
        </div>
      </div>
    </section>
  )
}

export default SocialWork
