import { config } from '../data/config';
import { memories } from '../data/memories';
import { AnimatedSection } from '../components/AnimatedSection';
import { PasswordGate } from '../components/PasswordGate';
import { PhotoGallery } from '../components/PhotoGallery';

export function Memories() {
  return (
    <AnimatedSection id="recuerdos" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{config.memories.eyebrow}</p>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
            {config.memories.title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty font-serif text-lg italic text-muted">
            {config.memories.subtitle}
          </p>
        </header>

        <div className="mt-12 sm:mt-16">
          <PasswordGate>
            <PhotoGallery memories={memories} />
          </PasswordGate>
        </div>
      </div>
    </AnimatedSection>
  );
}
