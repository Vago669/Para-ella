/* ================================================================
   MOTOR DE LA PÁGINA
   - Aquí está la lógica y las animaciones.
   - Para editar textos, GIFs y recuerdos, usa la ZONA DE EDICIÓN
     que está al principio de este archivo.
   ================================================================ */

"use strict";

/* ═══════════════════════════════════════════════════════════════════════
   ★★★★★  ZONA DE EDICIÓN — AQUÍ PONES TUS TEXTOS, GIFS Y FIRMA  ★★★★★
   Todo lo que necesitas cambiar está en este bloque (hasta la línea que
   dice "FIN DE LA ZONA DE EDICIÓN"). Respeta las comillas "" y las comas.
   Para un salto de línea dentro de un texto escribe \n
   ═══════════════════════════════════════════════════════════════════════ */

/* ★ EDITA AQUÍ TU FIRMA ★  (aparece en la esquina inferior derecha de TODAS las tarjetas) */
const FIRMA = "— Vago";

/* Volumen de la música (de 0 a 1) */
const VOLUMEN = 0.7;

/* Mientras no pongas un GIF propio, se ve uno de estos emojis tiernos que bota. */
const EMOJIS_GIF = ["🧸", "🐱", "🐻", "🐰", "🐥", "🐼"];

/* ─────────────────────────────────────────────────────────────────────
   ★ EDITA AQUÍ TUS POEMAS DE LAS FLORES ★
   Hay 4 tipos de flor: girasol, tulipan, rosa e iris.
   Cada flor de ese tipo toma un poema de su lista, en orden, y cuando se
   acaban vuelve a empezar. Puedes agregar tantos como quieras (copia una
   línea { poema: "...", gif: "" }, — no olvides la coma al final).
   · poema → el verso o mensaje corto (usa \n para saltar de línea).
   · gif   → ★ EDITA AQUÍ TU GIF ★  ruta o enlace a tu GIF/imagen sin fondo
             (ej: "assets/gifs/osito.gif" o "https://.../gatito.gif").
             Déjalo vacío "" para que salga el emoji tierno.
   · firma → opcional: si quieres una firma distinta en un poema, agrega
             firma: "— Tu firma"  (si no, usa la FIRMA de arriba).
   ───────────────────────────────────────────────────────────────────── */
const POEMAS = {
  girasol: [
    { poema: "Si alguna tormenta osara alcanzarte,\nno dudo que sabras atravesarla\nhay personas que nacieron\ncon mas temple que miedo.", gif: "assets/gifs/1.gif" },
    { poema: "Vive tu juventud;\nríe, descubre, equivócate…\npero no permitas que la imprudencia\nte cobre aquello que la vida aún quiere darte..", gif: "assets/gifs/9.gif" },
    { poema: "A quien algún día te encuentre\nle deseo algo sencillo:\nque sienta por ti\nal menos la mitad de aquello\nque yo jamás supe nombrar\nY que aun así\nle parezca poco.", gif: "assets/gifs/7.gif" },
  ],
  tulipan: [
    { poema: "Si algún día la felicidad\nte encuentra de la mano de otro,\nespero que tengas la decencia\nde no soltarla por mirar atrás.", gif: "assets/gifs/4.gif" },
    { poema: "Espero que nunca pierdas\nesa curiosidad que te empuja hacia lo desconocido.\nHay futuros que sólo existen\nporque alguien tuvo el valor\nde querer descubrirlos.", gif: "assets/gifs/5.gif" },
    { poema: "Si alguna vez la vida se vuelve tormenta,\nno dudes de tu propia fuerza.\nY si por un instante lo haces,\nrecuerda que, desde algún lugar lejano,\nalguien aún apuesta por ti.", gif: "assets/gifs/12.gif" },
  ],
  rosa: [
    { poema: "He buscado durante mucho tiempo\nuna palabra para aquello que siento.\nTodas me han parecido insuficientes.\nQuizá algunas cosas\npierden grandeza cuando se les pone nombre.", gif: "assets/gifs/7.gif" },
    { poema: "Me basta con desear\nque la vida sea generosa contigo,\nque tus días encuentren motivos para sonreír,\ny que nunca olvides cuánto valor\nhay en la persona que eres.", gif: "assets/gifs/11.gif" },
    { poema: "Nunca quisiera que mis sentimientos\nfueran una deuda para ti.\nLo que siento\nno te obliga a corresponderlo.\nAlgunas cosas son más honestas\ncuando se ofrecen\nsin esperar que regresen.", gif: "assets/gifs/8.gif" },
  ],
  iris: [
    { poema: "Nunca confundí quererte\ncon tener derecho sobre ti.\nHay una diferencia\nentre desear la compañía de alguien\ny creer que nos pertenece.", gif: "assets/gifs/10.gif" },
    { poema: "Siempre he sabido estar solo.\nLo extraño es que, al imaginarte cerca,\nla soledad dejó de parecerme\ntan completa.", gif: "assets/gifs/2.gif" },
    { poema: "No sé qué fui para ti.\nQuizá poco.\nQuizá nada.\nPero tú fuiste\nuna de esas pequeñas excepciones\nque el tiempo no consigue borrar.", gif: "assets/gifs/9.gif" },
  ],
};

/* ─────────────────────────────────────────────────────────────────────
   ★ EDITA AQUÍ TUS ESTRELLAS (recuerdos, fechas, dedicatorias) ★
   Cada línea { ... } es una estrella. Se unen con una línea de luz en el
   orden en que aparecen. Puedes quitar o agregar (recomendado: 5 a 10).
   · fecha  → la fecha o etiqueta (ej: "14 de febrero de 2024").
   · titulo → título corto del recuerdo.
   · texto  → tu recuerdo o dedicatoria (\n = salto de línea).
   · gif    → ★ EDITA AQUÍ TU GIF ★ (ruta o enlace; "" = emoji tierno).
   · x, y   → posición de la estrella en el cielo, en % (0 a 100).
   · tam    → tamaño (1 = normal, 1.2 = más grande, 0.85 = más pequeña).
   · firma  → opcional, para una firma distinta en esa estrella.
   ───────────────────────────────────────────────────────────────────── */
const ESTRELLAS = [
  { x: 18, y: 8,  tam: 1.05,texto: "No necesitas un héroe.\nQuizá necesites a alguien\nque, si el mundo entero se vuelve contra ti,\ntenga el valor suficiente\npara convertirse en villano a tu lado.\nY si alguna vez fuese necesario,\nque no tema ensuciarse las manos\npor proteger aquello que ama.", gif: "assets/gifs/1.gif" },
  { x: 50, y: 4,  tam: 0.85,texto: "Que quien te quiera\nno se conforme con decirlo.\nQue aprenda.\n\nQue mejore.\nQue se esfuerce.\nPorque algunas personas\nmerecen más que promesas bonitas.", gif: "assets/gifs/6.gif" },
  { x: 80, y: 14, tam: 1.15,texto: "Es sencillo venerar a una mujer\ncuando el mundo la encuentra hermosa.\nLa verdadera devoción comienza\ncuando uno conoce sus ruinas\ny decide sentarse entre ellas\nsin pedirle que esconda los escombros.", gif: "assets/gifs/7.gif" },
  { x: 70, y: 32, tam: 0.9,texto: "Espero que nunca pierdas\nesa curiosidad que te empuja hacia lo desconocido.\nHay futuros que sólo existen\nporque alguien tuvo el valor\nde querer descubrirlos.", gif: "assets/gifs/12.gif" },
  { x: 34, y: 40, tam: 1.2,texto: "No son grandes palabras.\nSólo pequeñas cosas\nque alguna vez pensé de ti\ny que, por una vez,\ndecidí no dejar en silencio.", gif: "assets/gifs/9.gif" },
  { x: 14, y: 58, tam: 0.9,texto: "Y cuando alcances aquello\npor lo que tanto has trabajado,\nno olvides mirar atrás.\nNo para lamentar el camino,\nsino para reconocer\na la muchacha que lo comenzó.", gif: "assets/gifs/5.gif" },
  { x: 46, y: 70, tam: 1.0,texto: "Si alguna vez dudas de ti,\nrecuerda que haber llegado hasta aquí\nya significa que sobreviviste\na versiones de ti que creías incapaces.", gif: "assets/gifs/4.gif" },
  { x: 78, y: 84, tam: 1.25,texto: "No sé quién eres por completo.\nY quizá por eso\nnunca he querido inventarte.\nPrefiero descubrir, algún día,\nqué te hace reír,\nqué te enfada,\nqué sueños escondes\ny qué pequeñas cosas\nhacen hermoso tu mundo.\nNo quiero amar una idea de ti.\nMe habría gustado conocer\na la mujer que realmente eres.", gif: "assets/gifs/3.gif" },
];
/* ═══════════════════ FIN DE LA ZONA DE EDICIÓN ═══════════════════
   (Más abajo está el motor de la página. No hace falta tocarlo.)      */


