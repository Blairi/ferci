import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { config } from '../data/config';
import { AnimatedSection } from '../components/AnimatedSection';
import { scrollToSection } from '../utils/scroll';

function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 7,
        size: 5 + Math.random() * 9,
        drift: (Math.random() - 0.5) * 120,
        rotate: Math.random() * 360,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-0 block bg-rose/50"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 1.4,
            borderRadius: '100% 0 100% 0',
          }}
          initial={{ y: '-10vh', opacity: 0, rotate: petal.rotate }}
          animate={{
            y: '105vh',
            x: [0, petal.drift, petal.drift * 0.4],
            opacity: [0, 0.8, 0.8, 0],
            rotate: petal.rotate + 260,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

export function Proposal({ accepted, onAccept }) {
  const prefersReducedMotion = useReducedMotion();
  const [decision, setDecision] = useState('idle');
  const { proposal } = config;

  useEffect(() => {
    if (decision !== 'yes') return undefined;

    const timer = window.setTimeout(() => {
      scrollToSection('final');
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [decision]);

  const handleYes = () => {
    setDecision('yes');
    onAccept?.();
  };

  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.5 };

  return (
    <AnimatedSection
      id="pregunta"
      amount={0.2}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24"
    >
      {decision === 'yes' && !prefersReducedMotion && <Petals />}

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="eyebrow">{proposal.eyebrow}</p>
        <p className="mx-auto mt-7 max-w-xl text-pretty font-serif text-xl italic leading-relaxed text-muted sm:text-2xl">
          {proposal.intro}
        </p>
        <h2 className="mx-auto mt-8 max-w-2xl text-balance font-serif text-5xl font-light leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
          {proposal.question}
        </h2>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {decision === 'idle' && (
              <motion.div
                key="buttons"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={transition}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={handleYes}
                  className="btn-primary min-w-48"
                >
                  {proposal.yes}
                </button>
                <button
                  type="button"
                  onClick={() => setDecision('later')}
                  className="btn-ghost min-w-48"
                >
                  {proposal.think}
                </button>
              </motion.div>
            )}

            {decision === 'yes' && (
              <motion.div
                key="yes"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="mx-auto max-w-xl"
              >
                <motion.span
                  initial={prefersReducedMotion ? false : { scale: 0.7 }}
                  animate={{ scale: 1 }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 120, damping: 12 }
                  }
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-rose/70 text-rose"
                >
                  <Heart className="h-5 w-5" strokeWidth={1.4} />
                </motion.span>
                <p className="mt-6 text-balance font-serif text-2xl font-light leading-snug text-ink sm:text-3xl">
                  {proposal.yesMessage}
                </p>
                <p className="mt-4 font-script text-2xl text-rose sm:text-3xl">
                  {proposal.yesDetail}
                </p>
                <button
                  type="button"
                  onClick={() => scrollToSection('final')}
                  className="btn-ghost mt-8"
                >
                  {proposal.yesContinue}
                </button>
              </motion.div>
            )}

            {decision === 'later' && (
              <motion.div
                key="later"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="mx-auto max-w-xl"
              >
                <p className="text-balance font-serif text-xl font-light leading-relaxed text-ink sm:text-2xl">
                  {proposal.laterMessage}
                </p>
                <p className="mt-4 font-script text-2xl text-muted">
                  {proposal.laterDetail}
                </p>
                <button
                  type="button"
                  onClick={() => setDecision('idle')}
                  className="btn-ghost mt-8"
                >
                  {proposal.laterButton}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {accepted && decision !== 'yes' && (
          <p className="mt-8 font-script text-2xl text-rose">
            {config.celebration.acceptedLabel}
          </p>
        )}
      </div>
    </AnimatedSection>
  );
}
