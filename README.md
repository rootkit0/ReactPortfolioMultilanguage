# xavierberga.com — Astro SSR

Migración completa de React (Vite + react-router-dom + react-bootstrap + i18next) a **Astro SSR**.

## Cambios principales

### Arquitectura
- **React SPA → Astro SSR**: cada ruta se renderiza en el servidor, entregando HTML semántico completo al crawler.
- **0 kB de JavaScript de framework** en el bundle del cliente. Solo scripts ligeros inline para:
  - Efecto typewriter en la home (~40 líneas)
  - Toggle del navbar móvil
  - Formulario de contacto en landings (WhatsApp / Email)
  - Cambio de idioma vía cookie
- **Eliminación de dependencias pesadas**: react, react-dom, react-router-dom, react-bootstrap, bootstrap, react-parallax-tilt, react-tsparticles, react-pdf, react-icons, typewriter-effect, axios, web-vitals, react-github-calendar, react-i18next, i18next.
- **Grid CSS propio** (~60 líneas) sustituye los 200 kB+ de Bootstrap CSS.

### SEO
- **SSR real**: HTML completo con todo el contenido, meta tags y JSON-LD se envía en la primera respuesta. Los crawlers ya no dependen de JavaScript.
- **Meta tags por página**: `<title>`, `<meta description>`, Open Graph y Twitter Cards se generan dinámicamente según ruta e idioma.
- **JSON-LD estructurado por página**: Person, ProfessionalService, WebSite, WebPage, Service y CollectionPage.
- **Hreflang tags** automáticos en cada página (es-ES, ca, en, x-default).
- **Canonical URLs** explícitas en cada ruta.
- **Sitemap XML** con xhtml:link hreflang.
- **Etiquetas semánticas**: `<section>`, `<article>`, `<nav>`, `<footer>`, `<main>`, headings jerárquicos (h1 único por página, h2, h3).
- **Imágenes optimizadas**: atributos `width`, `height`, `loading`, `fetchpriority`, `alt` descriptivos.
- **Página 404** propia con status 404 real.
- **Noscript-friendly**: al ser SSR, el contenido es visible sin JavaScript.

### i18n
- Sistema propio de i18n server-side (sin librería). Resolución por: cookie → query param `?lang=` → Accept-Language → fallback `es`.
- Los 3 idiomas (es, ca, en) siguen soportados con los mismos JSON de traducciones.

### Rendimiento
- **Zero JS framework** en producción.
- CSS inline/minificado automáticamente por Astro.
- Fonts con `preconnect` + `display=swap`.
- GitHub calendar como imagen estática (ghchart.rshah.org) en vez de componente React.
- Resume embebido via `<iframe>` del PDF en vez de react-pdf (evita cargar pdf.js ~500 kB).

## Instalación

```bash
npm install
npm run dev      # desarrollo
npm run build    # build SSR
npm run preview  # previsualización
```

## Estructura

```
src/
├── assets/          # Imágenes, logos, flags, animaciones
├── components/      # Componentes Astro reutilizables
├── i18n/            # Traducciones JSON + utilidad t()
├── layouts/         # BaseLayout.astro (head, nav, footer)
├── pages/           # Rutas (1 archivo = 1 ruta)
│   ├── index.astro
│   ├── aboutme.astro
│   ├── projects.astro
│   ├── resume.astro
│   ├── ia-{ciudad}.astro
│   ├── iot-{ciudad}.astro
│   └── 404.astro
└── styles/          # CSS global
```

## Notas

- Los PDFs del CV deben colocarse en `public/documents/CV_XavierBerga_ES.pdf` y `CV_XavierBerga_EN.pdf`.
- Para deploy en Node.js, usar el adapter `@astrojs/node`. Para Vercel/Netlify/Cloudflare, instalar el adapter correspondiente.