/* ───────────────────────── utilidades ───────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const sleep = ms => new Promise(r => setTimeout(r, ms));
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const hex2rgb = h => { h = h.trim().replace('#',''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); const n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const rgba = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
function rampa(stops, t){ t = clamp(t, 0, .9999) * (stops.length - 1); const i = Math.floor(t); return mixc(stops[i], stops[i + 1], t - i); }
const root = document.documentElement;
/* Perfil de rendimiento adaptativo: conserva la composición y ajusta solo la carga interna. */
const PERF = (() => {
  const mobile = matchMedia('(max-width:700px)').matches;
  const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const saveData = !!navigator.connection && navigator.connection.saveData === true;
  const cores = Number(navigator.hardwareConcurrency || 4);
  const lowPower = cores <= 4 || saveData;
  return {
    mobile, reduced,
    fxFps: reduced ? 15 : (mobile || lowPower ? 30 : 60),
    fxDpr: mobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5),
    paintQuality: mobile ? .78 : 1,
    maxParts: mobile || lowPower ? 420 : 900,
    moteMin: mobile ? 24 : 40, moteMax: mobile ? 80 : 110,
    starMin: mobile ? 30 : 60, starMax: mobile ? 90 : 150,
  };
})();
let COL = {};
function leerColores(){
  const cs = getComputedStyle(root), v = n => hex2rgb(cs.getPropertyValue(n) || '#000');
  COL = { n1: v('--noche-1'), n2: v('--noche-2'), am: v('--amarillo'), amv: v('--amarillo-vivo'), cip: v('--cipres') };
}

/* ───────────────────────── PINTURA AL ÓLEO (fondos) ───────────────────────── */
function prepararCanvas(cv){
  const dpr = PERF.fxDpr, w = innerWidth, h = innerHeight;
  cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
  const ctx = cv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  return { ctx, w, h };
}
/* Pinceladas que siguen un campo de flujo (como las de Van Gogh) */
function trazos(ctx, n, R, o){
  for (let i = 0; i < n; i++){
    let x = o.x0 + R() * (o.x1 - o.x0), y = o.y0 + R() * (o.y1 - o.y0);
    const k = o.escala ? o.escala(y) : 1;
    const L = o.len * (.6 + R() * .9) * k, wd = o.ancho * (.6 + R() * .9) * k;
    ctx.strokeStyle = rgba(o.col(x, y, R), o.alfa * (.55 + R() * .45)); ctx.lineWidth = wd;
    ctx.beginPath(); ctx.moveTo(x, y);
    const segs = o.segs || 3;
    for (let s = 0; s < segs; s++){ const a = o.ang(x, y); x += Math.cos(a) * L / segs; y += Math.sin(a) * L / segs; ctx.lineTo(x, y); }
    ctx.stroke();
  }
}
/* Ciprés pintado a pinceladas */
function cipres(ctx, R, o){
  const N = 60;
  const pt = t => {
    const cx = o.x + Math.sin(t * 4.2 + .6) * o.ancho * .13 * (t + .3);
    const hw = o.ancho / 2 * (Math.pow(Math.sin(Math.PI * Math.pow(Math.min(t, 1), .66)), .85) * .92 + .10 * (1 - t));
    return { cx, hw, y: o.base - o.alto * t };
  };
  ctx.save(); ctx.beginPath();
  for (let i = 0; i <= N; i++){ const p = pt(i / N); i ? ctx.lineTo(p.cx - p.hw, p.y) : ctx.moveTo(p.cx - p.hw, p.y); }
  for (let i = N; i >= 0; i--){ const p = pt(i / N); ctx.lineTo(p.cx + p.hw, p.y); }
  ctx.closePath(); ctx.fillStyle = rgba(o.oscuro, 1); ctx.fill(); ctx.clip();
  const densidad = Math.max(700, Math.round(1300 * PERF.paintQuality));
  for (let k = 0; k < densidad; k++){
    const t = R(), p = pt(t), px = p.cx + (R() * 2 - 1) * p.hw;
    const a = -Math.PI / 2 + Math.sin(t * 10 + px * .03) * .55 + (px - p.cx) / (p.hw + 1) * .35;
    const L = o.alto * (.025 + R() * .05);
    ctx.strokeStyle = rgba(mixc(o.oscuro, o.claro, R() * R()), .5 + R() * .4); ctx.lineWidth = o.ancho * (.018 + R() * .03);
    ctx.beginPath(); ctx.moveTo(px, p.y);
    ctx.quadraticCurveTo(px + Math.cos(a + .5) * L * .6, p.y + Math.sin(a + .5) * L * .6, px + Math.cos(a) * L, p.y + Math.sin(a) * L);
    ctx.stroke();
  }
  ctx.restore();
}
function pintarNoche(){
  const { ctx, w, h } = prepararCanvas($('#paintNight')), R = mulberry32(21), m = Math.min(w, h);
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, rgba(COL.n1)); g.addColorStop(.55, rgba(mixc(COL.n1, COL.n2, .55))); g.addColorStop(1, rgba(COL.n2));
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  const V = [
    { x: w * .36, y: h * .32, r: m * .27, s: 1 },  { x: w * .60, y: h * .30, r: m * .20, s: -1 },
    { x: w * .82, y: h * .62, r: m * .24, s: 1 },  { x: w * .16, y: h * .74, r: m * .18, s: -1 },
  ];
  let inten = 0;
  const flujo = (x, y) => {
    let ax = Math.cos(y * .011) * .35, ay = Math.sin(x * .009) * .25; inten = 0;
    for (const v of V){
      const dx = x - v.x, dy = y - v.y, d = Math.hypot(dx, dy) + 1, f = Math.exp(-d / v.r);
      ax += (-dy * v.s * 2.2 - dx * .5) / d * f; ay += (dx * v.s * 2.2 - dy * .5) / d * f; inten += f;
    }
    return Math.atan2(ay, ax);
  };
  const RAMPA = [COL.n1, COL.n2, [47, 92, 158], [79, 139, 208], [155, 208, 238], [246, 239, 176]];
  const area = w * h;
  const base = { x0: -20, y0: -20, x1: w + 20, y1: h + 20, ang: flujo, col: (x, y, R) => rampa(RAMPA, inten * .5 + R() * .28 - .08) };
  trazos(ctx, Math.round(clamp(area / 220, 1500, 11000) * PERF.paintQuality), R, { ...base, len: m * .05, ancho: m * .0065, alfa: .55 });
  trazos(ctx, Math.round(clamp(area / 120, 2500, 20000) * PERF.paintQuality), R, { ...base, len: m * .032, ancho: m * .0033, alfa: .8 });
  /* destellos amarillos alrededor de los remolinos */
  for (const v of V){
    trazos(ctx, Math.round(90 * PERF.paintQuality), R, {
      x0: v.x - v.r * .7, x1: v.x + v.r * .7, y0: v.y - v.r * .7, y1: v.y + v.r * .7, ang: flujo,
      col: (x, y, R) => mixc([255, 247, 194], COL.amv, R()), len: m * .022, ancho: m * .0026, alfa: .8, segs: 4,
    });
  }
  cipres(ctx, R, { x: w * .085, base: h * 1.06, alto: h * .86, ancho: m * .21, oscuro: mixc(COL.n1, [0, 0, 0], .55), claro: mixc(COL.cip, COL.n2, .35) });
}
function pintarPradera(){
  const { ctx, w, h } = prepararCanvas($('#paintMeadow')), R = mulberry32(7), m = Math.min(w, h), hz = h * .56;
  /* cielo */
  const gs = ctx.createLinearGradient(0, 0, 0, hz);
  gs.addColorStop(0, rgba(mixc(COL.n1, COL.n2, .55))); gs.addColorStop(.35, rgba([42, 95, 168]));
  gs.addColorStop(.72, rgba([111, 166, 216])); gs.addColorStop(1, rgba([245, 222, 140]));
  ctx.fillStyle = gs; ctx.fillRect(0, 0, w, hz + 2);
  /* suelo */
  const gg = ctx.createLinearGradient(0, hz, 0, h);
  gg.addColorStop(0, rgba(mixc(COL.cip, COL.am, .25))); gg.addColorStop(1, rgba(mixc(COL.cip, [0, 0, 0], .45)));
  ctx.fillStyle = gg; ctx.fillRect(0, hz, w, h - hz);
  /* pinceladas de cielo, con remolino alrededor del sol */
  const sol = { x: w - Math.min(w * .08, 150) - Math.min(w * .055, 66), y: Math.max(h * .09, 58) + Math.min(w * .055, 66) };
  const SKY = [mixc(COL.n1, COL.n2, .5), [36, 82, 150], [60, 120, 190], [120, 175, 222], [188, 214, 226], [246, 226, 150]];
  let fs = 0;
  trazos(ctx, Math.round(clamp(w * hz / 190, 1500, 9000) * PERF.paintQuality), R, {
    x0: -20, x1: w + 20, y0: -10, y1: hz, len: m * .05, ancho: m * .0065, alfa: .6,
    ang: (x, y) => {
      const dx = x - sol.x, dy = y - sol.y, d = Math.hypot(dx, dy) + 1; fs = Math.exp(-d / (m * .3));
      const ax = Math.cos(y * .02) * .9 + (-dy / d) * fs * 2.6, ay = Math.sin(x * .012) * .35 + (dx / d) * fs * 2.6;
      return Math.atan2(ay, ax);
    },
    col: (x, y, R) => rampa(SKY, (y / hz) * .72 + R() * .2 - .05 + fs * .35),
  });
  /* colinas lejanas */
  const colina = (base, amp, f, col, ph) => {
    ctx.beginPath(); ctx.moveTo(0, h);
    for (let x = 0; x <= w + 8; x += 8) ctx.lineTo(x, base + Math.sin(x * f + ph) * amp + Math.sin(x * f * 2.3 + ph * 2) * amp * .4);
    ctx.lineTo(w, h); ctx.closePath(); ctx.fillStyle = col; ctx.fill();
  };
  colina(hz - h * .02, h * .03, .004, rgba(mixc(COL.cip, COL.n2, .55), .95), 1);
  colina(hz + h * .012, h * .026, .006, rgba(mixc(COL.cip, COL.n2, .2), 1), 3);
  /* pinceladas del prado */
  const G = [[112, 160, 60], [63, 122, 70], [47, 105, 64], [31, 77, 58], [20, 52, 40]];
  trazos(ctx, Math.round(clamp(w * (h - hz) / 150, 2000, 12000) * PERF.paintQuality), R, {
    x0: -20, x1: w + 20, y0: hz + 4, y1: h + 10, len: m * .05, ancho: m * .0055, alfa: .8,
    ang: (x, y) => Math.sin(x * .012 + y * .03) * .45 + Math.cos(y * .05) * .2,
    escala: y => .45 + ((y - hz) / (h - hz)) * 1.5,
    col: (x, y, R) => {
      const d = (y - hz) / (h - hz), r = R();
      if (r < .085) return mixc(COL.am, COL.amv, R());
      if (r < .125) return [90, 120, 220];
      return rampa(G, d * .85 + R() * .35 - .1);
    },
  });
  cipres(ctx, R, { x: w * .045, base: hz + h * .12, alto: h * .42, ancho: m * .11, oscuro: mixc(COL.cip, [0, 0, 0], .6), claro: mixc(COL.cip, [120, 180, 90], .35) });
  cipres(ctx, R, { x: w * .955, base: hz + h * .10, alto: h * .34, ancho: m * .09, oscuro: mixc(COL.cip, [0, 0, 0], .55), claro: mixc(COL.cip, [120, 180, 90], .3) });
}
let ultimoTam = { w: 0, h: 0 }, praderaLista = false, praderaProgramada = false;
function pintarPraderaUnaVez(){
  if (praderaLista || praderaProgramada) return;
  praderaProgramada = true;
  const pintar = () => {
    try { pintarPradera(); praderaLista = true; } catch (e) { console.warn('Pradera:', e); }
  };
  if ('requestIdleCallback' in window) requestIdleCallback(pintar, { timeout: 900 });
  else setTimeout(pintar, 180);
}
function pintarFondos(){
  leerColores();
  try { pintarNoche(); pintarPraderaUnaVez(); } catch (e) { console.warn('Fondos:', e); }
  ultimoTam = { w: innerWidth, h: innerHeight };
}

