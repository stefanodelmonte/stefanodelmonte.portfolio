# stefanodelmonte.com

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Deploy](https://img.shields.io/github/actions/workflow/status/stefanodelmonte/stefanodelmonte.portfolio/deploy.yml?label=deploy)](https://github.com/stefanodelmonte/stefanodelmonte.portfolio/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Portfolio personal bilingüe (ES/EN) construido con [Astro](https://astro.build) y desplegado automáticamente en GitHub Pages con dominio personalizado.

 **Web en vivo:** [stefanodelmonte.com](https://stefanodelmonte.com)

##  Características

-  **Bilingüe** (Español / English) con sistema i18n propio
-  **Astro** — sitio estático ultraligero, sin JS innecesario
-  **CV descargable** en PDF
-  **CI/CD** con GitHub Actions → despliegue automático a GitHub Pages
-  **CSS puro** — sin frameworks pesados

## Estructura

```
/
├── public/
│   ├── cv/               # CV en PDF
│   ├── img/              # Imágenes estáticas
│   ├── CNAME             # Dominio personalizado
│   └── favicon.svg
├── src/
│   ├── i18n/             # Traducciones ES/EN
│   ├── layouts/          # Layouts compartidos
│   ├── pages/            # Rutas del sitio
│   └── styles/           # Estilos globales
├── .github/workflows/    # Deploy automático a GitHub Pages
└── astro.config.mjs
```

##  Desarrollo local

**Requisitos:** Node.js 18+ y npm.

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (http://localhost:4321)
npm run build        # Build de producción
npm run preview      # Preview del build
```

##  Despliegue

Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`, que construye el sitio y lo publica en GitHub Pages bajo el dominio `stefanodelmonte.com` (configurado vía `CNAME`).

##  Autor

**Stefano Delmonte** — Estudiante de DAM, La Salle Tarragona
 [stefanodelmonte.com](https://stefanodelmonte.com) ·  [LinkedIn](https://www.linkedin.com/in/delmontestefano/) ·  [GitHub](https://github.com/stefanodelmonte)

##  Licencia

MIT — ver [`LICENSE`](./LICENSE).
