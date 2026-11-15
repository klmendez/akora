import { useEffect, useState } from 'react'

export default function MobileDetails({ summary = 'Ver más', children, className = '' }) {
  const [open, setOpen] = useState(() => !window.matchMedia('(max-width: 900px)').matches)
  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)')
    const update = () => setOpen(!media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return <details className={`mobile-details ${className}`} open={open} onToggle={event => setOpen(event.currentTarget.open)}>
    <summary>{summary}</summary><div>{children}</div>
  </details>
}
