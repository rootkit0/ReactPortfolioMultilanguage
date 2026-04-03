# xavierberga.com - Astro site

Sitio corporativo y portafolio personal orientado a captacion para servicios de IA e IoT.

## Cambios principales

- Rutas reales por idioma: `es`, `ca`, `en`
- Canonicals y `hreflang` coherentes por URL
- Hubs de servicio para `inteligencia-artificial` e `iot`
- Landings locales enriquecidas por ciudad
- Home, about, projects y resume reestructurados
- Metadatos, Open Graph, sitemap y 404 revisados
- Resume en HTML para no depender de PDFs externos

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
|-- assets/
|-- components/
|-- data/
|-- i18n/
|-- layouts/
|-- pages/
|   |-- index.astro
|   |-- aboutme.astro
|   |-- projects.astro
|   |-- resume.astro
|   |-- inteligencia-artificial.astro
|   |-- iot.astro
|   |-- ia-*.astro
|   |-- iot-*.astro
|   |-- en/
|   `-- ca/
|-- styles/
`-- views/
```

## Notas

- `public/og-image.svg` y `public/favicon.svg` son los assets base de sharing e icono.
- `public/sitemap.xml` esta mantenido manualmente y debe actualizarse si se anaden rutas nuevas.
