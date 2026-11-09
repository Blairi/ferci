import { motion, useReducedMotion } from 'framer-motion';
import { config } from '../data/config';
import { playlist } from '../data/playlist';
import { AnimatedSection } from '../components/AnimatedSection';
import { SongCard } from '../components/SongCard';

export function Music() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="musica" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{config.playlist.eyebrow}</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
            {config.playlist.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty font-serif text-lg italic text-muted">
            {config.playlist.subtitle}
          </p>
        </header>

        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-7 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-14">
          {playlist.map((song, index) => (
            <motion.div
              key={song.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SongCard song={song} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
