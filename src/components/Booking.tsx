"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, THEFORK_WIDGET, WHATSAPP } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Button, ButtonLink, SectionHeading } from "./ui";

export function Booking() {
  const [open, setOpen] = useState(false);

  return (
    <section id="book" className="relative isolate overflow-hidden border-t border-bone/10">
      <div aria-hidden className="ember-glow absolute inset-0 -z-10 opacity-60" />
      <div className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Reservations · Peckham Rye"
              title={
                <>
                  Book
                  <br />a table.
                </>
              }
              lede="Live availability for 24A Peckham Rye. For the weekend buffet, book the 1pm or 3pm sitting. Groups over eight, message us and we'll sort the table."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-10 space-y-3 text-sm text-sand">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 hover:text-bone">
              <Phone className="h-4 w-4 text-ember" /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-bone">
              <MessageCircle className="h-4 w-4 text-ember" /> WhatsApp for groups and hire
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={0.08} y={40}>
          <div className="overflow-hidden rounded-3xl border border-bone/10 bg-bone text-ink">
            {open ? (
              <iframe
                src={THEFORK_WIDGET}
                title="Reserve a table at Suuyar via TheFork"
                className="h-[42rem] w-full"
                loading="lazy"
                allow="payment"
              />
            ) : (
              <div className="flex min-h-[26rem] flex-col items-center justify-center gap-6 px-8 py-16 text-center">
                <p className="display text-4xl sm:text-5xl">Pick a day, pick a time.</p>
                <p className="max-w-sm text-sm text-ink/70">
                  Opens the live booking calendar, powered by TheFork. Instant confirmation,
                  no deposit for tables under eight.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="ink" onClick={() => setOpen(true)}>
                    Open live availability
                  </Button>
                  <ButtonLink href={THEFORK_WIDGET} target="_blank" rel="noreferrer" variant="ghost" className="border-ink/20! text-ink! hover:bg-ink/5!">
                    Open in new tab
                  </ButtonLink>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
