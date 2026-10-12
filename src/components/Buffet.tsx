import Image from "next/image";
import { CalendarDays, Clock, Users, Wine } from "lucide-react";
import { BUFFET_ITEMS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ButtonLink, Eyebrow } from "./ui";

const FACTS = [
  { Icon: CalendarDays, k: "When", v: "Every Saturday & Sunday" },
  { Icon: Clock, k: "Sittings", v: "1pm to 6pm · 2 hours at the table" },
  { Icon: Users, k: "Where", v: "Peckham Rye only · 28 seats" },
  { Icon: Wine, k: "Upgrade", v: "£40 adds a glass of Prosecco or Chapman and a takeaway box" },
];

export function Buffet() {
  return (
    <section id="buffet" className="relative isolate overflow-hidden bg-ember text-ink">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 -z-10 h-144 w-144 rounded-full bg-yaji/50 blur-3xl"
      />
      <div className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow tone="ink">The one people travel for</Eyebrow>
            <h2 className="display mt-5 text-[3.2rem] sm:text-7xl lg:text-8xl">
              The Weekend
              <br />
              Suya Buffet.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-end gap-x-6 gap-y-2">
            <p className="display text-[6rem] leading-none sm:text-[8rem]">
              £25
            </p>
            <p className="mb-3 max-w-xs text-base leading-snug text-ink/80 sm:text-lg">
              per person. Everything off the grill, as much as you like, for two hours.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 grid gap-5 sm:grid-cols-2">
            {FACTS.map(({ Icon, k, v }) => (
              <div key={k} className="flex gap-4 border-t border-ink/20 pt-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.75} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60">{k}</p>
                  <p className="mt-1 text-sm font-medium leading-snug">{v}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.22} className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="#book" variant="ink">
              Book the buffet
            </ButtonLink>
            <p className="text-sm text-ink/70">
              It sells out most weekends. Walk-ins only if a table frees up.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.12} y={40}>
            <div className="relative overflow-hidden rounded-3xl bg-ink text-bone">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/spread.jpg"
                  alt="A table spread of jollof, stews, suya and plantain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                <p className="absolute bottom-5 left-6 font-display text-2xl font-semibold tracking-tight">
                  On the pass
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 px-6 pb-7 pt-2 text-sm text-sand">
                {BUFFET_ITEMS.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="border-t border-bone/10 px-6 py-4 text-xs text-dust">
                Whole table dines on the buffet during buffet hours. À la carte returns at 6pm.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
