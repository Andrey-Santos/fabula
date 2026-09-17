/** Silhueta da fada da marca — usada no logo e na seção institucional. */
export function Fairy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 80" fill="currentColor" aria-hidden className={className}>
      {/* asas */}
      <path d="M30 34c-6-10-14-16-21-14-6 2-7 10-2 15 5 5 15 5 23-1zM30 36c-7 4-12 11-10 17 2 5 9 6 13 1 4-5 3-13-3-18z" />
      {/* corpo */}
      <path d="M38 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM33 22c4 0 7 3 8 7l4 22c.4 2-1 3-3 2l-5-3-4 26c-.2 1.6-2.4 1.6-2.7 0l-3-26-5 3c-2 1-3.4 0-3-2l4-22c1-4 4-7 8-7z" />
      {/* varinha e brilho */}
      <path d="M44 30l14-12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M58 12l1.6 4.4L64 18l-4.4 1.6L58 24l-1.6-4.4L52 18l4.4-1.6z" />
    </svg>
  );
}