/* ───────────────────────── MOTOR DE DESTELLOS (canvas fx) ───────────────────────── */
const fx = (() => {
  const cv = $('#fx'), ctx = cv.getContext('2d'), R = Math.random;
  let W = 0, H = 0, dpr = 1, P = 0, last = performance.now(), lastDraw = 0, rafId = 0, running = true, t = 0;
  const parts = []; let motes = [], vort = [], estr = [], fugaz = null, proxFugaz = 5000, proxPetalo = 0, lluviaMs = 0;
  const api = { intro: true };
  const PET = ['255,208,0', '243,182,31', '255,228,92', '255,247,194', '255,208,0', '143,165,255'];

  function resize(){
    dpr = PERF.fxDpr; W = innerWidth; H = innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const m = Math.min(W, H);
    vort = [[.20, .30, .21], [.74, .27, .17], [.50, .66, .22], [.88, .78, .15]].map(([x, y, r], i) => ({ x: W * x, y: H * y, r: m * r, i }));
    const n = clamp(Math.round(W * H / 15000), PERF.moteMin, PERF.moteMax);
    motes = Array.from({ length: n }, () => ({
      v: (R() * vort.length) | 0, a: R() * 6.283, r: 8 + R() * 1.05 * m * .3, w: (.25 + R() * .6) * (R() < .5 ? -1 : 1),
      s: .8 + R() * 2, ph: R() * 6.283, k: .7 + R() * .3,
    }));
    estr = Array.from({ length: clamp(Math.round(W * H / 9000), PERF.starMin, PERF.starMax) }, () => ({ x: R() * W, y: R() * H * .85, s: .4 + R() * 1.5, ph: R() * 6.283, ts: .001 + R() * .003 }));
  }
  function chispa(x, y, n = 1, o = {}){
    for (let i = 0; i < n; i++) parts.push({ k: 'c', x, y, vx: (R() - .5) * (o.v || 1.4), vy: (R() - .5) * (o.v || 1.4) - .3, l: 0, max: (o.max || 50) + R() * 40, s: (o.s || 1) + R() * 2 });
  }
  function burst(x, y, n = 26){
    for (let i = 0; i < n; i++){
      const a = R() * 6.283, sp = 1.4 + R() * 4.6;
      if (R() < .5) parts.push({ k: 'c', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1, l: 0, max: 40 + R() * 50, s: 1 + R() * 2.4 });
      else parts.push({ k: 'p', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.6, l: 0, max: 90 + R() * 80, s: 3.5 + R() * 5, rot: R() * 6.283, vr: (R() - .5) * .22, col: PET[(R() * PET.length) | 0], ph: R() * 6.283 });
    }
  }
  function estrellitas(x, y, n = 14){
    for (let i = 0; i < n; i++){ const a = R() * 6.283, sp = 1 + R() * 3.5; parts.push({ k: 's', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, l: 0, max: 50 + R() * 40, s: 2 + R() * 3 }); }
  }
  function lluvia(seg){ lluviaMs = seg * 1000; }
  function setP(p){ P = p; }

  function frame(now){
    if (document.hidden){ running = false; rafId = 0; return; }
    const minFrame = 1000 / PERF.fxFps;
    if (now - lastDraw < minFrame){ rafId = requestAnimationFrame(frame); return; }
    const dtms = Math.min(60, now - last); last = now; lastDraw = now; const dt = dtms / 16.67; t = now;
    const Pn = api.intro ? 1 : P;
    ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = 'lighter';
    const cr = 255, cg = Math.round(200 + 40 * Pn), cb = Math.round(20 + 120 * Pn), col = `${cr},${cg},${cb}`;

    /* estrellas de fondo (solo de noche) */
    if (Pn > .25){
      const base = Math.pow((Pn - .25) / .75, 1.4);
      for (const e of estr){
        const a = base * (.35 + .65 * Math.abs(Math.sin(t * e.ts + e.ph)));
        ctx.fillStyle = `rgba(255,246,200,${a})`; ctx.beginPath(); ctx.arc(e.x, e.y, e.s, 0, 6.283); ctx.fill();
        if (e.s > 1.35){ ctx.strokeStyle = `rgba(255,246,200,${a * .5})`; ctx.lineWidth = .6; ctx.beginPath(); ctx.moveTo(e.x - e.s * 3.2, e.y); ctx.lineTo(e.x + e.s * 3.2, e.y); ctx.moveTo(e.x, e.y - e.s * 3.2); ctx.lineTo(e.x, e.y + e.s * 3.2); ctx.stroke(); }
      }
    }
    /* espirales de luz dorada */
    const aE = .1 + .12 * Pn;
    ctx.lineWidth = 1.6;
    for (const v of vort){
      const cx = v.x + Math.sin(t * .00015 + v.i * 2) * 40, cy = v.y + Math.cos(t * .00012 + v.i) * 28;
      for (let arm = 0; arm < 2; arm++){
        ctx.beginPath();
        for (let th = 0; th <= 14.1; th += .2){
          const r = v.r * th / 14.1, an = th + t * .00035 * (v.i % 2 ? -1 : 1) + arm * Math.PI;
          const x = cx + Math.cos(an) * r, y = cy + Math.sin(an) * r * .75; th ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.strokeStyle = `rgba(${col},${aE})`; ctx.stroke();
      }
    }
    /* polvo dorado que orbita los remolinos */
    for (const m of motes){
      m.a += m.w * .004 * dt; const v = vort[m.v];
      const cx = v.x + Math.sin(t * .00015 + v.i * 2) * 40, cy = v.y + Math.cos(t * .00012 + v.i) * 28;
      const r = m.r + Math.sin(t * .0004 + m.ph) * 12, x = cx + Math.cos(m.a) * r, y = cy + Math.sin(m.a) * r * .75;
      const a = (.3 + .7 * Math.abs(Math.sin(t * .0018 + m.ph)));
      ctx.fillStyle = `rgba(${col},${a * .16})`; ctx.beginPath(); ctx.arc(x, y, m.s * 3.4, 0, 6.283); ctx.fill();
      ctx.fillStyle = `rgba(255,${cg + 20},${cb + 40},${a})`; ctx.beginPath(); ctx.arc(x, y, m.s * .8, 0, 6.283); ctx.fill();
    }
    /* estrella fugaz */
    if (Pn > .55 && !fugaz && t > proxFugaz){ fugaz = { x: W * (.25 + R() * .6), y: H * (.05 + R() * .25), vx: -(7 + R() * 4), vy: 3 + R() * 3, l: 0 }; proxFugaz = t + 4500 + R() * 6000; }
    if (fugaz){
      fugaz.x += fugaz.vx * dt; fugaz.y += fugaz.vy * dt; fugaz.l += dt;
      const a = Math.max(0, 1 - fugaz.l / 55);
      const g = ctx.createLinearGradient(fugaz.x, fugaz.y, fugaz.x - fugaz.vx * 9, fugaz.y - fugaz.vy * 9);
      g.addColorStop(0, `rgba(255,251,224,${a})`); g.addColorStop(1, 'rgba(255,208,0,0)');
      ctx.strokeStyle = g; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(fugaz.x, fugaz.y); ctx.lineTo(fugaz.x - fugaz.vx * 9, fugaz.y - fugaz.vy * 9); ctx.stroke();
      if (fugaz.l > 55) fugaz = null;
    }
    /* pétalos ambientales cayendo (de día y al florecer) */
    if (!api.intro){
      if (t > proxPetalo && (lluviaMs > 0 || Pn < .8)){
        proxPetalo = t + (lluviaMs > 0 ? 70 : 520);
        parts.push({ k: 'p', x: R() * W, y: -12, vx: (R() - .3) * .6, vy: .7 + R() * 1.1, l: 0, max: 900, s: 3 + R() * 4, rot: R() * 6.283, vr: (R() - .5) * .05, col: PET[(R() * PET.length) | 0], ph: R() * 6.283, amb: 1 });
      }
    }
    if (lluviaMs > 0) lluviaMs -= dtms;
    /* partículas */
    for (let i = parts.length - 1; i >= 0; i--){
      const p = parts[i]; p.l += dt;
      if (p.k === 'p'){
        if (p.amb){ p.x += Math.sin(t * .0015 + p.ph) * .7 + p.vx * dt; p.y += p.vy * dt; if (p.y > H + 20) { parts.splice(i, 1); continue; } }
        else { p.vy += .05 * dt; p.vx *= .985; p.x += p.vx * dt + Math.sin(t * .004 + p.ph) * .3; p.y += p.vy * dt; }
        p.rot += p.vr * dt;
        const a = p.amb ? .85 : Math.max(0, 1 - p.l / p.max);
        if (a <= 0){ parts.splice(i, 1); continue; }
        ctx.fillStyle = `rgba(${p.col},${a})`; ctx.beginPath(); ctx.ellipse(p.x, p.y, p.s, p.s * .5, p.rot, 0, 6.283); ctx.fill();
      } else {
        p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= .985; p.vy *= .985;
        const a = 1 - p.l / p.max; if (a <= 0){ parts.splice(i, 1); continue; }
        if (p.k === 'c'){
          ctx.fillStyle = `rgba(255,208,0,${a * .25})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.s * 3, 0, 6.283); ctx.fill();
          ctx.fillStyle = `rgba(255,247,194,${a})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.s * .8, 0, 6.283); ctx.fill();
        } else {
          const s = p.s * (.6 + .4 * Math.sin(p.l * .4));
          ctx.strokeStyle = `rgba(255,247,194,${a})`; ctx.lineWidth = 1.2; ctx.beginPath();
          ctx.moveTo(p.x - s * 2, p.y); ctx.lineTo(p.x + s * 2, p.y); ctx.moveTo(p.x, p.y - s * 2); ctx.lineTo(p.x, p.y + s * 2); ctx.stroke();
          ctx.fillStyle = `rgba(255,208,0,${a * .4})`; ctx.beginPath(); ctx.arc(p.x, p.y, s * 1.3, 0, 6.283); ctx.fill();
        }
      }
    }
    if (parts.length > PERF.maxParts) parts.splice(0, parts.length - PERF.maxParts);
    ctx.globalCompositeOperation = 'source-over';
    rafId = requestAnimationFrame(frame);
  }
  function start(){
    if (running || document.hidden) return;
    running = true; last = performance.now(); lastDraw = 0; rafId = requestAnimationFrame(frame);
  }
  function stop(){
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }
  resize(); running = false; start();
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  /* estela dorada que sigue al cursor (solo con ratón) */
  let ultimoMov = 0;
  addEventListener('pointermove', e => { if (e.pointerType !== 'mouse' || api.intro) return; const n = performance.now(); if (n - ultimoMov < 40) return; ultimoMov = n; chispa(e.clientX, e.clientY, 1, { v: .7, max: 26, s: .8 }); }, { passive: true });
  Object.assign(api, { resize, chispa, burst, estrellitas, lluvia, setP });
  return api;
})();

