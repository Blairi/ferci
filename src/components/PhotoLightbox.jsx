import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function PhotoLightbox({ memories, index, onClose, onChange }) {
  const prefersReducedMotion = useReducedMotion();
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const current = memories[index];
  const total = memories.length;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'ArrowRight') {
        onChange((index + 1) % total);
        return;
      }
      if (event.key === 'ArrowLeft') {
        onChange((index - 1 + total) % total);
        return;
      }
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [index, total, onClose, onChange]);

  if (!current) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#252525]/95 px-3 py-4 backdrop-blur-sm sm:px-8"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Recuerdo ${index + 1} de ${total}`}
        className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar imagen"
          className="absolute -top-1 right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream/60 hover:text-cream sm:-right-2 sm:-top-2"
        >
          <X className="h-5 w-5" strokeWidth={1.3} />
        </button>

        <motion.figure
          key={current.id}
          initial={
            prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex max-h-full w-full flex-col items-center"
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[62vh] w-auto max-w-full object-contain sm:max-h-[70vh]"
          />
        </motion.figure>

        <div className="mt-6 flex items-center gap-5">
          <button
            type="button"
            onClick={() => onChange((index - 1 + total) % total)}
            aria-label="Recuerdo anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream/60 hover:text-cream"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.3} />
          </button>
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.24em] text-cream/50">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => onChange((index + 1) % total)}
            aria-label="Recuerdo siguiente"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream/60 hover:text-cream"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.3} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
