import { sitePath } from '../../config/site'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import Reveal from '../Reveal/Reveal'
import abpSegurosLogo from '../../assets/logos/abp-transparente.png'
import barriosValenciaLogo from '../../assets/logos/barrios-valencia.png'
import laTubaLogo from '../../assets/logos/la-tuba.png'
import mrOLogo from '../../assets/logos/mr-o.png'
import guajuiLogo from '../../assets/logos/guajui-transparente.png'
import modaLogo from '../../assets/logos/501.svg'
import temporadaLogo from '../../assets/logos/temporada-transparente.png'
import alixsonPhoto from '../../assets/logos/alixson-valentina.webp'
import guapiLogo from '../../assets/logos/etnodesarrollo-guapi.webp'
import avenaLogo from '../../assets/logos/avena-cubana.png'
import styles from './TrustedBy.module.css'

const CLIENTS = [
  { name: 'Avena Cubana Pop', logo: avenaLogo, url: 'https://avenacubanapop.com/', description: 'Una experiencia digital para descubrir Avena Cubana Pop.' },
  { name: 'Barrios Valencia Abogados', logo: barriosValenciaLogo, url: 'https://www.barriosvalencia.com/', description: 'Diseñamos un sitio web profesional para presentar los servicios y facilitar el contacto con la firma.' },
  { name: 'La Tuba Gastrobar', logo: laTubaLogo, url: 'https://latubagastrobar.netlify.app/', description: 'Una experiencia digital para descubrir su carta, sus productos y todo lo que pasa en La Tuba.' },
  { name: 'Mr O. School', logo: mrOLogo, url: 'https://misteroschool.com/', description: 'Un sitio bilingüe para conocer los programas de idiomas y conectar con la escuela.' },
  { name: 'ABP Agencia de Seguros', logo: abpSegurosLogo, url: 'https://abpsegurosltda.com/', description: 'Una presencia digital para presentar la agencia, sus servicios y el acceso de sus clientes.' },
  { name: 'Almacén 501', logo: modaLogo, url: 'https://501m.netlify.app/', description: 'Un catálogo digital de moda urbana para descubrir productos y consultar por WhatsApp.' },
  { name: 'Consejo Comunitario del Río Guajuí', logo: guajuiLogo, url: 'https://guajui.netlify.app/', description: 'Un portal para conocer el territorio y acercar la información y los servicios a su comunidad.' },
  { name: 'La Temporada', logo: temporadaLogo, url: 'https://la-temporada-eta.vercel.app/', description: 'Una tienda en línea para descubrir regalos y productos de temporada.' },
  { name: 'Alixson Valentina', logo: alixsonPhoto, portrait: true, url: 'https://alixsonvalentina.netlify.app/', description: 'Un portafolio profesional para presentar su perfil, sus trabajos y sus colaboraciones.' },
  { name: 'Planes de Etnodesarrollo de Guapi', logo: guapiLogo, url: 'https://planesdeetnodesarrolloguapi.com/', description: 'Un espacio digital para consultar los planes de etnodesarrollo de los consejos comunitarios de Guapi.' },
]

function TrustedBy() {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex(prev => (prev + 1) % CLIENTS.length), 5000)
    return () => clearInterval(interval)
  }, [])
  const client = CLIENTS[currentIndex]

  return (
    <section className={styles.trustedBy} aria-label="Marcas que confían en AKORA 212" aria-roledescription="carrusel">
      <div className="container">
        <Reveal><h2 className={styles.title}>Marcas que ya confían en AKORA 212</h2></Reveal>
        <div className={styles.carousel}>
          <Reveal>
            <div className={styles.slide} key={client.name}>
              <h3 className={styles.clientName}>{client.name}</h3>
              <div className={styles.imageContent}>
                <button type="button" onClick={() => setCurrentIndex(prev => (prev - 1 + CLIENTS.length) % CLIENTS.length)} className={styles.navButton} aria-label="Marca anterior"><ChevronLeft size={22} aria-hidden="true" /></button>
                <a href={sitePath(client.url)} target={client.internal ? undefined : "_blank"} rel="noopener noreferrer" className={styles.logoLink} aria-label={`Conocer ${client.name}`}>
                  <img src={sitePath(client.logo)} alt={client.name} className={`${styles.logo} ${client.portrait ? styles.portrait : ''}`} />
                </a>
                <button type="button" onClick={() => setCurrentIndex(prev => (prev + 1) % CLIENTS.length)} className={styles.navButton} aria-label="Marca siguiente"><ChevronRight size={22} aria-hidden="true" /></button>
              </div>
              <a href={sitePath(client.url)} target={client.internal ? undefined : "_blank"} rel="noopener noreferrer" className={styles.visitLink}>{client.internal ? "Conocer el proyecto" : "Visitar sitio"}</a>
            </div>
          </Reveal>
          <div className={styles.controls}>
            <span className={`${styles.counter} mobile-copy`}>{currentIndex + 1} / {CLIENTS.length}</span>
            <div className={styles.dots}>
              {CLIENTS.map((item, index) => <button type="button" key={item.name} onClick={() => setCurrentIndex(index)} className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`} aria-label={`Mostrar ${item.name}`} aria-pressed={index === currentIndex} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
