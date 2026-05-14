# stefanodelmonte.com

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Deploy](https://img.shields.io/github/actions/workflow/status/stefanodelmonte/stefanodelmonte.portfolio/deploy.yml?label=deploy)](https://github.com/stefanodelmonte/stefanodelmonte.portfolio/actions)

Portfolio personal bilingüe (ES/EN) construido con [Astro](https://astro.build) y desplegado automáticamente en GitHub Pages.

**→ [stefanodelmonte.com](https://stefanodelmonte.com)**

## Características

- **Bilingüe** — cambio de idioma dinámico (ES/EN) sin recarga, con sistema i18n client-side
- **Astro** — sitio estático, sin frameworks CSS ni JS innecesario
- **CV descargable** — PDF disponible en ambos idiomas
- **CI/CD** — deploy automático a GitHub Pages en cada push a `main`
- **Responsive** — adaptado a móvil y escritorio

## Estructura del proyecto

```
├── public/
│   ├── cv/                  # CV en PDF (ES/EN)
│   ├── img/                 # Imágenes
│   ├── CNAME                # Dominio personalizado
│   └── favicon.svg
├── src/
│   ├── layouts/             # Layout base (meta SEO, estructura HTML)
│   ├── pages/               # Página principal
│   └── styles/              # Estilos globales (CSS puro, variables, responsive)
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
