import type { es } from './es';

// English texts; same keys as es.ts
export const en: Record<keyof typeof es, string> = {
  'meta.title': 'Stefano Delmonte · Software developer',
  'meta.description': 'Portfolio of Stefano Delmonte, software developer based in Tarragona. Backend with Java and Spring Boot, Android with Kotlin. Looking for an internship.',
  'meta.imageAlt': 'Portrait of Stefano Delmonte',

  'a11y.skip': 'Skip to content',
  'a11y.home': 'Home',
  'a11y.nav': 'Main navigation',
  'a11y.lang': 'Change language: Spanish or English',
  'a11y.menu': 'Open menu',

  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.education': 'Education',
  'nav.contact': 'Contact',

  'hero.title': 'Software developer',
  'hero.location': 'Tarragona',
  'hero.intro': 'Second-year Multiplatform App Development student at La Salle Tarragona. Looking for an internship.',
  'hero.cv': 'Download CV (Spanish)',
  'hero.photoAlt': 'Portrait of Stefano Delmonte',

  'about.p1': "I'm training in Multiplatform Application Development, focusing on backend with Java and Spring Boot and on Android development with Kotlin.",
  'about.p2': 'Before programming I worked in retail, customer service and tourism. That varied background gave me responsibility, adaptability and the habit of working in a team under pressure.',
  'about.p3': "I'm looking for an internship where I can apply what I know, learn from a team and keep growing as a developer.",

  'projects.problem': 'Problem',
  'projects.solution': 'Solution',
  'projects.stack': 'Stack',
  'projects.links': 'Links',
  'projects.code': 'Code',
  'projects.private': 'Private code',
  'projects.onRequest': 'Code available on request',
  'projects.shared': 'Shared REST API',

  'tpv.title': 'POS system for a small business',
  'tpv.status': 'In production',
  'tpv.problem': 'A small business needed to record sales from a tablet, print receipts on the spot and keep a reliable sales history without manual work.',
  'tpv.solution': 'Point-of-sale web app in daily use: tablet checkout, thermal printer integration, returns management and automatic Excel export as a backup.',

  'api.title': 'Library · Spring Boot backend',
  'api.status': 'Cross-module project · DAM2',
  'api.problem': "The library's mobile app needed a single data source for books, users and loans.",
  'api.solution': 'REST API built with Spring Boot that manages books, users and loans, persisted in PostgreSQL. It is the backbone the Android app consumes.',

  'android.title': 'Library · Android app (Kotlin)',
  'android.status': 'In development · DAM2',
  'android.problem': 'Browse the catalogue and manage loans from a phone, without needing a computer.',
  'android.solution': 'Native Kotlin app that consumes the same REST API as the backend, keeping business logic centralised on the server.',
  'android.placeholder': 'Screenshots coming soon',
  'android.mediaAlt': 'Screenshot of the library Android app',

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

  'contact.text': "If you're looking for an intern or want to talk about a project, write to me.",
  'contact.send': 'Send email',
  'contact.copy': 'Copy email',
  'contact.copied': 'Copied',
};
