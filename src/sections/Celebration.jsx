import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, Flower } from 'lucide-react';
import { config } from '../data/config';
import { AnimatedSection } from '../components/AnimatedSection';
import { scrollToSection } from '../utils/scroll';

export function Celebration({ accepted }) {
  const prefersReducedMotion = useReducedMotion();
  const { celebration } = config;
  const showPhoto = accepted && Boolean(celebration.photo);

  return (
    <AnimatedSection
      id="final"
      amount={0.15}
      className="bg-cream-deep px-6 pb-16 pt-24 sm:pt-32"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={`grid items-center gap-12 ${
            showPhoto
              ? 'lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'
              : 'mx-auto max-w-2xl'
          }`}
        >
          <div className={showPhoto ? 'text-center lg:text-left' : 'text-center'}>
            <p className="eyebrow">{celebration.eyebrow}</p>
            {accepted && (
              <p className="mt-5 font-script text-3xl text-rose">
                {celebration.acceptedLabel}
              </p>
            )}
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              {celebration.title}
            </h2>
            <p
              className={`mx-auto mt-6 max-w-md text-pretty font-serif text-xl italic leading-relaxed text-ink/75 ${
                showPhoto ? 'lg:mx-0' : ''
              }`}
            >
              {celebration.message}
            </p>
            <span
              className={`my-8 flex items-center gap-4 ${
                showPhoto ? 'mx-auto lg:mx-0' : 'mx-auto'
              }`}
              aria-hidden="true"
            >
              <span className="h-px w-14 bg-rose/70" />
              <Flower className="h-3.5 w-3.5 text-rose" strokeWidth={1.2} />
            </span>
            <p className="font-script text-3xl text-muted sm:text-4xl">
              {celebration.phrase}
            </p>
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              {celebration.signature}
            </p>
          </div>

          {showPhoto && (
            <motion.figure
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto w-full max-w-xs rotate-[-2deg] bg-white p-3 shadow-[0_18px_45px_-30px_rgba(37,37,37,0.6)] sm:max-w-sm"
            >
              <div className="aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={celebration.photo}
                  alt={celebration.photoAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="pt-3 text-center font-script text-xl text-muted">
                {celebration.phrase}
              </figcaption>
            </motion.figure>
          )}
        </div>

        <footer className="mt-20 border-t border-beige pt-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-[0.6rem] uppercase tracking-[0.22em] text-muted">
              Nuestra historia · {new Date().getFullYear()}
            </p>
            <button
              type="button"
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.4} />
              Volver al inicio
            </button>
          </div>
        </footer>
      </div>
    </AnimatedSection>
  );
}