/* ───────────────────────── FLORES (ilustraciones SVG) ───────────────────────── */
const svgBase = inner => `<svg viewBox="0 0 100 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true">${inner}</svg>`;

function svgGirasol(){
  let atras = '', frente = '';
  for (let i = 0; i < 16; i++) atras += `<path transform="rotate(${i * 22.5})" d="M0 -13C7 -22 8.5 -36 0 -47C-8.5 -36 -7 -22 0 -13Z"/>`;
  for (let i = 0; i < 16; i++) frente += `<path transform="rotate(${i * 22.5 + 11.25})" d="M0 -12C6 -20 7 -32 0 -41C-7 -32 -6 -20 0 -12Z"/>`;
  return svgBase(`
    <path d="M50 200C46 166 54 130 50 62" fill="none" stroke="url(#gTallo)" stroke-width="6" stroke-linecap="round"/>
    <path d="M49 172C24 170 9 152 7 133C30 135 46 150 49 172Z" fill="url(#gHoja)"/>
    <path d="M49 172C36 160 24 148 12 136" fill="none" stroke="#173f2d" stroke-width="1" opacity=".5"/>
    <path d="M51 142C76 140 92 122 94 104C72 106 54 120 51 142Z" fill="url(#gHoja2)"/>
    <path d="M51 142C64 132 78 120 90 108" fill="none" stroke="#12362a" stroke-width="1" opacity=".5"/>
    <g transform="translate(50 58)">
      <g fill="url(#gPetaloO)" stroke="#a86a06" stroke-width=".7">${atras}</g>
      <g fill="url(#gPetaloC)" stroke="#c98a0b" stroke-width=".6">${frente}</g>
      <circle r="17" fill="url(#gDisco)"/>
      <circle r="14" fill="none" stroke="#e0a83c" stroke-width="1.5" stroke-dasharray="1.1 2.3" opacity=".75"/>
      <circle r="10" fill="none" stroke="#e0a83c" stroke-width="1.4" stroke-dasharray="1 2.1" opacity=".7"/>
      <circle r="6" fill="none" stroke="#e0a83c" stroke-width="1.2" stroke-dasharray="1 1.9" opacity=".65"/>
      <circle r="2.2" fill="#e0a83c"/>
      <ellipse cx="-5" cy="-7" rx="6.5" ry="3" fill="#fff" opacity=".14" transform="rotate(-35 -5 -7)"/>
    </g>`);
}
function svgTulipan(){
  return svgBase(`
    <path d="M50 200C47 160 53 120 50 84" fill="none" stroke="url(#gTallo)" stroke-width="5" stroke-linecap="round"/>
    <path d="M48 200C22 176 12 132 26 90C42 118 52 158 48 200Z" fill="url(#gHoja)"/>
    <path d="M48 200C34 170 28 138 26 92" fill="none" stroke="#173f2d" stroke-width="1" opacity=".45"/>
    <path d="M52 200C80 180 92 140 80 102C62 126 50 162 52 200Z" fill="url(#gHoja2)"/>
    <path d="M52 200C68 172 76 140 80 104" fill="none" stroke="#12362a" stroke-width="1" opacity=".45"/>
    <path d="M50 14C36 20 25 40 27 60C29 76 42 87 50 87C44 66 42 36 50 14Z" fill="url(#gTulipb)" stroke="#b87408" stroke-width=".7"/>
    <path d="M50 14C64 20 75 40 73 60C71 76 58 87 50 87C56 66 58 36 50 14Z" fill="url(#gTulipb)" stroke="#b87408" stroke-width=".7"/>
    <path d="M50 8C62 24 71 46 67 64C64 80 57 89 50 89C43 89 36 80 33 64C29 46 38 24 50 8Z" fill="url(#gTulipa)" stroke="#c98a0b" stroke-width=".9"/>
    <path d="M50 20C46 40 46 62 50 84" fill="none" stroke="#fff8c0" stroke-width="1.4" opacity=".5" stroke-linecap="round"/>
    <path d="M41 30C37 46 39 62 44 76" fill="none" stroke="#fff8c0" stroke-width="1.1" opacity=".38" stroke-linecap="round"/>
    <path d="M59 30C63 46 61 62 56 76" fill="none" stroke="#b87408" stroke-width="1" opacity=".35" stroke-linecap="round"/>
    <path d="M43 88C45 97 55 97 57 88C54 91 46 91 43 88Z" fill="url(#gHoja)"/>`);
}
function svgRosa(){
  let sp = 'M50 54';
  for (let th = .2; th <= 12; th += .4){ const r = 1 + th * 1.25; sp += `L${(50 + Math.cos(th) * r).toFixed(1)} ${(54 + Math.sin(th) * r).toFixed(1)}`; }
  let ext = '', int = '';
  for (let i = 0; i < 5; i++){ const a = (i * 72 - 90) * Math.PI / 180; ext += `<circle cx="${(50 + Math.cos(a) * 19).toFixed(1)}" cy="${(54 + Math.sin(a) * 19).toFixed(1)}" r="15"/>`; }
  for (let i = 0; i < 5; i++){ const a = (i * 72 - 54) * Math.PI / 180; int += `<circle cx="${(50 + Math.cos(a) * 11).toFixed(1)}" cy="${(54 + Math.sin(a) * 11).toFixed(1)}" r="12"/>`; }
  return svgBase(`
    <path d="M50 200C52 160 47 122 50 84" fill="none" stroke="url(#gTallo)" stroke-width="5" stroke-linecap="round"/>
    <path d="M50 132l-6 -3l6 -2z M50 158l7 -3l-7 -2z M50 112l7 -3l-7 -2z" fill="#173f2d"/>
    <path d="M50 152C34 152 22 142 20 130C36 128 48 136 50 152Z" fill="url(#gHoja)"/>
    <path d="M50 152C66 150 78 138 80 126C62 126 52 136 50 152Z" fill="url(#gHoja2)"/>
    <path d="M50 122C38 120 30 110 30 100C42 100 50 108 50 122Z" fill="url(#gHoja2)"/>
    <path d="M50 84C40 86 32 82 26 76C38 76 46 78 50 84Z" fill="url(#gHoja)"/>
    <path d="M50 84C60 86 68 82 74 76C62 76 54 78 50 84Z" fill="url(#gHoja2)"/>
    <g fill="url(#gRosa)" stroke="#b87408" stroke-width=".8">${ext}</g>
    <g fill="url(#gRosa)" stroke="#b87408" stroke-width=".8">${int}</g>
    <circle cx="50" cy="54" r="10" fill="#FFD000" stroke="#b87408" stroke-width=".8"/>
    <path d="${sp}" fill="none" stroke="#b87408" stroke-width="1.1" stroke-linecap="round" opacity=".85"/>
    <path d="M40 40C44 33 52 31 58 33" fill="none" stroke="#fff8c0" stroke-width="2" stroke-linecap="round" opacity=".55"/>`);
}
function svgIris(){
  return svgBase(`
    <path d="M46 200C30 160 26 110 34 60C44 100 50 150 50 200Z" fill="url(#gHoja)"/>
    <path d="M54 200C70 165 76 120 68 78C58 110 52 160 50 200Z" fill="url(#gHoja2)"/>
    <path d="M50 200C52 160 48 120 50 86" fill="none" stroke="url(#gTallo)" stroke-width="4.5" stroke-linecap="round"/>
    <g fill="url(#gIrisA)" stroke="#1c2a7a" stroke-width=".7">
      <path transform="rotate(-28 50 66)" d="M50 66C38 46 40 22 50 8C60 22 62 46 50 66Z"/>
      <path transform="rotate(28 50 66)" d="M50 66C38 46 40 22 50 8C60 22 62 46 50 66Z"/>
      <path d="M50 66C38 46 40 22 50 8C60 22 62 46 50 66Z"/>
    </g>
    <g fill="url(#gIrisB)" stroke="#1c2a7a" stroke-width=".7">
      <path d="M50 68C38 62 20 66 12 84C10 94 18 100 26 94C38 88 46 80 50 68Z"/>
      <path d="M50 68C62 62 80 66 88 84C90 94 82 100 74 94C62 88 54 80 50 68Z"/>
      <path d="M50 70C40 80 38 100 44 118C47 126 53 126 56 118C62 100 60 80 50 70Z"/>
    </g>
    <path d="M46 74C42 88 42 104 46 116" fill="none" stroke="#d6dcff" stroke-width=".9" opacity=".45"/>
    <path d="M54 74C58 88 58 104 54 116" fill="none" stroke="#d6dcff" stroke-width=".9" opacity=".45"/>
    <path d="M40 72C30 74 22 82 18 92" fill="none" stroke="#d6dcff" stroke-width=".8" opacity=".4"/>
    <path d="M60 72C70 74 78 82 82 92" fill="none" stroke="#d6dcff" stroke-width=".8" opacity=".4"/>
    <ellipse cx="50" cy="86" rx="4.5" ry="11" fill="#FFD000" opacity=".95"/>
    <path d="M50 72L50 100" stroke="#F3B61F" stroke-width="1.6" stroke-linecap="round"/>`);
}
const TIPOS = {
  girasol: { svg: svgGirasol(), f: 1.0,  peso: .30, hue: [-6, 6],   nombre: 'girasol' },
  tulipan: { svg: svgTulipan(), f: 1.2, peso: .24, hue: [-16, 12], nombre: 'tulipán' },
  rosa:    { svg: svgRosa(),    f: 1.2,  peso: .22, hue: [-8, 8],   nombre: 'rosa amarilla' },
  iris:    { svg: svgIris(),    f: 1.1, peso: .24, hue: [-18, 32], nombre: 'iris' },
};
function elegirTipo(){ let r = Math.random(), acc = 0; for (const k in TIPOS){ acc += TIPOS[k].peso; if (r < acc) return k; } return 'girasol'; }

