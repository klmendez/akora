import styles from './WhatsAppButton.module.css'
import { WHATSAPP_NUMBER } from '../../config/contact'

const DEFAULT_MESSAGE = 'Hola AKORA 212, quiero contarles sobre mi proyecto.'

function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Escribir por WhatsApp"
    >
      <svg className={styles.icon} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.36 4 14.98c0 2.4.66 4.66 1.9 6.66L3 29l7.56-2.83a12.9 12.9 0 0 0 5.46 1.2h.01c6.62 0 12.02-5.37 12.02-11.99C28.05 8.36 22.65 3 16.02 3zm0 21.87h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-4.49 1.68 1.5-4.36-.26-.44a10 10 0 0 1-1.53-5.33C5.33 9.48 10.05 4.8 16.02 4.8c5.97 0 10.68 4.68 10.68 10.18 0 5.6-4.8 9.9-10.68 9.9zm5.86-7.62c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.73-1.77-1-2.42-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.12-1.14 2.72 0 1.6 1.17 3.15 1.33 3.37.16.22 2.3 3.54 5.58 4.96.78.34 1.39.54 1.86.69.78.25 1.5.21 2.06.13.63-.1 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.6-.37z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
