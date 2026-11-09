# OUR STORY — Una historia que quiero seguir escribiendo contigo

## 1. ROL Y OBJETIVO

Actúa como un desarrollador frontend senior, arquitecto de software y diseñador UI/UX especializado en experiencias web interactivas, minimalistas, elegantes y emocionales.

Quiero desarrollar una página web romántica para preguntarle a una persona especial si quiere ser mi novia.

No quiero una landing page comercial ni una típica página de San Valentín. Quiero crear una experiencia digital íntima, personal y memorable, que se sienta como una historia que ella va descubriendo mientras hace scroll.

El concepto central es:

"Una historia que quiero seguir escribiendo contigo."

La experiencia debe transmitir cariño, nostalgia, elegancia, sinceridad y romanticismo.

El resultado debe parecer una página diseñada especialmente para una persona, no una plantilla genérica.

## 2. STACK TECNOLÓGICO

Utiliza:

- React.
- JavaScript.
- Tailwind CSS.
- Framer Motion para animaciones.
- Lucide React para iconografía.
- Vite como herramienta de desarrollo.

No utilizar:
- Backend.
- Bases de datos.
- Autenticación externa.
- APIs innecesarias.
- Servicios de pago.

Todo debe funcionar como una aplicación frontend y poder desplegarse como sitio estático.

Utiliza componentes reutilizables y una arquitectura limpia.

## 3. IDENTIDAD VISUAL Y DISEÑO

### Concepto

Minimalismo romántico, editorial y elegante.

Inspiración:
- Revistas editoriales de lujo.
- Diarios personales.
- Cartas manuscritas.
- Fotografía analógica.
- Diseño web minimalista.
- Álbumes fotográficos contemporáneos.

### Paleta de colores

- Fondo principal: #F8F6F2.
- Fondo secundario: #F1ECE5.
- Blanco: #FFFFFF.
- Negro suave: #252525.
- Gris secundario: #85817B.
- Rosa empolvado: #D8B7B2.
- Beige: #EAE3DA.

### Tipografía

Combinar:
- Una tipografía serif elegante para títulos.
- Una sans-serif moderna para párrafos.
- Una tipografía manuscrita discreta para frases especiales.

Puedes utilizar Google Fonts, por ejemplo Cormorant Garamond, DM Sans y Caveat.

### Principios visuales

- Mucho espacio en blanco.
- Márgenes amplios.
- Composiciones asimétricas.
- Fotografías protagonistas.
- Separadores finos.
- Textos breves y elegantes.
- Animaciones lentas y suaves.
- Jerarquía visual clara.
- Diseño responsive.

Evitar:
- Corazones excesivos.
- Degradados saturados.
- Colores demasiado brillantes.
- Sombras exageradas.
- Animaciones infantiles.
- Efectos visuales innecesarios.

## 4. ESTRUCTURA GENERAL

La página debe ser una historia vertical dividida en siete secciones.

Todas las secciones deben estar dentro de una misma página y conectarse mediante scroll suave.

Implementar:
- Navegación fluida.
- Indicador de progreso de lectura.
- Animaciones al entrar en viewport.
- Transiciones sutiles.
- Diseño adaptado a dispositivos móviles.

### SECCIÓN 01 — HERO / PORTADA

Crear una portada a pantalla completa.

Composición:
- Fondo crema.
- Título central.
- Subtítulo pequeño.
- Un elemento gráfico discreto, como una flor, una línea o una pequeña fotografía.
- Indicador de scroll.

Texto principal:

"Una historia que quiero seguir escribiendo contigo."

Texto secundario:

"Preparé algo para ti."

Botón:

"Comenzar a leer"

Al pulsar:
- Desplazarse suavemente a la siguiente sección.
- Activar la música instrumental si el navegador lo permite.
- Ejecutar una transición visual elegante.

### SECCIÓN 02 — INTRODUCCIÓN

Título:

"Todo comienza con algo pequeño."

Crear una composición editorial con texto y espacio negativo.

