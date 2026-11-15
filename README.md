# AKORA 212 · Digital Lab

Sitio de AKORA 212 construido con React y Vite.

## Desarrollo

```sh
npm ci
npm run dev
```

## GitHub Pages

Sitio: https://klmendez.github.io/akora/

Cada push a `main` ejecuta `.github/workflows/pages.yml`, instala dependencias y publica la web en GitHub Pages. La fuente de Pages debe ser **GitHub Actions**.

```sh
npm run build:pages
```

La compilación usa `/akora/` como base. `scripts/build-pages.mjs` crea entradas HTML para todas las páginas y servicios, permitiendo abrir enlaces directos o recargarlos sin errores 404. El desarrollo local y `npm run build` conservan la base `/`.

Los videos y sus portadas están en `public/social`; se reproducen con controles nativos sin depender de Instagram. Las capturas de proyectos están en `public/projects`.

Las condiciones comerciales específicas se acuerdan en cada propuesta. Los eventos `akora:conversion` están preparados para integración; no hay proveedor de analítica configurado.
