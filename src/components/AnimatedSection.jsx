import { motion, useReducedMotion } from 'framer-motion';

export function AnimatedSection({
  id,
  className = '',
  children,
  delay = 0,
  amount = 0.15,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 ${className}`}
      initial={
        prefersReducedMotion ? 'visible' : { opacity: 0, y: 28 }
      }
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : 0.9,
            delay: prefersReducedMotion ? 0 : delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}
