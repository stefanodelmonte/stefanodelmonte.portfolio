// Textos en castellano (idioma por defecto)
export const es = {
  'meta.title': 'Stefano Delmonte · Desarrollador de software',
  'meta.description': 'Portfolio de Stefano Delmonte, desarrollador de software en Tarragona. Backend con Java y Spring Boot, Android con Kotlin. En busca de prácticas.',
  'meta.imageAlt': 'Retrato de Stefano Delmonte',

  'a11y.skip': 'Saltar al contenido',
  'a11y.home': 'Inicio',
  'a11y.nav': 'Navegación principal',
  'a11y.lang': 'Cambiar idioma: castellano o inglés',

  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.skills': 'Habilidades',
  'nav.education': 'Formación',
  'nav.contact': 'Contacto',

  'hero.title': 'Desarrollador de software',
  'hero.location': 'Tarragona',
  'hero.intro': 'Segundo curso de DAM en La Salle Tarragona. En busca de prácticas.',
  'hero.cv': 'Descargar CV',

  'about.p1': 'Me estoy formando en Desarrollo de Aplicaciones Multiplataforma, con foco en backend con Java y Spring Boot y en desarrollo Android con Kotlin.',
  'about.p2': 'Antes de programar trabajé en comercio, atención al cliente y turismo. De esa trayectoria diversa me llevo responsabilidad, capacidad de adaptación y la costumbre de trabajar en equipo bajo presión.',
  'about.p3': 'Busco unas prácticas donde aplicar lo que sé, aprender de un equipo y seguir creciendo como desarrollador.',

  'projects.problem': 'Problema',
  'projects.solution': 'Solución',
  'projects.stack': 'Stack',
  'projects.links': 'Enlaces',
  'projects.code': 'Código',
  'projects.private': 'Código privado',
  'projects.onRequest': 'Código disponible bajo petición',
  'projects.shared': 'Comparten API REST',

  'tpv.title': 'Sistema TPV para pyme',
  'tpv.status': 'En producción',
  'tpv.problem': 'Una pyme necesitaba registrar ventas desde una tablet, emitir tickets al momento y conservar un histórico fiable sin trabajo manual.',
  'tpv.solution': 'Aplicación web de punto de venta en uso diario: venta desde tablet, integración con impresora térmica, gestión de devoluciones y exportación automática a Excel como copia de seguridad.',

  'api.title': 'Biblioteca · Backend Spring Boot',
  'api.status': 'Proyecto intermodular · DAM2',
  'api.problem': 'La aplicación móvil de la biblioteca necesitaba una fuente de datos única para libros, usuarios y préstamos.',
  'api.solution': 'API REST con Spring Boot que gestiona libros, usuarios y préstamos, con persistencia en PostgreSQL. Es la base que consume la app Android.',

  'android.title': 'Biblioteca · App Android (Kotlin)',
  'android.status': 'En desarrollo · DAM2',
  'android.problem': 'Consultar el catálogo y gestionar préstamos desde el móvil, sin depender de un ordenador.',
  'android.solution': 'Aplicación nativa en Kotlin que consume la misma API REST del backend, con la lógica de negocio centralizada en el servidor.',
  'android.placeholder': 'Capturas próximamente',
  'android.mediaAlt': 'Captura de la app Android de la biblioteca',

  'diagram.app': 'App Android',
  'diagram.db': 'Base de datos',
  'diagram.caption': 'Arquitectura: la app Android consume la API REST, que guarda los datos en PostgreSQL.',

  'skills.backend': 'Backend',
  'skills.frontend': 'Frontend',
  'skills.tools': 'Herramientas',

  'education.degree': 'CFGS Desarrollo de Aplicaciones Multiplataforma',
  'education.dates': 'sept. 2025 – actualidad',
  'education.languages': 'Idiomas',
  'lang.es': 'Castellano',
  'lang.ca': 'Catalán',
  'lang.en': 'Inglés',
  'lang.it': 'Italiano',
  'lang.native': 'Nativo',

  'contact.email': 'Correo',
  'contact.send': 'Enviar correo',
  'contact.copy': 'Copiar correo',
  'contact.copied': 'Copiado',
} as const;
