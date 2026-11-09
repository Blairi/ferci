import { asset } from '../utils/asset';

export const config = {
  person: {
    name: 'Fernanda',
    nickname: 'Fercita',
  },

  meta: {
    title: 'Para Fercita — Quiero escribir nuestra historia contigo',
  },

  nav: {
    brand: 'Nuestra historia',
    links: [
      { id: 'inicio', label: 'Inicio' },
      { id: 'introduccion', label: 'Nosotros' },
      { id: 'recuerdos', label: 'Recuerdos' },
      { id: 'musica', label: 'Nuestra música' },
      { id: 'carta', label: 'Lo que siento' },
      { id: 'pregunta', label: 'Una pregunta' },
      { id: 'final', label: 'El comienzo' },
    ],
  },

  hero: {
    eyebrow: 'Para mi Fercita',
    title: 'Ya no quiero imaginar nuestra historia. Quiero escribirla contigo.',
    subtitle: 'Hay algo que llevo tiempo queriendo decirte.',
    cta: 'Comenzar a leer',
    scrollHint: 'Desliza, bonita...',
  },

  introduction: {
    eyebrow: 'Capítulo uno',
    title: 'Qué bonito ha sido coincidir contigo.',
    paragraphs: [
      'No sé exactamente en qué momento comenzaste a convertirte en alguien tan especial para mí. Quizá fue entre nuestras conversaciones, nuestras bromas, las ganas de volver a vernos o todas esas veces en las que terminamos diciéndonos cuánto nos gustamos. Lo que sí sé es que conocerte ha sido una de las cosas más bonitas que me han pasado.',
      'Me encanta tu forma de ser, tu manera de hacerme sonreír, tus ocurrencias y hasta esos pequeños detalles que te hacen ser tú. Me gusta escucharte, verte feliz, abrazarte y descubrir cada día un poquito más de ti. Y si algo tengo claro, es que todavía me quedan muchísimas cosas que quiero conocer de mi niña bonita.',
    ],
    highlight: 'Qué suerte la mía de haber coincidido contigo. Y qué ganas de seguir haciéndolo.',
  },

  memories: {
    eyebrow: 'Capítulo dos',
    title: 'Momentos que quisiera guardar para siempre.',
    subtitle: 'Pequeños pedacitos de nosotros que hacen que todo valga la pena.',
    password: 'calabacita',
    lock: {
      title: 'Un pequeño secreto...',
      subtitle:
        'Aquí guardé algunos pedacitos de nuestra historia. Son recuerdos que me gustaría conservar con mucho cariño.',
      placeholder: 'Escribe la contraseña',
      submit: 'Descubrir nuestros recuerdos',
      showPassword: 'Mostrar contraseña',
      hidePassword: 'Ocultar contraseña',
      wrong: 'Mmm... esa no es, bonita. Inténtalo otra vez.',
      hint: 'Pista: piensa en algo naranjita',
      sessionNote:
        'Esta contraseña es una pequeña sorpresa visual.',
    },
    unlocked: 'Nuestros recuerdos',
    lockAgain: 'Cerrar nuestros recuerdos',
  },

  playlist: {
    eyebrow: 'Capítulo tres',
    title: 'Canciones que tienen un poquito de nosotros.',
    subtitle:
      'Un poco de nuestras canciones, puse mis favoritas y que me recuerdan más a ti.',
  },

  letter: {
    eyebrow: 'Capítulo cuatro',
    title: 'Lo que llevo tiempo queriendo decirte.',
    greeting: 'Mi querida Fercita,',

    paragraphs: [
      'Quiero que sepas que te quiero muchísimo. Me encantas, bonita. Me encanta tu personalidad, tu manera de ser, tus ocurrencias, tus virtudes y hasta esas pequeñas imperfecciones que también forman parte de ti. Me gusta todo lo que conozco de ti y me emociona pensar en todas las cosas que todavía me faltan por descubrir. Quiero seguir conociéndote, escucharte, hacerte reír, abrazarte y llenarte de besitos cada vez que tenga la oportunidad.',

      'Hay algo que he pensado mucho últimamente: durante bastante tiempo estuve esperando encontrar el momento perfecto para preguntarte si querías ser mi novia. Quería que fuera un momento especial, uno que pudiera recordar y que estuviera a la altura de lo que siento por ti. Pero creo que estaba olvidando algo muy importante: cualquier momento a tu lado puede ser especial. No quiero seguir esperando el momento perfecto mientras dejo pasar la oportunidad de vivir algo bonito contigo.',

      'También quiero que sepas que no espero que lo nuestro sea perfecto. No quiero una relación en la que nunca nos equivoquemos, sino una en la que podamos aprender, escucharnos, comprendernos y crecer juntos. Quiero compartir contigo los planes espontáneos, las salidas, las canciones, los abrazos que parecen no terminar y hasta esos días en los que simplemente queramos estar juntitos sin hacer demasiado.',

      'Me hace mucha ilusión pensar en nosotros, en poder tomarte de la mano sin tener que llamarnos solamente amigos, en besarte cuando me nazca hacerlo y en que podamos decir con toda tranquilidad que estamos juntos. Quiero que seas tú, Fercita. No porque crea que todo será perfecto, sino porque eres la persona con la que quiero intentarlo.',

      'Así que ya no quiero quedarme imaginando cómo sería tenerte como mi novia. Quiero dejar de imaginar nuestra historia y empezar a escribirla contigo. Quiero elegirte, cuidarte, hacerte feliz y dar lo mejor de mí para construir algo muy bonito a tu lado.',
    ],

    closing: 'Con todo el cariño que te tengo,',
    signature: 'Para mi niña bonita.',
  },

  proposal: {
    eyebrow: 'Capítulo cinco',
    intro:
      'Y después de tantas palabras, tantos momentos y tantas ganas de compartir más contigo, quiero preguntarte algo que para mí significa muchísimo...',
    question: 'Fercita, ¿quieres ser mi novia?',
    yes: 'Sí, quiero ❤️',
    think: 'Quiero pensarlo',

    yesMessage: '¡Entonces comencemos a escribir nuestra historia!',
    yesDetail:
      'No sé qué nos espera en cada página, pero me hace inmensamente feliz pensar que podremos descubrirlo juntos. Te quiero muchísimo, bonita.',
    yesContinue: 'Seguir leyendo',

    laterMessage:
      'Está bien, mi niña. No tienes que responder por compromiso ni apresurarte. Quería que supieras lo mucho que significas para mí.',
    laterDetail: 'Lo que siento por ti es sincero, y quiero que estés tranquila.',
    laterButton: 'Volver a la pregunta',
  },

  celebration: {
    eyebrow: 'Nuestro comienzo',
    acceptedLabel: 'Dijiste que sí. ❤️',
    title: 'Qué bonito que ahora podamos llamarnos nosotros.',
    message:
      'Gracias por elegirme y por darme la oportunidad de construir algo bonito contigo. Prometo poner mucho amor, cariño y dedicación en esta historia.',
    phrase: 'Ya no tenemos que imaginarlo. Ahora podemos vivirlo.',
    signature: 'Con muchísimo amor, para ti.',
    photo: asset('/images/memories/foto-final.jpeg'),
    photoAlt: 'Un pequeño recuerdo de nuestra historia',
  },
};

export default config;    