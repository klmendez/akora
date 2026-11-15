import { useState } from 'react'
import styles from './ProjectImage.module.css'

function ProjectImage({ src, alt = '' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={styles.wrap}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${styles.img} ${loaded ? styles.loaded : ''}`}
      />
    </div>
  )
}

export default ProjectImage
