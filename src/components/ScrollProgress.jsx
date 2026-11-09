import { motion, useReducedMotion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
      role="progressbar"
      aria-label="Progreso de lectura"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <motion.div
        className="h-full origin-left bg-rose"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.15, ease: 'linear' }
        }
      />
    </div>
  );
}
