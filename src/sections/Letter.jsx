import { motion, useReducedMotion } from 'framer-motion';
import { config } from '../data/config';
import { AnimatedSection } from '../components/AnimatedSection';

export function Letter() {
  const prefersReducedMotion = useReducedMotion();
  const { letter } = config;
  const initial = config.person.nickname?.charAt(0) ?? 'F';

  return (
    <AnimatedSection
      id="carta"
      className="bg-cream-deep px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <header className="text-center">
          <p className="eyebrow">{letter.eyebrow}</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.12] text-ink sm:text-5xl">
            {letter.title}
          </h2>
        </header>

        <motion.article
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-12 max-w-3xl border border-beige/90 bg-white/45 px-6 py-12 sm:mt-16 sm:px-14 sm:py-16"
        >
          <span
            className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-rose/70"
            aria-hidden="true"
          />

          <p className="font-serif text-2xl font-light italic text-ink">
            {letter.greeting}
          </p>

          <div className="mt-6 space-y-6">
            {letter.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.9,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-pretty font-serif text-lg leading-relaxed text-ink/80 sm:text-xl sm:leading-[1.75]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-serif text-lg italic text-ink/70">
                {letter.closing}
              </p>
              <p className="mt-3 font-script text-3xl text-ink sm:text-4xl">
                {letter.signature}
              </p>
            </div>
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full border border-rose/60 font-serif text-xl italic text-rose"
              aria-hidden="true"
            >
              {initial}
            </span>
          </div>
        </motion.article>
      </div>
    </AnimatedSection>
  );
}
