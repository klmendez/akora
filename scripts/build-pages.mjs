import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { SERVICES } from '../src/data/services.js'

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const routes = ['proyectos', 'servicios', 'nosotras', 'proceso', 'planes', 'contacto', ...SERVICES.map(service => `servicios/${service.slug}`)]
for (const route of routes) {
  const directory = new URL(`../dist/${route}/`, import.meta.url)
  await mkdir(directory, { recursive: true })
  await writeFile(new URL('index.html', directory), html)
}
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '')
console.log(`GitHub Pages: ${routes.length + 1} route entries ready.`)
