# Notas del proyecto

Actualizado el 2026-11-06. Archivo de trabajo, no forma parte de la web.
Contiene tareas de otros proyectos: no subirlo a un repositorio público.

## 1. Estado del portfolio (stefanodelmonte.com)

Astro 5 estático, desplegado con GitHub Actions en GitHub Pages. Bilingüe: `/` (ES) y `/en/` (EN), con cambio sin recarga y preferencia guardada.

**Diseño (minimalismo japonés, solo modo claro)**
- Paleta: papel `#F4F1EA`, tinta `#1E1E1E`, gris `#616161`, línea `#D6CDBF`, bermellón `#A8402F` (logo, sello y números de sección).
- Tipografía: Shippori Mincho (títulos) y Zen Kaku Gothic New (cuerpo). Se decidió mantenerlas por ahora.
- Logo: "SD" en bermellón, solo letras. Sello rojo junto al nombre, en diagonal tras la última «e».
- Fondo: montañas a tinta (sumi-e) en WebGL, en una esquina, que se pintan al cargar, con paralaje y niebla que las cubre al bajar. Descartados: pétalos de sakura, komorebi, suminagashi, tinta con cursor.
- Escala fluida de 16 a 22 px y contenedor más ancho desde 2200 px (probado a 3440×1440).
- Respeta `prefers-reduced-motion`, pausa al cambiar de pestaña, canvas con resolución adaptativa.
- Indicador de scroll: la etiqueta vertical de la sección actual pasa de gris a tinta (sustituye a la barra con relleno).

**Contenido**
- Hero: nombre, titular y botones de CV, LinkedIn y GitHub.
- Proyectos en índice desplegable: TPV para pyme (anónimo, sin enlaces), Biblioteca personal DAM1 (enlaza al repo), App Android (en desarrollo, mockup de teléfono) y Portfolio personal.
- Habilidades, formación, idiomas y contacto (correo con iconos de enviar y copiar).
- Open Graph por idioma con imagen 1200×630 (`og-es.png`, `og-en.png`).
- CV en castellano e inglés rediseñados (A4, una página), enlazados desde el botón de cada idioma.

**Material de marca** (`brand/`): sello SVG y PNG, logotipo, avatares 800×800 y vista previa de GitHub.

**Otros hechos**
- Historial de git reescrito para quitar la línea `Co-Authored-By: Claude`; comprobado en `main`, `redesign/ma`, ramas de Dependabot y PR.
- Regla guardada: no añadir esa línea en commits de este proyecto.
- Auditoría estética hecha. Solo se ha aplicado el cambio del indicador de scroll.

## 2. Pendiente en el portfolio

- [ ] Decidir qué puntos de la auditoría aplicar:
  - quitar líneas separadoras en habilidades, idiomas, contacto, datos de proyecto, cabecera y pie;
  - etiquetas en minúsculas y sin espaciado;
  - quitar la doble numeración (01–04 dentro del proyecto 02).
- [ ] Habilidades con otra presentación (matriz de evidencias o mapa de nodos).
- [ ] Repositorios: falta el de la app Android, y el backend con API REST y PostgreSQL que cita la tarjeta (el repo `biblioteca` público es el de DAM1, con Thymeleaf y MySQL).
- [ ] Repositorio privado: GitHub Pages no publica desde privado con cuenta gratuita. Decidir entre GitHub Pro, otro hosting (Cloudflare Pages, Netlify, Vercel) o dejarlo público. El proyecto "Portfolio personal" enlaza a su repo y daría 404.
- [ ] Comprobar que el nombre del cliente del TPV no aparece en el historial ni en los PDF antiguos (el CV nuevo ya no lo menciona).
- [ ] El teléfono sigue visible en los PDF públicos; confirmar que es intencionado.
- [ ] GitHub puede tardar hasta un día en actualizar la lista de colaboradores; si sigue apareciendo Claude, pedir a GitHub Support que recalcule.
- [ ] Mensaje de LinkedIn: texto sin mencionar prácticas ni el contenido de la web; falta decidir la versión final.
- [ ] Capturas o vídeo WebM para el mockup de Android (`public/img/android/`).
- [ ] Opcional: tipografía con más carácter japonés (Zen Old Mincho para títulos, Yuji Syuku para los números).
- [ ] Opcional: portada de LinkedIn de 1584×396 con las montañas y el sello.

## 3. Tareas nuevas: blog en homiup y mediterraneanway

**Objetivo.** Añadir una sección de blog en ambas webs con entradas que conecten con las emociones del público objetivo.

**Motivo.** Entran bastantes leads desde ChatGPT; una web con contenido propio y bien estructurado ofrece más material que citar y más páginas por las que entrar.

**Hacer**
- [ ] Crear la sección Blog en homiup (listado y plantilla de entrada).
- [ ] Crear la sección Blog en mediterraneanway (listado y plantilla de entrada).
- [ ] Definir para cada web: público objetivo, qué siente antes de contactar (dudas, miedos, deseos) y qué le hace decidirse.
- [ ] Escribir las primeras entradas de cada web con ese enfoque emocional.
- [ ] Revisar en cada entrada: título claro, respuestas directas a preguntas reales, bloque de preguntas frecuentes, datos concretos y una llamada a la acción.
- [ ] Medir de dónde llegan los leads (origen ChatGPT frente a otros) antes y después de publicar.

**Estructura sugerida de entrada** (a validar)
1. Escena o pregunta que el lector se haga de verdad.
2. Qué se siente y por qué es normal.
3. Respuesta concreta y práctica.
4. Ejemplo o caso real.
5. Siguiente paso y forma de contacto.

**Datos que faltan para empezar**
- Público objetivo de cada web y su idioma.
- Tecnología de cada web y si ya tiene blog o si hay que construirlo.
- Dónde está el código de cada una (no están en `proyectos/`).
- Tono y frecuencia de publicación.
- Temas que ya preguntan los leads de ChatGPT.

Nota: que el contenido emocional ayude a que ChatGPT cite las webs es una hipótesis. Conviene comprobarlo con los datos de origen de los leads.