/* ───────────────────────── CONSTRUIR EL CAMPO ───────────────────────── */
const campo = $('#campo'), trans = $('#transicion'), galeria = $('#galeria');
const capas = [$('#capaLejos'), $('#capaMedia'), $('#capaCerca')];
let movilPrev = null;
function construirCampo(){
  const movil = matchMedia('(max-width:700px)').matches; movilPrev = movil;
  const cols = movil ? 5 : 10, filas = movil ? 8 : 6, R = Math.random;
  capas.forEach(c => c.innerHTML = '');
  const cont = { girasol: 0, tulipan: 0, rosa: 0, iris: 0 };
  const puntos = [];
  for (let r = 0; r < filas; r++) for (let c = 0; c < cols; c++){
    const xf = clamp((c + .1 + R() * .8 + (r % 2 ? .4 : 0)) / cols, .02, .98);
    const yf = .33 + ((r + .1 + R() * .8) / filas) * .65;
    puntos.push({ xf, yf });
  }
  puntos.sort((a, b) => a.yf - b.yf);
  puntos.forEach((pt, idx) => {
    const tipo = elegirTipo(), T = TIPOS[tipo], { xf, yf } = pt;
    const k = Math.pow(clamp((yf - .33) / .65, 0, 1), 1.15);
    const div = document.createElement('div');
    div.className = 'flor' + (R() < .5 ? ' flip' : '');
    div.tabIndex = 0; div.setAttribute('role', 'button'); div.setAttribute('aria-label', 'Flor: ' + T.nombre);
    const dx = (xf - .5) * 1.4, dy = (yf - .55) * .9;
    div.style.cssText = `--x:${(xf * 100).toFixed(2)}%;--y:${(yf * 100).toFixed(2)}%;--k:${k.toFixed(3)};--f:${T.f};--v:${(.86 + R() * .34).toFixed(2)};--z:${Math.round(yf * 1000)};` +
      `--dur:${(3.6 + R() * 4.2).toFixed(2)}s;--del:${(-R() * 7).toFixed(2)}s;--amp:${(1.3 + R() * 2.3).toFixed(2)}deg;` +
      `--bd:${(Math.hypot(dx, dy) * 2.4 + R() * .5).toFixed(2)}s;--hue:${(T.hue[0] + R() * (T.hue[1] - T.hue[0])).toFixed(0)}deg;--br:${(.93 + R() * .16).toFixed(2)}`;
    div.innerHTML = `<div class="mece"><div class="bloom">${T.svg}</div></div>`;
    const lista = POEMAS[tipo] && POEMAS[tipo].length ? POEMAS[tipo] : [{ poema: '', gif: '' }];
    const it = lista[cont[tipo]++ % lista.length];
    div._d = { texto: it.poema, gif: it.gif, firma: it.firma, emoji: EMOJIS_GIF[idx % EMOJIS_GIF.length] };
    capas[k < .34 ? 0 : k < .68 ? 1 : 2].appendChild(div);
  });
}

