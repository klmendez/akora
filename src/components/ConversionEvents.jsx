import { useEffect } from 'react'
// Integration point: events contain only the action and route, never form text or personal data.
export default function ConversionEvents() {
 useEffect(() => {
  const clicked = event => {
   const link = event.target.closest?.('a[href]')
   if (!link) return
   const url = new URL(link.href, window.location.href)
   const action = url.hostname === 'wa.me' ? 'whatsapp_click' : url.origin === location.origin && url.pathname.replace(/\/$/, '') === `${import.meta.env.BASE_URL}contacto` ? 'contact_click' : null
   if (action) window.dispatchEvent(new CustomEvent('akora:conversion', { detail: { event: action, path: window.location.pathname } }))
  }
  document.addEventListener('click', clicked)
  return () => document.removeEventListener('click', clicked)
 }, [])
 return null
}
