import { chromium } from 'playwright-core'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

// Read-only capture of public pages. No forms, authentication or mutations.
const sites = [
  { id: 'alixson-valentina', url: 'https://alixsonvalentina.netlify.app/', detail: /portafolio|trabajos/i },
  { id: 'barrios-valencia', url: 'https://www.barriosvalencia.com/', detail: /servicios/i },
  { id: 'etnodesarrollo-guapi', url: 'https://planesdeetnodesarrolloguapi.com/', detail: /consejos|planes|territorio/i },
  { id: 'abp-seguros', url: 'https://abpsegurosltda.com/', detail: /seguros|servicios/i },
  { id: 'la-temporada', url: 'https://la-temporada-eta.vercel.app/', detail: /catálogo|catalogo|productos/i },
  { id: 'la-tuba', url: 'https://latubagastrobar.netlify.app/', detail: /nuestra carta/i },
  { id: 'mr-o', url: 'https://misteroschool.com/', detail: /programas/i },
  { id: '501', url: 'https://501m.netlify.app/', detail: /catálogo|catalogo/i },
  { id: 'rio-guajui', url: 'https://guajui.netlify.app/', detail: /el consejo/i },
  { id: 'abp-gestion', url: 'https://abpsegurosltda.com/#/login-clientes', login: true },
]
const browser = await chromium.launch({ channel: 'msedge', headless: true })
const requested = process.argv.slice(2)
const manifest = requested.length ? JSON.parse(await readFile('src/data/projectCaptures.json', 'utf8')) : {}

async function settle(page) {
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(1000)
  await page.evaluate(async () => {
    const images = [...document.images].filter(image => {
      const rect = image.getBoundingClientRect()
      return rect.bottom > 0 && rect.top < innerHeight
    })
    await Promise.race([
      Promise.allSettled(images.map(image => image.decode())),
      new Promise(resolve => setTimeout(resolve, 3500)),
    ])
  })
}

async function capture(site) {
  const captures = []
  const folder = `public/projects/${site.id}`
  await mkdir(folder, { recursive: true })
  for (const device of ['desktop', 'mobile']) {
    const viewport = device === 'desktop' ? { width: 1440, height: 960 } : { width: 390, height: 844 }
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: device === 'mobile', hasTouch: device === 'mobile', reducedMotion: 'reduce' })
    const page = await context.newPage()
    try {
      const response = await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 35000 })
      if (response && response.status() >= 400) throw new Error(`HTTP ${response.status()}`)
      await settle(page)
      async function save(name, label) {
        const file = `${device}-${name}.jpg`
        await page.screenshot({ path: `${folder}/${file}`, type: 'jpeg', quality: 83 })
        captures.push({ src: `/projects/${site.id}/${file}`, device, label, width: viewport.width, height: viewport.height })
      }
      await save('inicio', site.login ? 'Acceso de clientes' : 'Inicio')
      if (!site.login) {
        const links = await page.locator('a[href]').evaluateAll(elements => elements.map(element => ({ href: element.href, text: element.textContent.trim() })))
        const detail = links.find(link => {
          try { return new URL(link.href).origin === new URL(site.url).origin && link.href !== site.url && site.detail.test(link.text) && link.text.length < 65 } catch { return false }
        })
        let label = 'Más del sitio'
        if (detail) {
          const detailResponse = await page.goto(detail.href, { waitUntil: 'domcontentloaded', timeout: 30000 })
          label = detail.text.replace(/\s+/g, ' ').replace(/[→↗]/g, '').trim()
          await settle(page)
          if ((detailResponse && detailResponse.status() >= 400) || await page.getByRole('heading', { name: '404', exact: true }).count()) {
            await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 30000 })
            await settle(page)
            await page.evaluate(() => window.scrollTo(0, Math.min(innerHeight * 1.05, document.documentElement.scrollHeight - innerHeight)))
            await settle(page)
            label = 'Más del sitio'
          }
        } else {
          await page.evaluate(() => window.scrollTo(0, Math.min(innerHeight * 1.05, document.documentElement.scrollHeight - innerHeight)))
          await settle(page)
        }
        const isDifferent = await page.evaluate(() => scrollY > 80) || page.url() !== site.url
        if (isDifferent) await save('detalle', label)
      }
      console.log(`${site.id} ${device}: ${captures.filter(capture => capture.device === device).length} capturas`)
    } catch (error) {
      console.log(`${site.id} ${device}: ${error.message}`)
    } finally {
      await context.close()
    }
  }
  manifest[site.id] = captures
}

try {
  const queue = sites.filter(site => !requested.length || requested.includes(site.id))
  await Promise.all(Array.from({ length: 3 }, async () => {
    while (queue.length) await capture(queue.shift())
  }))
  await writeFile('src/data/projectCaptures.json', JSON.stringify(manifest, null, 2) + '\n')
  console.log(`Total: ${Object.values(manifest).flat().length} capturas reales`)
} finally {
  await browser.close()
}