/* ───────────────────────── TARJETA DE PAPEL ───────────────────────── */
const tarjeta = $('#tarjeta'), velo = $('#velo');
const hoverFino = matchMedia('(hover:hover) and (pointer:fine)');
const TJ = { abierta: false, modo: '', fijada: false, cierre: 0, limpia: 0 };
let flActiva = null;

function emojiEl(e){ const s = document.createElement('span'); s.className = 'gif-ph'; s.textContent = e || '🧸'; return s; }
function posicionar(f){
  const s = f.querySelector('svg').getBoundingClientRect(), w = tarjeta.offsetWidth, h = tarjeta.offsetHeight;
  const left = clamp(s.left + s.width / 2 - w / 2, 8, innerWidth - w - 8);
  let top = s.top + s.height * .1 - h - 12;
  if (top < 8) top = Math.min(s.top + s.height * .42, innerHeight - h - 8);
  tarjeta.style.left = left + 'px'; tarjeta.style.top = Math.max(8, top) + 'px';
}
function mostrarTarjeta(d){
  clearTimeout(TJ.cierre); clearTimeout(TJ.limpia);
  const gifBox = $('.t-gif', tarjeta); gifBox.textContent = '';
  if (d.gif){
    const im = new Image(); im.alt = ''; im.decoding = 'async'; im.src = d.gif;
    im.onerror = () => { gifBox.textContent = ''; gifBox.append(emojiEl(d.emoji)); };
    gifBox.append(im);
  } else gifBox.append(emojiEl(d.emoji));
  $('.t-fecha', tarjeta).textContent = d.fecha || '';
  $('.t-titulo', tarjeta).textContent = d.titulo || '';
  $('.t-texto', tarjeta).textContent = d.texto || '';
  $('.t-firma', tarjeta).textContent = d.firma || FIRMA;
  tarjeta.classList.remove('flotante', 'modal', 'abierta', 'cerrando'); void tarjeta.offsetWidth;
  tarjeta.style.left = tarjeta.style.top = '';
  tarjeta.style.setProperty('--rot', (d.modo === 'modal' ? -1 + Math.random() * 2 : -1.6 + Math.random() * 3.2).toFixed(2) + 'deg');
  tarjeta.classList.add(d.modo, 'abierta');
  if (d.modo === 'flotante') posicionar(d.ancla);
  velo.classList.toggle('on', d.modo === 'modal');
  Object.assign(TJ, { abierta: true, modo: d.modo, fijada: !!d.fijar });
}
function cerrarTarjeta(){
  if (!TJ.abierta) return;
  TJ.abierta = false; TJ.fijada = false; clearTimeout(TJ.cierre);
  tarjeta.classList.remove('abierta'); tarjeta.classList.add('cerrando'); velo.classList.remove('on');
  if (flActiva){ flActiva.classList.remove('activa'); flActiva = null; }
  TJ.limpia = setTimeout(() => tarjeta.classList.remove('cerrando', 'flotante', 'modal'), 260);
}
function programarCierre(){
  if (!TJ.abierta || TJ.fijada || TJ.modo !== 'flotante') return;
  clearTimeout(TJ.cierre); TJ.cierre = setTimeout(cerrarTarjeta, 380);
}
function abrirFlor(f, fijar){
  if (TJ.abierta && flActiva === f){ if (fijar) TJ.fijada = true; return; }
  if (flActiva) flActiva.classList.remove('activa');
  flActiva = f; f.classList.add('activa');
  const modo = hoverFino.matches ? 'flotante' : 'modal';
  mostrarTarjeta({ modo, texto: f._d.texto, gif: f._d.gif, emoji: f._d.emoji, firma: f._d.firma, ancla: f, fijar });
  const r = f.querySelector('svg').getBoundingClientRect();
  fx.burst(r.left + r.width / 2, r.top + r.height * .29, fijar ? 20 : 9);
}
/* Ratón: al pasar el cursor por una flor se abre la tarjeta */
document.addEventListener('pointerover', e => {
  if (e.pointerType !== 'mouse' || !hoverFino.matches || document.body.classList.contains('intro')) return;
  const f = e.target.closest && e.target.closest('.flor');
  if (f){ clearTimeout(TJ.cierre); if (!TJ.fijada) abrirFlor(f, false); }
  else if (e.target.closest && e.target.closest('#tarjeta')) clearTimeout(TJ.cierre);
  else programarCierre();
});
document.documentElement.addEventListener('pointerleave', programarCierre);
/* Toque o clic: abre la tarjeta y la deja fija */
document.addEventListener('click', e => {
  if (document.body.classList.contains('intro')) return;
  const f = e.target.closest && e.target.closest('.flor');
  if (f) return abrirFlor(f, true);
  if (e.target.closest('#tarjeta') || e.target.closest('.estrella') || e.target.closest('#musicaBtn')) return;
  if (TJ.abierta && TJ.modo === 'flotante') cerrarTarjeta();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarTarjeta();
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('flor')){ e.preventDefault(); abrirFlor(e.target, true); }
});
$('.t-cerrar', tarjeta).addEventListener('click', cerrarTarjeta);
velo.addEventListener('click', cerrarTarjeta);
tarjeta.addEventListener('pointerenter', () => clearTimeout(TJ.cierre));
tarjeta.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') programarCierre(); });

