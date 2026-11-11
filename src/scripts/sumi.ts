// Shader de las montañas a tinta: lo usan el fondo de la web (Sansui) y la cabecera del CV

export const VERT = `
  attribute vec2 a_pos;
  void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

export const FRAG = `
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif
  uniform vec2 u_res;
  uniform float u_aspect;
  uniform float u_time;
  uniform float u_scroll;
  uniform float u_fade;
  uniform float u_veil;
  uniform float u_paint;
  uniform float u_mx;
  uniform float u_scale;
  uniform vec3 u_ink;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  // Perfil de cresta con picos: ruido «ridged» en varias octavas
  float peaks(float x, float seed) {
    float v = 0.0, a = 0.55, f = 1.0;
    for (int i = 0; i < 5; i++) {
      float n = 1.0 - abs(noise(vec2(x * f + seed, seed * 1.7)) * 2.0 - 1.0);
      v += a * n * n;
      f *= 2.1;
      a *= 0.5;
    }
    return v;
  }

  // Posición dentro de la esquina de las montañas (0 a 1); en ultrapanorámicos mide como mucho 1,6 veces el alto
  float cornerX(float x) {
    float reach = min(u_aspect, 1.6);
    return clamp((x - (u_aspect - reach)) / reach, 0.0, 1.0);
  }
  float cornerMask(float cx) {
    // En vertical la pendiente es más suave para no formar paredes
    return smoothstep(u_aspect < 0.8 ? -0.3 : 0.3, 0.95, cx);
  }

  // Altura de la cresta de una capa; se hunde hacia la izquierda conservando el perfil
  float ridgeAt(float x, float fi) {
    float depth = (fi + 1.0) / 3.0;
    float xs = x * (2.4 - fi * 0.5) + u_mx * 0.05 * depth + fi * 3.1;
    float top = (0.46 - fi * 0.12) + (peaks(xs, fi * 13.7) - 0.35) * (0.34 - fi * 0.08);
    top += (noise(vec2(x * 12.0, fi)) - 0.5) * 0.004; // detalle fino de la cresta
    float sink = u_aspect < 0.8 ? 0.28 : 0.55;
    return (top - (1.0 - cornerMask(cornerX(x))) * sink) * u_scale + u_scroll * (0.05 + 0.15 * depth);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res;
    float x = uv.x * u_aspect;
    float t = u_time;
    vec4 acc = vec4(0.0);

    // Composición a una esquina: las cordilleras nacen abajo a la derecha y dejan vacío el resto
    float cx = cornerX(x);
    float edgeFade = smoothstep(0.0, 0.4, cornerMask(cx));

    // De la capa más lejana a la más cercana
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      float ridge = ridgeAt(x, fi);

      // Pintado al cargar: el pincel recorre cada cresta de izquierda a derecha y la aguada baja detrás
      float lp = clamp((u_paint - fi * 0.18) / 0.45, 0.0, 1.0);
      float head = mix(0.2, 1.08, lp);
      float drawn = 1.0 - smoothstep(head - 0.02, head, cx);
      float wp = clamp((u_paint - fi * 0.18 - 0.15) / 0.45, 0.0, 1.0);

      float below = ridge - uv.y;
      if (below > 0.0) {
        // Carga del pincel: cada trazo empieza cargado y se va secando
        float load = 1.0 - fract(cx * 1.7 + fi * 0.37) * 0.75;
        float w = (0.004 + 0.016 * noise(vec2(x * 2.5, fi * 5.0))) * (0.7 + fi * 0.35) * (0.55 + 0.6 * load);
        float stroke = 1.0 - smoothstep(w * 0.4, w, below);
        // Pincel seco: las vetas se abren donde queda menos tinta
        float streak = noise(vec2(x * 40.0 + fi * 11.0, below / w * 3.0));
        float dry = 1.0 - load;
        float kasure = smoothstep(0.1 + dry * 0.55, 0.3 + dry * 0.5, streak);
        float breaks = smoothstep(0.15, 0.35, noise(vec2(x * 2.2, fi * 7.3)));
        stroke *= kasure * breaks * (0.55 + 0.45 * load) * drawn;

        // Aguada clara que se funde en el papel
        float wash = exp(-below * (4.0 + fi * 3.0)) * (0.78 + 0.22 * noise(vec2(x * 25.0, uv.y * 25.0)));
        float lim = wp * 0.7;
        wash *= (1.0 - smoothstep(lim, lim + 0.08, below)) * smoothstep(0.0, 0.3, wp);
        wash *= 1.0 - smoothstep(head - 0.12, head - 0.02, cx);

        float a = max(stroke * (0.3 + fi * 0.25), wash * (0.14 + fi * 0.07)) * edgeFade;
        acc = vec4(u_ink * a, a) + acc * (1.0 - a);
      }
    }

    // Al bajar, la niebla sube desde abajo y se traga las montañas
    float wav = (noise(vec2(x * 1.2 + t * 0.03, 3.0)) - 0.5) * 0.12;
    float m = u_veil * 1.4 - 0.1;
    acc *= smoothstep(m - 0.25, m, uv.y + wav);

    gl_FragColor = acc * u_fade;
  }
`;
