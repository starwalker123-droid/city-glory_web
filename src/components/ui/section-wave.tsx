/**
 * Full-width, subtle wave used to separate homepage sections in place of a
 * hard border. Same gentle curve language as the announcement-bar
 * WavePattern, stretched into four slow humps across the content width.
 */
export function SectionWave() {
  return (
    <div aria-hidden className="mx-auto max-w-7xl px-4">
      <svg
        viewBox="0 0 320 16"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        className="h-4 w-full text-border sm:h-5"
      >
        <path d="M0 8 Q40 2 80 8 T160 8 T240 8 T320 8" />
      </svg>
    </div>
  );
}