Incluir un texto personalizable que hable sobre lo especial que es esa persona.

El texto debe:
- Aparecer progresivamente.
- Tener una tipografía serif.
- Estar centrado o alineado de forma editorial.
- Ser fácil de modificar desde un archivo de configuración.

Agregar una pequeña frase destacada.

### SECCIÓN 03 — NUESTROS RECUERDOS

Esta sección contiene fotografías personales de ambos.

Título:

"Pequeños momentos, grandes recuerdos."

Diseño:
- Galería fotográfica tipo editorial.
- Fotografías de diferentes tamaños.
- Distribución asimétrica.
- Algunas imágenes pueden tener fechas y descripciones.
- Efecto hover de zoom sutil.
- Transiciones suaves.

Al seleccionar una fotografía:
- Abrir un modal o lightbox.
- Mostrar la imagen ampliada.
- Mostrar una descripción opcional.
- Permitir avanzar y retroceder entre fotografías.
- Permitir cerrar con botón, Escape o clic fuera de la imagen.

#### Protección mediante contraseña

Antes de mostrar la galería, presentar una pantalla de acceso.

Texto:

"Un pequeño secreto..."

Subtítulo:

"Hay algunos recuerdos que quiero guardar especialmente para nosotros."

Campo:
- Input de contraseña.
- Botón para revelar u ocultar contraseña.
- Botón para desbloquear.

Comportamiento:
- La contraseña debe estar configurada en config.js.
- Si es incorrecta, mostrar un mensaje elegante.
- Si es correcta, revelar la galería.
- Mantener el acceso durante la sesión utilizando sessionStorage.
- Incluir opción para volver a bloquear la galería.

IMPORTANTE:
Esta contraseña es una barrera visual, no una protección de seguridad real. No afirmar que protege los archivos de imágenes frente a accesos directos o inspección del código.

No implementar seguridad falsa ni ocultar esta limitación.

### SECCIÓN 04 — NUESTRA BANDA SONORA

Esta sección debe ser una galería visual de las canciones de una playlist especial de Spotify.

Título:

"Hay canciones que me recuerdan a ti."

Subtítulo:

"Cada canción guarda un pequeño recuerdo."

IMPORTANTE:
NO integrar Spotify Player.
NO reproducir canciones.
NO utilizar iframes de Spotify.
NO implementar controles de reproducción.
NO requerir autenticación de Spotify.

El propósito es exclusivamente mostrar las portadas de las canciones.

#### Diseño de la galería

- Cuadrícula responsive.
- Portadas cuadradas con proporción 1:1.
- Distribución elegante y equilibrada.
- Fondo crema.
- Bordes sutiles.
- Espaciado amplio.
- Efectos hover discretos.
- Animaciones de aparición al hacer scroll.

Cada tarjeta debe incluir:
- Portada del álbum.
- Nombre de la canción.
- Nombre del artista.

Al pulsar una tarjeta:
- Abrir modal elegante.
- Mostrar la portada en mayor tamaño.
- Mostrar nombre de canción y artista.
- Mostrar una pequeña nota personal opcional.

Ejemplos de notas:
"Esta canción me recuerda a ti."
"Hay algo en esta melodía que me hace pensar en nosotros."

#### Datos de las canciones

Crear un archivo independiente llamado playlist.js.

Cada elemento debe tener esta estructura:

{
  id: 1,
  title: "Nombre de la canción",
  artist: "Nombre del artista",
  cover: "/images/playlist/cancion-01.jpg",
  note: "Una pequeña descripción personal."
}

Permitir agregar, eliminar y reorganizar canciones fácilmente.

Guardar las portadas localmente en:

public/images/playlist/

No utilizar imágenes aleatorias como portadas definitivas.

Si todavía no hay imágenes disponibles, utilizar placeholders elegantes que indiquen dónde agregar las portadas reales.

### SECCIÓN 05 — LA CARTA

Título:

"Hay algo que quiero decirte."

Crear una carta digital con una composición visual especial.

