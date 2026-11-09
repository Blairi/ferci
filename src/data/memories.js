import { asset } from '../utils/asset';

export const memories = [
  {
    id: 1,
    src: asset('/images/memories/recuerdo-01.jpeg'),
    date: 'El primer café',
    description:
      'Hablamos durante horas y el café se enfrió. No me importó ni un poco.',
    alt: 'Recuerdo: el primer café juntos',
    orientation: 'portrait',
  },
  {
    id: 2,
    src: asset('/images/memories/recuerdo-02.jpeg'),
    date: 'Aquella tarde',
    description: 'La luz caía de una manera que parecía puesta a propósito.',
    alt: 'Recuerdo: una tarde juntos',
    orientation: 'portrait',
  },
  {
    id: 3,
    src: asset('/images/memories/recuerdo-03.jpeg'),
    date: 'Risas sin motivo',
    description: 'De esas que empiezan sin razón y no se pueden parar.',
    alt: 'Recuerdo: riendo juntos',
    orientation: 'landscape',
  },
  {
    id: 4,
    src: asset('/images/memories/recuerdo-04.jpeg'),
    date: 'El paseo largo',
    description:
      'Caminamos sin rumbo y, sin darnos cuenta, hicimos un plan para siempre.',
    alt: 'Recuerdo: un paseo largo',
    orientation: 'portrait',
  },
  {
    id: 5,
    src: asset('/images/memories/recuerdo-05.png'),
    date: 'Un instante cualquiera',
    description: 'Nada especial. Solo tú, yo y las ganas de quedarnos.',
    alt: 'Recuerdo: un instante cualquiera',
    orientation: 'portrait',
  },
];

export default memories;
