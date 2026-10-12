import { TICKER } from "@/lib/data";

export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div
      className="relative overflow-hidden border-y border-bone/10 bg-coal py-3"
      aria-label="Highlights"
    >
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-6 pr-6 text-xs uppercase tracking-[0.22em] text-sand"
            aria-hidden={i >= TICKER.length}
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
