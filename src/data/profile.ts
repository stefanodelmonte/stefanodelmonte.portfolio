import type { Key } from '../i18n';

// Datos que comparten la web y el CV descargable: si algo cambia aquí, cambia en los dos

// Cada proyecto toma sus textos de las claves "<id>.title", "<id>.status", "<id>.problem" y "<id>.solution".
// repo: sin definir oculta la fila de enlaces; vacío muestra "Código disponible bajo petición"
export type ProjectId = 'farm' | 'tpv' | 'library' | 'android';
export const projects: { id: ProjectId; stack: string[]; repo?: string; android?: boolean }[] = [
  // Repositorio privado con datos de la empresa: sin fila de enlaces
  { id: 'farm', stack: ['Python', 'Supabase (PostgreSQL)', 'JavaScript', 'Remotion / React', 'Playwright', 'ffmpeg'] },
  { id: 'tpv', stack: ['JavaScript', 'HTML', 'CSS', 'PWA', 'IndexedDB', 'WebUSB (ESC/POS)'] },
  {
    id: 'library',
    stack: ['Java 21', 'Spring Boot', 'JPA / Hibernate', 'MySQL', 'Thymeleaf', 'Maven'],
    repo: 'https://github.com/stefanodelmonte/biblioteca',
  },
  { id: 'android', stack: ['Kotlin', 'Android', 'API REST'], repo: '', android: true },
];
export const pk = (id: ProjectId, field: 'title' | 'status' | 'problem' | 'solution') => `${id}.${field}` as Key;

export const skills = [
  { key: 'skills.backend', items: ['Java', 'Kotlin', 'Python', 'Spring Boot', 'JPA / Hibernate', 'PostgreSQL', 'MySQL', 'Supabase'] },
  { key: 'skills.frontend', items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Astro', 'Thymeleaf'] },
  { key: 'skills.tools', items: ['Git / GitHub', 'GitHub Actions', 'Maven', 'Google Workspace'] },
] as const;

export const languages = [
  { key: 'lang.es', level: 'lang.native' },
  { key: 'lang.ca', level: 'lang.native' },
  { key: 'lang.en', level: 'B2' },
  { key: 'lang.it', level: 'B2' },
] as const;

// Solo en el CV: la web no tiene sección de experiencia
export const experience: { company: string; es: string[]; en: string[] }[] = [
  {
    company: 'Brico Depôt',
    es: [
      'Organización y gestión eficiente de tareas en un entorno dinámico.',
      'Adaptación a procedimientos de trabajo.',
      'Resolución de incidencias y colaboración en equipo.',
    ],
    en: [
      'Efficient organisation and management of tasks in a fast-paced environment.',
      'Adapting to work procedures.',
      'Problem solving and teamwork.',
    ],
  },
  {
    company: 'Mercadona',
    es: [
      'Atención al cliente y resolución de incidencias.',
      'Organización, precisión y cumplimiento de procedimientos.',
      'Trabajo bajo presión y coordinación con diferentes equipos.',
    ],
    en: [
      'Customer service and problem solving.',
      'Organisation, accuracy and compliance with procedures.',
      'Working under pressure and coordinating with different teams.',
    ],
  },
  {
    company: 'Infinitum',
    es: [
      'Organización, precisión y cumplimiento de procedimientos.',
      'Trabajo bajo presión y coordinación con diferentes equipos.',
    ],
    en: [
      'Organisation, accuracy and compliance with procedures.',
      'Working under pressure and coordinating with different teams.',
    ],
  },
  {
    company: 'Explotaciones Turísticas Costa Dorada',
    es: [
      'Trabajo coordinado en equipos multidisciplinares.',
      'Adaptación a entornos de trabajo exigentes.',
      'Responsabilidad y cumplimiento de tareas.',
    ],
    en: [
      'Coordinated work in multidisciplinary teams.',
      'Adapting to demanding work environments.',
      'Responsibility and task completion.',
    ],
  },
];
