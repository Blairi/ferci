import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Flower } from 'lucide-react';
import { config } from '../data/config';
import { scrollToSection } from '../utils/scroll';

function Botanical({ mirrored = false }) {
  return (
    <svg
      viewBox="0 0 120 260"
      fill="none"
      aria-hidden="true"
      className={`h-48 w-auto text-rose/60 sm:h-64 ${
        mirrored ? 'scale-x-[-1]' : ''
      }`}
    >
      <path
        d="M60 258C60 190 58 120 62 8"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M61 70c-22-4-34-18-36-38 22 2 34 18 36 38Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M61 118c22-4 34-18 36-38-22 2-34 18-36 38Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M61 166c-20-3-32-16-34-35 21 2 32 16 34 35Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M61 208c20-3 32-16 34-35-21 2-32 16-34 35Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="62" cy="8" r="4" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const handleStart = () => {
    scrollToSection('introduccion');
  };

  const fade = (delay) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 1,
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-28 pt-28"
    >
      <div className="pointer-events-none absolute bottom-10 left-4 opacity-50 sm:left-10 sm:opacity-70">
        <Botanical />
      </div>
      <div className="pointer-events-none absolute right-4 top-16 opacity-40 sm:right-10 sm:top-24 sm:opacity-60">
        <Botanical mirrored />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          {...fade(0.1)}
          className="flex items-center gap-4 text-[0.62rem] uppercase tracking-widest text-muted"
        >
          <span className="h-px w-8 bg-rose" aria-hidden="true" />
          {config.hero.eyebrow}
          <span className="h-px w-8 bg-rose" aria-hidden="true" />
        </motion.p>

        <motion.h1
          {...fade(0.25)}
          className="mt-8 text-balance font-serif text-5xl font-light leading-[1.06] text-ink sm:text-6xl lg:text-[5.5rem]"
        >
          {config.hero.title}
        </motion.h1>

        <motion.p
          {...fade(0.45)}
          className="mt-7 font-script text-3xl text-muted sm:text-4xl"
        >
          {config.hero.subtitle}
        </motion.p>

        <motion.div {...fade(0.6)} className="mt-12">
          <button type="button" onClick={handleStart} className="btn-primary">
            <Flower className="h-3.5 w-3.5" strokeWidth={1.4} />
            {config.hero.cta}
          </button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('introduccion')}
        {...fade(0.9)}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink"
        aria-label={config.hero.scrollHint}
      >
        <span className="text-[0.58rem] uppercase tracking-[0.28em]">
          {config.hero.scrollHint}
        </span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { repeat: Infinity, duration: 2.4, ease: 'easeInOut' }
          }
        >
          <ArrowDown className="h-4 w-4" strokeWidth={1.2} />
        </motion.span>
      </motion.button>
    </section>
  );
}