Diseño:
- Fondo secundario ligeramente diferente.
- Tipografía serif elegante.
- Texto legible.
- Ancho máximo controlado.
- Márgenes amplios.
- Animación progresiva al aparecer.

La carta debe transmitir:
- Cariño.
- Sinceridad.
- Ilusión por construir una relación.
- Vulnerabilidad.
- Deseo de compartir momentos juntos.

No utilizar frases genéricas ni exageradamente cursis.

El texto debe ser completamente personalizable desde config.js.

Dejar un espacio para una despedida y una firma.

### SECCIÓN 06 — LA PREGUNTA

Esta es la sección emocionalmente más importante.

Debe sentirse como el momento culminante de toda la experiencia.

Diseño:
- Pantalla a altura completa.
- Fondo claro.
- Mucho espacio negativo.
- Tipografía protagonista.
- Animaciones suaves.
- Ningún elemento que distraiga.

Texto introductorio:

"Después de todos estos momentos, hay algo que quiero preguntarte..."

Pregunta principal:

"¿Quieres ser mi novia?"

Botones:

"Sí, quiero ❤️"

"Quiero pensarlo"

#### Si pulsa "Sí, quiero"

- Mostrar una celebración elegante.
- Animar pequeños corazones, pétalos o partículas.
- Ejecutar una transición hacia la sección final.
- Mostrar un mensaje personalizable.

Mensaje:

"Entonces, este es el comienzo de algo bonito."

Agregar una pequeña frase adicional configurable.

#### Si pulsa "Quiero pensarlo"

Mostrar un mensaje respetuoso:

"No tienes que responder ahora. Lo importante es que sepas lo que siento por ti."

No implementar botones engañosos ni mecanismos que dificulten rechazar la propuesta.

### SECCIÓN 07 — FINAL

Crear una última pantalla emotiva.

Contenido:
- Una fotografía opcional.
- Una frase final.
- Un pequeño elemento gráfico.
- Una despedida personalizada.

Texto sugerido:

"Gracias por ser parte de esta historia."

La sección debe sentirse como el cierre de una carta, no como una página comercial.

## 5. REPRODUCTOR GLOBAL DE BOLERO INSTRUMENTAL

Crear un reproductor de música flotante que permanezca disponible durante todo el recorrido.

IMPORTANTE:
Este reproductor es independiente de la galería de Spotify.

Utilizar un archivo MP3 local con un bolero instrumental romántico, sin voz ni letra.

Ubicación:
- Esquina inferior derecha.
- Discreto.
- Responsive.
- Sin cubrir botones ni contenido.

Características:
- Reproducir y pausar.
- Volumen configurable.
- Reproducción en bucle.
- Indicador visual del estado.
- Icono de disco de vinilo que gira lentamente mientras suena.
- Animación suave.
- Estado compartido entre todas las secciones.

Utilizar el elemento HTML Audio.

Ruta del archivo:

public/audio/bolero-instrumental.mp3

El audio debe comenzar después de una interacción explícita del usuario, por ejemplo al pulsar "Comenzar a leer".

No intentar forzar autoplay con sonido.

Si no existe el archivo de audio, mostrar el reproductor deshabilitado de manera elegante, sin errores.

No incluir música protegida por derechos de autor sin autorización.

## 6. NAVEGACIÓN Y EXPERIENCIA

La navegación debe ser intuitiva.

Implementar:
- Scroll suave.
- Barra de progreso de lectura.
- Indicador de sección actual.
- Navegación discreta.
- Transiciones al cambiar de sección.
- Adaptación para móvil.

La experiencia debe poder recorrerse completamente sin necesidad de utilizar el menú.

## 7. ANIMACIONES

Utilizar Framer Motion.

Implementar:
- Fade in.
- Slide up.
- Reveal de textos.
- Animaciones de fotografías.
- Transiciones entre secciones.
- Apertura de modales.
- Animación del vinilo.
- Celebración final.

Las animaciones deben ser sutiles y no afectar el rendimiento.

