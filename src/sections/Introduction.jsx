import { motion, useReducedMotion } from 'framer-motion';
import { config } from '../data/config';
import { AnimatedSection } from '../components/AnimatedSection';

export function Introduction() {
  const prefersReducedMotion = useReducedMotion();
  const { introduction } = config;

  return (
    <AnimatedSection id="introduccion" className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">{introduction.eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance font-serif text-4xl font-light leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
          {introduction.title}
        </h2>
        <span
          className="mx-auto mt-10 block h-px w-16 bg-rose/70"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto mt-12 max-w-prose space-y-7 sm:mt-16">
        {introduction.paragraphs.map((paragraph, index) => (
          <motion.p
            key={paragraph.slice(0, 24)}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.9,
              delay: prefersReducedMotion ? 0 : index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`text-pretty font-serif text-xl leading-relaxed text-ink/80 sm:text-[1.4rem] ${
              index === 0
                ? 'first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.75] first-letter:text-ink'
                : ''
            }`}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <motion.blockquote
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1.2 }}
        className="mx-auto mt-16 max-w-xl text-center"
      >
        <p className="font-script text-3xl leading-snug text-rose sm:text-4xl">
          “{introduction.highlight}”
        </p>
      </motion.blockquote>
    </AnimatedSection>
  );
}
