import { Flower } from 'lucide-react';

export function SectionDivider({ className = '' }) {
  return (
    <div
      className={`mx-auto flex w-full max-w-5xl items-center gap-5 px-8 py-12 sm:py-16 ${className}`}
      aria-hidden="true"
    >
      <span className="hairline flex-1" />
      <Flower className="h-3.5 w-3.5 text-rose" strokeWidth={1.2} />
      <span className="hairline flex-1" />
    </div>
  );
}