Respetar prefers-reduced-motion.

## 8. RESPONSIVE DESIGN

Prioridad absoluta a la experiencia móvil.

En móviles:
- Títulos bien escalados.
- Galerías adaptadas a una o dos columnas.
- Botones grandes y accesibles.
- Fotografías sin deformaciones.
- Modales adaptados a pantalla.
- Reproductor de música compacto.
- Sin scroll horizontal.

En desktop:
- Aprovechar el espacio horizontal.
- Mantener composiciones editoriales.
- Utilizar fotografías grandes.
- Mantener una jerarquía visual elegante.

## 9. ARQUITECTURA DEL PROYECTO

Organizar el proyecto de esta manera:

src/
  components/
    Navbar.jsx
    MusicPlayer.jsx
    ScrollProgress.jsx
    SectionDivider.jsx
    PasswordGate.jsx
    PhotoGallery.jsx
    PhotoLightbox.jsx
    SongCard.jsx
    SongModal.jsx
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
    useAudio.js
    useScrollProgress.js

  App.jsx
  main.jsx
  index.css

public/
  images/
    memories/
    playlist/
  audio/
    bolero-instrumental.mp3

## 10. PERSONALIZACIÓN

Crear config.js para centralizar los contenidos.

Debe permitir modificar:
- Nombre o apodo de la persona.
- Textos de todas las secciones.
- Carta personal.
- Contraseña de demostración.
- Mensaje final.
- Firma.
- Configuración del reproductor.

Crear memories.js para almacenar:
- Imagen.
- Fecha.
- Descripción.
- Texto alternativo.

Crear playlist.js para almacenar:
- Nombre de la canción.
- Artista.
- Portada.
- Nota personal.

No escribir los contenidos directamente en los componentes.

## 11. CALIDAD DEL CÓDIGO

- Código limpio y mantenible.
- Componentes independientes.
- Buenas prácticas de React.
- Evitar componentes excesivamente grandes.
- No duplicar código.
- Manejo correcto de estados.
- Manejo de errores del reproductor.
- Lazy loading de fotografías.
- Optimización de imágenes.
- Accesibilidad mediante etiquetas semánticas.
- Navegación por teclado.
- Estados de carga y error cuando sean necesarios.

## 12. ENTREGABLES

Quiero que desarrolles el proyecto completo y funcional.

Entregar:

1. Proyecto React.
2. Todos los componentes.
3. Todas las secciones.
4. Diseño responsive.
5. Animaciones.
6. Galería fotográfica.
7. Acceso visual mediante contraseña.
8. Galería de portadas musicales.
9. Reproductor global de bolero instrumental.
10. Carta personalizable.
11. Pregunta final interactiva.
12. Pantalla de celebración.
13. README con instrucciones de instalación, ejecución, personalización y despliegue.

No inventar fotografías personales ni portadas musicales reales.

Utilizar placeholders visuales hasta que se proporcionen los archivos definitivos.

## 13. ORDEN DE IMPLEMENTACIÓN

Trabaja en este orden:

FASE 1:
Configurar Vite, React, Tailwind CSS y dependencias.

FASE 2:
Crear la identidad visual, tipografías, colores y componentes compartidos.

FASE 3:
Implementar las siete secciones y la navegación por scroll.

FASE 4:
Implementar galería fotográfica y pantalla de contraseña.

FASE 5:
Implementar la galería de portadas musicales.

FASE 6:
Implementar el reproductor de bolero instrumental.

FASE 7:
Implementar la carta, pregunta y celebración final.

FASE 8:
Optimizar responsive, accesibilidad, animaciones y rendimiento.

FASE 9:
Verificar que todo funcione y documentar el proyecto.

No te limites a mostrar una propuesta visual o un prototipo estático. Quiero código funcional.

Antes de finalizar, comprueba que no existan errores de compilación, rutas rotas ni componentes sin implementar.

El resultado debe ser una experiencia romántica, minimalista, elegante y profundamente personal.