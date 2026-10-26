import type { es } from './es';

// English texts; same keys as es.ts
export const en: Record<keyof typeof es, string> = {
  'meta.title': 'Stefano Delmonte · Software developer',
  'meta.description': 'Portfolio of Stefano Delmonte, software developer. Backend with Java and Spring Boot, Android with Kotlin. Looking for an internship.',
  'meta.imageAlt': 'Portrait of Stefano Delmonte',

  'a11y.skip': 'Skip to content',
  'a11y.home': 'Home',
  'a11y.nav': 'Main navigation',
  'a11y.lang': 'Change language: Spanish or English',

  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.education': 'Education',
  'nav.contact': 'Contact',

  'hero.title': 'Software developer',
  'hero.cv': 'Download CV',

  'about.p1': "I'm training in Multiplatform Application Development, focusing on backend with Java and Spring Boot and on Android development with Kotlin.",
  'about.p2': 'Before programming I worked in retail, customer service and tourism. That varied background gave me responsibility, adaptability and the habit of working in a team under pressure.',
  'about.p3': "I'm looking for an internship where I can apply what I know, learn from a team and keep growing as a developer.",

  'projects.problem': 'Problem',
  'projects.solution': 'Solution',
  'projects.stack': 'Stack',
  'projects.links': 'Links',
  'projects.code': 'Code',
  'projects.onRequest': 'Code available on request',

  'tpv.title': 'POS system for a small business',
  'tpv.status': 'In production',
  'tpv.problem': 'A small business needed to record sales from a tablet, print receipts on the spot and keep a reliable sales history without manual work.',
  'tpv.solution': 'Point-of-sale web app in daily use: tablet checkout, thermal printer integration, returns management and automatic Excel export as a backup.',

  'library.title': 'Personal library · Spring Boot',
  'library.status': 'Final project · DAM1',
  'library.problem': 'Keep an organised record of books read, in progress and pending, with ratings and reviews, without relying on spreadsheets.',
  'library.solution': 'MVC web app to register books and readings with ratings and reviews, organise them by categories and tags, and view reading stats: pages read, average rating and books per category.',

  'android.title': 'Library · Android app (Kotlin)',
  'android.status': 'In development · DAM2',
  'android.problem': 'Browse the catalogue and manage loans from a phone, without needing a computer.',
  'android.solution': 'Native Kotlin app that consumes its own REST API built with Spring Boot and PostgreSQL, keeping business logic centralised on the server.',
  'android.placeholder': 'Screenshots coming soon',
  'android.mediaAlt': 'Screenshot of the library Android app',

  'web.title': 'Personal portfolio',
  'web.status': 'Live',
  'web.problem': 'I needed my own space to present projects and skills, in two languages and fast to load.',
  'web.solution': 'Bilingual static site with no page reloads, an interactive WebGL ink background and automatic deployment on every change.',

  'diagram.app': 'Android app',
  'diagram.db': 'Database',
  'diagram.caption': 'Architecture: the Android app consumes the REST API, which stores data in PostgreSQL.',

  'skills.backend': 'Backend',
  'skills.frontend': 'Frontend',
  'skills.tools': 'Tools',

  'education.degree': 'Higher Vocational Diploma in Multiplatform Application Development (DAM)',
  'education.dates': 'Sept 2025 – present',
  'education.languages': 'Languages',
  'lang.es': 'Spanish',
  'lang.ca': 'Catalan',
  'lang.en': 'English',
  'lang.it': 'Italian',
  'lang.native': 'Native',

  'contact.email': 'Email',
  'contact.send': 'Send email',
  'contact.copy': 'Copy email',
  'contact.copied': 'Copied',
};
