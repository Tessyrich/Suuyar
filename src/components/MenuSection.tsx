"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Flame, Leaf, Star } from "lucide-react";
import { MENU } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ButtonLink, SectionHeading } from "./ui";

const TAG = {
  signature: { Icon: Star, label: "Signature", cls: "text-yaji" },
  hot: { Icon: Flame, label: "Hot", cls: "text-ember" },
  veg: { Icon: Leaf, label: "Veg", cls: "text-emerald-400" },
} as const;

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const section = MENU.find((s) => s.id === active) ?? MENU[0];

  return (
    <section id="menu" className="container-x py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              eyebrow="Menu · Peckham Rye"
              title={
                <>
                  Short list.
                  <br />
                  All of it charred.
                </>
              }
              lede="Prices are what you pay. Rye Lane and Catford carry a shorter version of the same list."
            />
          </Reveal>

          <Reveal delay={0.1} className="relative mt-10 hidden aspect-[3/4] overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/jollof-plantain.jpg"
              alt="Jollof rice, fried plantain and chicken"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <div
              role="tablist"
              aria-label="Menu sections"
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none]"
            >
              {MENU.map((s) => {
                const on = s.id === active;
                return (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={on}
                    aria-controls={`panel-${s.id}`}
                    id={`tab-${s.id}`}
                    onClick={() => setActive(s.id)}
                    className={`relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                      on ? "text-ink" : "text-sand hover:text-bone"
                    }`}
                  >
                    {on ? (
                      <motion.span
                        layoutId="menu-tab"
                        className="absolute inset-0 rounded-full bg-bone"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    ) : (
                      <span className="absolute inset-0 rounded-full border border-bone/15" />
                    )}
                    <span className="relative">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-8 min-h-[26rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={section.id}
                id={`panel-${section.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${section.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-6 text-sm text-dust">{section.blurb}</p>
                <ul className="divide-y divide-bone/10 border-y border-bone/10">
                  {section.items.map((it) => {
                    const tag = it.tag ? TAG[it.tag] : null;
                    return (
                      <li key={it.name} className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-4">
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h3 className="font-display text-xl font-semibold tracking-tight text-bone">
                              {it.name}
                            </h3>
                            {tag ? (
                              <span className={`flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.18em] ${tag.cls}`}>
                                <tag.Icon className="h-3 w-3" />
                                {tag.label}
                              </span>
                            ) : null}
                          </div>
                          {it.note ? <p className="mt-1 text-sm text-sand">{it.note}</p> : null}
                        </div>
                        <p className="font-display text-lg tabular-nums text-bone">£{it.price}</p>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <Reveal delay={0.05} className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-relaxed text-dust">
              Yaji is made with ground peanuts. Our kitchen also handles tree nuts, dairy, egg,
              wheat, soy, fish and shellfish. Tell us about allergies when you book.
            </p>
            <ButtonLink href="#book" variant="ghost" className="shrink-0">
              Book a table
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
