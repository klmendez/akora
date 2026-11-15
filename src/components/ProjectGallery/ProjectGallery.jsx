import { sitePath } from '../../config/site'
import { useEffect, useRef, useState } from 'react'
import { Image, Monitor, Smartphone, X } from 'lucide-react'
import styles from './ProjectGallery.module.css'

function ProjectGallery({ title, captures, fallback }) {
  const images = captures?.length ? captures : [{ src: fallback, device: 'desktop', label: 'Vista general' }]
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const dialog = useRef(null)
  const current = images[selected]
  const labelFor = device => device === 'brand' ? 'Identidad' : device === 'mobile' ? 'Móvil' : 'Escritorio'
  const deviceLabel = labelFor(current.device)
  const DeviceIcon = current.device === 'brand' ? Image : current.device === 'mobile' ? Smartphone : Monitor

  useEffect(() => {
    const modal = dialog.current
    if (!expanded) {
      if (modal.open) modal.close()
      return
    }
    modal.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
      if (modal.open) modal.close()
    }
  }, [expanded])

  function move(direction) {
    setSelected(index => (index + direction + images.length) % images.length)
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.caption}>
        <span><DeviceIcon size={16} />{deviceLabel} <span aria-hidden="true">/</span> {current.label}</span>
        <button type="button" onClick={() => setExpanded(true)} aria-label={`Ampliar capturas de ${title}`}> Ampliar</button>
      </div>
      <button type="button" className={styles.stage} onClick={() => setExpanded(true)} aria-label={`Ver ${current.label} de ${title} en ${deviceLabel.toLowerCase()}`}>
        <img src={sitePath(current.src)} alt={`${title}: ${current.label}, vista de ${deviceLabel.toLowerCase()}`} loading="lazy" width={current.width} height={current.height} />
      </button>
      <div className={styles.thumbnails} aria-label={`Capturas de ${title}`}>
        {images.map((capture, index) => (
          <button type="button" key={capture.src} onClick={() => setSelected(index)} aria-pressed={selected === index} aria-label={`${capture.label} · ${labelFor(capture.device)} · ${title}`}>
            <img src={sitePath(capture.src)} alt="" loading="lazy" />
            <span>{capture.device === 'brand' ? <Image size={13} /> : capture.device === 'mobile' ? <Smartphone size={12} /> : <Monitor size={13} />}{capture.label}</span>
          </button>
        ))}
      </div>
      <dialog ref={dialog} className={styles.modal} onCancel={() => setExpanded(false)} onClick={event => { if (event.target === event.currentTarget) setExpanded(false) }} onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
      }} aria-label={`Galería de ${title}`}>
        <div className={styles.modalContent}>
          <header className={styles.modalHeader}>
            <div><strong>{title}</strong><p>{current.label} · {deviceLabel}</p></div>
            <button type="button" onClick={() => setExpanded(false)} aria-label="Cerrar galería" autoFocus><X size={22} /></button>
          </header>
          <div className={styles.fullImage}><img src={sitePath(current.src)} alt={`${title}: ${current.label}, ${deviceLabel.toLowerCase()}`} width={current.width} height={current.height} /></div>
          <footer className={styles.modalControls}>
            <button type="button" onClick={() => move(-1)} aria-label="Captura anterior">Anterior</button>
            <span aria-live="polite">{selected + 1} / {images.length}</span>
            <button type="button" onClick={() => move(1)} aria-label="Captura siguiente">Siguiente</button>
          </footer>
        </div>
      </dialog>
    </div>
  )
}

export default ProjectGallery
