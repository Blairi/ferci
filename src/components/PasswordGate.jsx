import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Eye, EyeOff, Lock, LockOpen, UnlockKeyhole } from 'lucide-react';
import { config } from '../data/config';

const STORAGE_KEY = 'our-story:memories-unlocked';

function readSession() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(readSession);
  const [value, setValue] = useState('');
  const [reveal, setReveal] = useState(false);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);
  const inputRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === config.memories.password) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        /* sessionStorage puede no estar disponible */
      }
      setUnlocked(true);
      setValue('');
      setReveal(false);
      setError('');
      return;
    }

    setError(config.memories.lock.wrong);
    setAttempt((count) => count + 1);
    inputRef.current?.focus();
  };

  const handleLock = () => {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* sessionStorage puede no estar disponible */
    }
    setUnlocked(false);
    setValue('');
    setReveal(false);
    setError('');
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {unlocked ? (
        <motion.div
          key="unlocked"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-beige pb-4">
            <p className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              <LockOpen className="h-3.5 w-3.5" strokeWidth={1.4} />
              {config.memories.unlocked}
            </p>
            <button
              type="button"
              onClick={handleLock}
              className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
            >
              <Lock className="h-3.5 w-3.5" strokeWidth={1.4} />
              {config.memories.lockAgain}
            </button>
          </div>
          {children}
        </motion.div>
      ) : (
        <motion.div
          key="locked"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="mx-auto max-w-xl"
        >
          <div className="border border-beige bg-white/55 px-6 py-10 text-center sm:px-12 sm:py-14">
            <motion.span
              key={attempt}
              animate={
                attempt > 0 && !prefersReducedMotion
                  ? { x: [0, -6, 6, -3, 3, 0] }
                  : { x: 0 }
              }
              transition={{ duration: 0.4 }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-beige text-rose"
            >
              <UnlockKeyhole className="h-5 w-5" strokeWidth={1.4} />
            </motion.span>

            <h3 className="mt-6 font-serif text-3xl font-light text-ink sm:text-4xl">
              {config.memories.lock.title}
            </h3>
            <p className="mx-auto mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted">
              {config.memories.lock.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <label htmlFor="memories-password" className="sr-only">
                {config.memories.lock.placeholder}
              </label>
              <div className="relative">
                <input
                  ref={inputRef}
                  id="memories-password"
                  type={reveal ? 'text' : 'password'}
                  value={value}
                  onChange={(event) => {
                    setValue(event.target.value);
                    if (error) setError('');
                  }}
                  placeholder={config.memories.lock.placeholder}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck="false"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'memories-error' : undefined}
                  className={`w-full border-b bg-transparent py-3 pl-1 pr-12 text-center font-sans text-sm tracking-wide placeholder:text-muted/60 focus:outline-none ${
                    error
                      ? 'border-[#b07b76]'
                      : 'border-beige focus:border-ink'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setReveal((visible) => !visible)}
                  aria-label={
                    reveal
                      ? config.memories.lock.hidePassword
                      : config.memories.lock.showPassword
                  }
                  className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-muted transition-colors hover:text-ink"
                >
                  {reveal ? (
                    <EyeOff className="h-4 w-4" strokeWidth={1.4} />
                  ) : (
                    <Eye className="h-4 w-4" strokeWidth={1.4} />
                  )}
                </button>
              </div>

              <div className="min-h-[2.5rem] pt-3" aria-live="polite">
                <AnimatePresence>
                  {error && (
                    <motion.p
                      id="memories-error"
                      role="alert"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-serif text-sm italic text-[#a06d68]"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button type="submit" className="btn-primary w-full">
                {config.memories.lock.submit}
              </button>
            </form>

            <p className="mx-auto mt-7 max-w-xs text-pretty text-[0.68rem] leading-relaxed text-muted/80">
              {config.memories.lock.sessionNote}
            </p>
            <p className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-muted/60">
              {config.memories.lock.hint}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
