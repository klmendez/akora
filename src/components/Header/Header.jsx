import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/akora-logo-official.svg'
import styles from './Header.module.css'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/nosotras', label: 'Nosotras' },
  { to: '/proceso', label: 'Proceso' },
  { to: '/planes', label: 'Planes' },
  { to: '/contacto', label: 'Contacto' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo} onClick={handleLinkClick}>
          <img src={logo} alt="AKORA 212 · Digital Lab" className={styles.logoImg} />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
              onClick={handleLinkClick}
            >
              {link.label}
            </NavLink>
          ))}
          <div className={styles.navCta}>
            <Link to="/contacto" className="btn btn-gold" onClick={handleLinkClick}>
              Hablemos de tu proyecto
            </Link>
          </div>
        </nav>

        <div className={styles.actions}>
          <Link to="/contacto" className="btn btn-gold">
            Hablemos de tu proyecto
          </Link>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
