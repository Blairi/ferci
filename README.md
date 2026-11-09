# OUR STORY

> Una historia que quiero seguir escribiendo contigo.

Experiencia web romántica, minimalista y editorial construida con React, Vite, Tailwind CSS, Framer Motion y Lucide React. Es una única página con siete secciones conectadas por scroll suave, galería fotográfica privada, galería de portadas musicales, carta personal y pregunta final.

Todo es frontend: no hay backend, base de datos ni autenticación. Se puede desplegar como sitio estático.

La sección final «Nuestro comienzo» y su enlace de navegación aparecen únicamente después de pulsar «Sí, quiero».

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

### Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la build de producción |
| `npm run lint` | Ejecuta ESLint |

## Contraseña de demostración

La galería de recuerdos está detrás de una barrera visual:

```text
calabacita
```

Se configura en `src/data/config.js` dentro de `memories.password`. El desbloqueo se recuerda durante la sesión con `sessionStorage` y se puede volver a bloquear desde la propia galería.

> **Importante:** esta contraseña es una barrera visual, no una protección de seguridad real. Las imágenes se sirven como archivos estáticos y cualquiera con la URL directa o acceso al código puede verlas. No se debe usar para información sensible.

## Personalización

### `src/data/config.js`

Centraliza todos los textos y ajustes:

- `person`: nombre y apodo de la persona.
- `meta`: título del documento.
- `nav`: enlaces y etiquetas de navegación.
- `hero`: portada, subtítulo y botón.
- `introduction`: título, párrafos y frase destacada.
- `memories`: título, subtítulo, contraseña y textos de la pantalla de acceso.
- `playlist`: título y subtítulo de la sección musical.
- `letter`: saludo, párrafos, despedida y firma.
- `proposal`: textos de la pregunta, botones y respuestas.
- `celebration`: mensaje y firma final.

### `src/data/memories.js`

Cada recuerdo tiene esta forma:

```js
{
  id: 1,
  src: '/images/memories/recuerdo-01.svg',
  date: 'El primer café',
  description: 'Una frase breve sobre ese momento.',
  alt: 'Texto alternativo accesible',
  orientation: 'portrait' // 'portrait' | 'landscape' | 'square'
}
```

Para usar fotos reales, guárdalas en `public/images/memories/` y actualiza `src`. Se recomienda JPG/WebP optimizado (por ejemplo, 1600 px de ancho máximo). Los archivos actuales son placeholders SVG elegantes.

### `src/data/playlist.js`

Cada canción tiene esta forma:

```js
{
  id: 1,
  title: 'Nombre de la canción',
  artist: 'Nombre del artista',
  cover: '/images/playlist/1.jpeg'
}
```

Guarda las portadas en `public/images/playlist/` y actualiza `cover`. También puedes agregar, quitar o reordenar elementos del array.

**La sección musical es solo visual:** no integra Spotify Player, no reproduce canciones, no usa iframes ni requiere autenticación. Solo muestra portadas, títulos y artistas.

## Estructura del proyecto

```text
src/
  components/
    Navbar.jsx
    ScrollProgress.jsx
    SectionDivider.jsx
    PasswordGate.jsx
    PhotoGallery.jsx
    PhotoLightbox.jsx
    SongCard.jsx
    AnimatedSection.jsx
  sections/
    Hero.jsx
    Introduction.jsx
    Memories.jsx
    Music.jsx
    Letter.jsx
    Proposal.jsx
    Celebration.jsx
  data/
    config.js
    memories.js
    playlist.js
  hooks/
    useScrollProgress.js
    useActiveSection.js
  utils/
    asset.js
    scroll.js
  App.jsx
  main.jsx
  index.css
public/
  images/
    memories/
    playlist/
```

## Despliegue

```bash
npm run build
```

Sube el contenido de `dist/` a cualquier hosting estático: Netlify, Vercel, Cloudflare Pages, GitHub Pages o un servidor propio. Vite está configurado con `base: './'` para que los recursos funcionen también en subdirectorios.

No se necesita configuración especial de rutas: es una sola página.

## Accesibilidad y movimiento

- Etiquetas semánticas, navegación por teclado y foco visible.
- Modales con cierre por `Escape`, clic fuera y botón.
- Flechas izquierda/derecha para navegar recuerdos.
- `prefers-reduced-motion` respetado en animaciones de scroll y pétalos.
- Imágenes con `loading="lazy"` y texto alternativo editable.
- Botones y campos con tamaños táctiles adecuados.

## Créditos de fuentes

Google Fonts: Cormorant Garamond, DM Sans y Caveat.