/* ───────────────────────── ESTRELLAS ───────────────────────── */
const NS = 'http://www.w3.org/2000/svg';
const cielo = $('#cielo'), constel = $('#constel');
const estrellasEl = [], encendidas = new Set(), conex = new Map();
let todasEncendidas = false;

function svgEstrella(){
  const c = 60, pts = (Rr, r, n) => { let s = ''; for (let k = 0; k < n * 2; k++){ const a = Math.PI * k / n - Math.PI / 2, rr = k % 2 ? r : Rr; s += `${(c + Math.cos(a) * rr).toFixed(1)},${(c + Math.sin(a) * rr).toFixed(1)} `; } return s; };
  let esp = 'M60 60'; for (let th = .3; th <= 14; th += .35){ const r = th * 3.1; esp += `L${(c + Math.cos(th) * r).toFixed(1)} ${(c + Math.sin(th) * r).toFixed(1)}`; }
  return `<svg viewBox="0 0 120 120" aria-hidden="true">
    <circle class="e-halo" cx="60" cy="60" r="58" fill="url(#gEstHalo)"/>
    <g class="e-a1"><circle cx="60" cy="60" r="46" fill="none" stroke="#FFD000" stroke-width="1.6" stroke-dasharray="5 9 1.5 11" opacity=".75"/></g>
    <g class="e-a2"><path d="${esp}" fill="none" stroke="#F3B61F" stroke-width="1.5" opacity=".7" stroke-linecap="round"/></g>
    <g class="e-a3"><circle cx="60" cy="60" r="36" fill="none" stroke="#FFE873" stroke-width="1.2" stroke-dasharray="14 8" opacity=".6"/></g>
    <g class="e-rayos"><polygon points="${pts(52, 6, 8)}" fill="#FFD000" opacity=".5"/></g>
    <g class="e-nucleo"><polygon points="${pts(27, 10, 8)}" fill="url(#gEstNucleo)"/><circle cx="60" cy="60" r="8" fill="#fffbe0"/></g>
  </svg>`;
}
function construirEstrellas(){
  ESTRELLAS.forEach((e, i) => {
    const b = document.createElement('button'); b.className = 'estrella';
    b.style.cssText = `--x:${e.x}%;--y:${e.y}%;--t:${e.tam || 1};--ed:${(i * .22).toFixed(2)}s;--v:${(2.8 + Math.random() * 2).toFixed(1)}s;--v1:${(12 + Math.random() * 8).toFixed(0)}s;--v2:${(18 + Math.random() * 12).toFixed(0)}s;--v3:${(8 + Math.random() * 6).toFixed(0)}s`;
    b.setAttribute('aria-label', e.titulo || ('Estrella ' + (i + 1)));
    b.innerHTML = svgEstrella();
    b.addEventListener('click', () => tocarEstrella(i));
    cielo.appendChild(b); estrellasEl.push(b);
  });
  if (estrellasEl[0]) estrellasEl[0].classList.add('next');
}
function centro(i){
  const c = cielo.getBoundingClientRect(), r = estrellasEl[i].getBoundingClientRect();
  return { x: r.left - c.left + r.width / 2, y: r.top - c.top + r.height / 2 };
}
function geom(i){
  const a = centro(i); let b;
  if (i < ESTRELLAS.length - 1) b = centro(i + 1); else { const c = cielo.getBoundingClientRect(); b = { x: c.width / 2, y: c.height + innerHeight * .1 }; }
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1, off = len * .12 * (i % 2 ? 1 : -1);
  const cx = mx + (-dy / len) * off, cy = my + (dx / len) * off;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}
function nuevoPath(clase, d){ const p = document.createElementNS(NS, 'path'); p.setAttribute('class', clase); p.setAttribute('d', d); return p; }
function trazar(i){
  if (conex.has(i)) return;
  const d = geom(i), g = document.createElementNS(NS, 'g');
  const p1 = nuevoPath('l-ancho', d), p2 = nuevoPath('l-fino', d), p3 = nuevoPath('l-fluye', d);
  g.append(p1, p2, p3); constel.appendChild(g); conex.set(i, [p1, p2, p3]);
  const len = p2.getTotalLength();
  [p1, p2].forEach(p => { p.style.strokeDasharray = len; p.style.strokeDashoffset = len; }); p3.style.opacity = 0;
  void p2.getBoundingClientRect();
  [p1, p2].forEach(p => { p.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.3,.6,.3,1)'; p.style.strokeDashoffset = 0; });
  setTimeout(() => { [p1, p2].forEach(p => { p.style.strokeDasharray = ''; p.style.transition = ''; }); p3.style.transition = 'opacity 1s'; p3.style.opacity = 1; }, 1500);
  /* chispa que viaja por la línea */
  const c = document.createElementNS(NS, 'circle'); c.setAttribute('r', 4); c.setAttribute('class', 'chispa'); g.appendChild(c);
  const t0 = performance.now();
  (function paso(n){
    const k = clamp((n - t0) / 1400, 0, 1), e = 1 - Math.pow(1 - k, 3), pt = p2.getPointAtLength(len * e);
    c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y);
    const cr = cielo.getBoundingClientRect(); fx.chispa(cr.left + pt.x, cr.top + pt.y, 1, { v: .8, max: 30 });
    k < 1 ? requestAnimationFrame(paso) : c.remove();
  })(t0);
}
function reponerLineas(){ conex.forEach((ps, i) => { const d = geom(i); ps.forEach(p => p.setAttribute('d', d)); }); }
function tocarEstrella(i){
  const b = estrellasEl[i], e = ESTRELLAS[i];
  encendidas.add(i); b.classList.add('lit');
  trazar(i);
  estrellasEl.forEach(s => s.classList.remove('next'));
  const sig = estrellasEl.findIndex((s, k) => k > i && !encendidas.has(k));
  const alt = sig >= 0 ? sig : estrellasEl.findIndex((s, k) => !encendidas.has(k));
  if (alt >= 0) estrellasEl[alt].classList.add('next');
  const r = b.getBoundingClientRect(); fx.estrellitas(r.left + r.width / 2, r.top + r.height / 2, 20);
  mostrarTarjeta({ modo: 'modal', fecha: e.fecha, titulo: e.titulo, texto: e.texto, gif: e.gif, firma: e.firma, emoji: EMOJIS_GIF[(i + 2) % EMOJIS_GIF.length], fijar: true });
  if (!todasEncendidas && encendidas.size === ESTRELLAS.length){
    todasEncendidas = true;
    setTimeout(() => { $('#galeriaFin').classList.add('visible'); fx.lluvia(4); }, 1600);
  }
}

