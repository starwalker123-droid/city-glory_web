"use client";

/**
 * Dual-thumb price filter. Two overlaid native range inputs (the standard
 * min/max-slider technique) — the track/body is click-through
 * (`pointer-events-none`, see `.price-slider-thumb` in globals.css) so only
 * the thumbs themselves are draggable.
 */
export function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
  formatValue,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatValue: (amount: number) => string;
}) {
  const [lo, hi] = value;
  const span = Math.max(max - min, 1);
  const loPct = ((lo - min) / span) * 100;
  const hiPct = ((hi - min) / span) * 100;

  return (
    <div>
      <div className="relative h-5">
        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-border" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-ink"
          style={{ left: `${loPct}%`, right: `${100 - hiPct}%` }}
        />
        <input
          type="range"
          aria-label="min"
          min={min}
          max={max}
          value={lo}
          onChange={(e) => onChange([Math.min(Number(e.target.value), hi), hi])}
          className="price-slider-thumb pointer-events-none absolute inset-x-0 top-1/2 z-10 h-1 w-full -translate-y-1/2 appearance-none bg-transparent"
        />
        <input
          type="range"
          aria-label="max"
          min={min}
          max={max}
          value={hi}
          onChange={(e) => onChange([lo, Math.max(Number(e.target.value), lo)])}
          className="price-slider-thumb pointer-events-none absolute inset-x-0 top-1/2 z-20 h-1 w-full -translate-y-1/2 appearance-none bg-transparent"
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-muted">
        <span>{formatValue(lo)}</span>
        <span>{formatValue(hi)}</span>
      </div>
    </div>
  );
}
