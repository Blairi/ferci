import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { PhotoLightbox } from './PhotoLightbox';

const aspectByOrientation = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

export function PhotoGallery({ memories }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              delay: prefersReducedMotion ? 0 : (index % 3) * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`mb-6 break-inside-avoid lg:mb-8 ${
              index % 3 === 1 ? 'lg:mt-10' : ''
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group block w-full text-left"
              aria-label={`Ampliar recuerdo: ${memory.date}`}
            >
              <div
                className={`relative overflow-hidden bg-cream-deep ${aspectByOrientation[memory.orientation] ?? 'aspect-[4/3]'}`}
              >
                <img
                  src={memory.src}
                  alt={memory.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/0 bg-cream/0 text-cream opacity-0 transition-all duration-500 group-hover:border-cream/60 group-hover:bg-ink/20 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" strokeWidth={1.4} />
                  </span>
                </span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <PhotoLightbox
            memories={memories}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onChange={setActiveIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
