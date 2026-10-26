# stefanodelmonte.com

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Deploy](https://img.shields.io/github/actions/workflow/status/stefanodelmonte/stefanodelmonte.portfolio/deploy.yml?label=deploy)](https://github.com/stefanodelmonte/stefanodelmonte.portfolio/actions)

Portfolio personal bilingüe (ES/EN) construido con [Astro](https://astro.build) y desplegado automáticamente en GitHub Pages.

**→ [stefanodelmonte.com](https://stefanodelmonte.com)**

## Características

- **Bilingüe** — `/` (ES) y `/en/` (EN) generadas en estático con sus metaetiquetas y Open Graph; el botón "ES / EN" cambia sin recarga y recuerda la elección
- **Astro** — sitio estático, CSS puro, sin dependencias de UI
- **Montañas a tinta** — capas de montañas a la aguada en WebGL sin librerías, con niebla y paralaje al hacer scroll; hilo de scroll y entradas suaves; respeta `prefers-reduced-motion`
- **CI/CD** — deploy automático a GitHub Pages en cada push a `main`
- **Mobile-first** — accesible por teclado y con contraste AA

## Estructura del proyecto

```
├── public/
│   ├── cv/                  # CV en PDF
│   ├── img/                 # Imágenes (img/android: capturas o WebM del mockup)
│   ├── CNAME                # Dominio personalizado
│   └── favicon.svg
├── src/
│   ├── components/          # Site, Sansui (fondo), ScrollThread y EcosystemDiagram
│   ├── i18n/                # Textos ES/EN y datos del sitio
│   ├── layouts/             # Layout base (meta SEO, Open Graph, fuentes)
│   ├── pages/               # / y /en/
│   ├── scripts/             # Cambio de idioma en cliente
│   └── styles/              # Estilos globales
├── .github/workflows/       # GitHub Actions — build y deploy
├── astro.config.mjs
└── package.json
```

## Desarrollo local

Requisitos: Node.js 18+ y npm.

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (localhost:4321)
npm run build        # Build de producción
npm run preview      # Preview del build
```

## Despliegue

Cada push a `main` ejecuta el workflow de GitHub Actions que construye el sitio con Astro y lo publica en GitHub Pages bajo el dominio personalizado `stefanodelmonte.com`.

## Autor

**Stefano Delmonte** — Estudiante de DAM · La Salle Tarragona

[Web](https://stefanodelmonte.com) · [LinkedIn](https://www.linkedin.com/in/delmontestefano/) · [GitHub](https://github.com/stefanodelmonte)