/* ───────────────────────── CARTA FINAL ───────────────────────── */
const pergamino = $('#pergamino'), cartaTexto = $('#cartaTexto'), selloFinal = $('#selloFinal');
const indicacion = $('#indicacion'), cartaPista = $('#cartaPista'), fin = $('#fin');
const carta = { abierta: false, saltar: false, terminada: false, cerrada: false, items: [] };
function textoDe(p){
  const tmp = document.createElement('div');
  tmp.innerHTML = p.innerHTML.replace(/\s+/g, ' ').replace(/<br\s*\/?>/gi, '\n');
  return tmp.textContent.trim().replace(/ *\n */g, '\n');
}
function prepararCarta(){
  $$('#cartaFuente p').forEach(src => {
    const txt = textoDe(src), p = document.createElement('p'); p.className = src.className;
    const v = document.createElement('span'); v.className = 'v';
    const h = document.createElement('span'); h.className = 'h'; h.textContent = txt;
    p.append(v, h); cartaTexto.appendChild(p); carta.items.push({ p, v, h, txt });
  });
}
function seguir(el){ const r = el.getBoundingClientRect(); if (r.bottom > innerHeight * .82) scrollBy({ top: r.bottom - innerHeight * .6, behavior: 'smooth' }); }
function pausaDe(ch){ return /[.!?…]/.test(ch) ? 300 : /[,;:]/.test(ch) ? 140 : ch === '\n' ? 220 : 26 + Math.random() * 22; }
async function escribir(){
  for (const it of carta.items){
    it.p.classList.add('activo');
    for (let i = 1; i <= it.txt.length; i++){
      if (carta.saltar){ it.v.textContent = it.txt; it.h.textContent = ''; break; }
      it.v.textContent = it.txt.slice(0, i); it.h.textContent = it.txt.slice(i);
      if (i % 24 === 0) seguir(it.p);
      await sleep(pausaDe(it.txt[i - 1]));
    }
    it.v.textContent = it.txt; it.h.textContent = ''; it.p.classList.remove('activo');
    if (!carta.saltar) await sleep(380);
  }
  carta.terminada = true;
  selloFinal.classList.add('estampa'); seguir(selloFinal);
  const r = selloFinal.getBoundingClientRect(); setTimeout(() => { fx.burst(r.left + r.width / 2, r.top + r.height / 2, 34); }, 450);
  setTimeout(() => selloFinal.classList.add('listo'), 1000);
  setTimeout(() => indicacion.classList.add('ver'), 1500);
}
function abrirCarta(){
  if (carta.abierta) return; carta.abierta = true;
  pergamino.classList.add('abierto'); pergamino.removeAttribute('tabindex'); pergamino.setAttribute('aria-label', 'Carta abierta');
  cartaPista.classList.add('oculta');
  const r = pergamino.getBoundingClientRect(); fx.burst(r.left + r.width / 2, r.top + 40, 30);
  setTimeout(escribir, 1500);
}
function cerrarCarta(){
  if (carta.cerrada || !carta.terminada) return; carta.cerrada = true;
  indicacion.textContent = '✦';
  const r = selloFinal.getBoundingClientRect();
  for (let i = 0; i < 6; i++) setTimeout(() => fx.burst(r.left + r.width / 2 + (Math.random() - .5) * 200, r.top + (Math.random() - .5) * 120, 30), i * 380);
  fx.lluvia(10);
  fin.classList.add('ver');
  setTimeout(() => fin.scrollIntoView({ behavior: 'smooth', block: 'center' }), 500);
}
pergamino.addEventListener('click', () => { if (!carta.abierta) abrirCarta(); else if (!carta.terminada) carta.saltar = true; });
pergamino.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && !carta.abierta){ e.preventDefault(); abrirCarta(); } });
selloFinal.addEventListener('click', e => { e.stopPropagation(); cerrarCarta(); });
$('#reiniciar').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* ───────────────────────── MÚSICA ───────────────────────── */
const audio = $('#musica'), mbtn = $('#musicaBtn'); let fadeIv = 0;
function marcar(on){ mbtn.classList.toggle('pausada', !on); }
function fundir(){ clearInterval(fadeIv); let v = audio.volume; fadeIv = setInterval(() => { v = Math.min(VOLUMEN, v + .03); audio.volume = v; if (v >= VOLUMEN) clearInterval(fadeIv); }, 120); }
function sonar(){
  audio.volume = 0; const pr = audio.play();
  if (pr && pr.then) pr.then(() => { marcar(true); fundir(); }).catch(() => marcar(false)); else marcar(!audio.paused);
}
mbtn.addEventListener('click', () => {
  if (audio.paused){ audio.volume = 0; const pr = audio.play(); if (pr && pr.then) pr.then(() => { marcar(true); fundir(); }).catch(() => marcar(false)); }
  else { clearInterval(fadeIv); audio.pause(); marcar(false); }
});
audio.addEventListener('error', () => marcar(false));

/* ───────────────────────── SCROLL: del prado al cielo nocturno ───────────────────────── */
let pendiente = false;
function medir(){
  pendiente = false;
  const y = scrollY, vh = innerHeight;
  const ini = campo.offsetTop + campo.offsetHeight * .42, fn = trans.offsetTop + trans.offsetHeight * .55;
  let p = clamp((y + vh * .5 - ini) / (fn - ini), 0, 1); p = p * p * (3 - 2 * p);
  root.style.setProperty('--p', p.toFixed(3)); fx.setP(p);
  campo.style.opacity = clamp((campo.getBoundingClientRect().bottom - vh * .15) / (vh * .85), 0, 1).toFixed(3);
  capas[0].style.transform = `translate3d(0,${(y * .14).toFixed(1)}px,0)`;
  capas[1].style.transform = `translate3d(0,${(y * .05).toFixed(1)}px,0)`;
  capas[2].style.transform = `translate3d(0,${(-y * .06).toFixed(1)}px,0)`;
  document.body.classList.toggle('scrolled', y > 80);
  if (TJ.abierta && TJ.modo === 'flotante') cerrarTarjeta();
}
addEventListener('scroll', () => { if (!pendiente){ pendiente = true; requestAnimationFrame(medir); } }, { passive: true });

/* Aparición de textos y estrellas al llegar a ellos */
const obs = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  if (en.target.id === 'transTexto') en.target.classList.add('visible');
  if (en.target.id === 'galeria') estrellasEl.forEach(s => s.classList.add('visible'));
}), { threshold: .2 });
obs.observe($('#transTexto')); obs.observe(galeria);

/* ───────────────────────── COMENZAR (tocar la semilla) ───────────────────────── */
async function comenzar(){
  const intro = $('#intro'), semilla = $('#semilla'), body = document.body;
  intro.classList.add('despierta'); semilla.classList.add('despierta');
  sonar();
  const r = semilla.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height * .62;
  fx.burst(cx, cy, 32);
  await sleep(700); fx.burst(cx, cy - 40, 28); fx.estrellitas(cx, cy, 22);
  await sleep(600); $('#destello').classList.add('dispara');
  await sleep(1150);
  body.classList.remove('intro'); fx.intro = false;
  pintarPraderaUnaVez();
  intro.classList.add('adios');
  body.classList.remove('bloqueado'); body.classList.add('florece');
  fx.lluvia(5); fx.burst(innerWidth / 2, innerHeight * .75, 44);
  await sleep(6000);
  body.classList.add('florecido');
  intro.remove(); const d = $('#destello'); if (d) d.remove();
}

/* ───────────────────────── ARRANQUE ───────────────────────── */
construirCampo(); construirEstrellas(); prepararCarta();
leerColores(); setTimeout(pintarFondos, 30);
medir();
$('#semilla').addEventListener('click', comenzar, { once: true });
let rsz;
addEventListener('resize', () => {
  clearTimeout(rsz);
  rsz = setTimeout(() => {    fx.resize();
    if (Math.abs(innerWidth - ultimoTam.w) > 40 || Math.abs(innerHeight - ultimoTam.h) > 140){
      praderaLista = false; praderaProgramada = false; pintarFondos();
    }
    if (matchMedia('(max-width:700px)').matches !== movilPrev) construirCampo();
    reponerLineas(); medir();
  }, 250);
});
