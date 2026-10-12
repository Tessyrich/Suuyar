"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ButtonLink, Eyebrow } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Image
          src="/images/grill.jpg"
          alt="Fish and suya grilling over glowing charcoal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      <div
        aria-hidden
        className="animate-flicker absolute -bottom-40 left-1/2 -z-10 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full bg-ember/25 blur-3xl"
      />

      <div className="container-x relative pb-10 pt-32 sm:pb-14">
        <motion.div {...fade(0.1)}>
          <Eyebrow>Nigerian suya grill · South London</Eyebrow>
        </motion.div>

        <motion.h1
          {...fade(0.22)}
          className="display mt-6 max-w-[11ch] text-[15vw] text-bone sm:text-[6.5rem] lg:text-[8.5rem]"
        >
          Suya worth
          <br />
          the <span className="serif-italic font-normal text-yaji">queue.</span>
        </motion.h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p {...fade(0.36)} className="max-w-md text-base leading-relaxed text-sand sm:text-lg">
            Thin-cut beef, a thick crust of peanut yaji, and nothing between it and the fire.
            From the Rye Lane stall that started the queue, now at three grills across Peckham
            and Catford.
          </motion.p>

          <motion.div {...fade(0.48)} className="flex flex-wrap gap-3">
            <ButtonLink href="#book">Book a table</ButtonLink>
            <ButtonLink href="#menu" variant="ghost">
              See the menu
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          {...fade(0.7)}
          className="mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-bone/10 pt-6 text-xs text-dust"
        >
          <p className="flex items-center gap-6">
            <span className="uppercase tracking-[0.2em]">As seen in</span>
            <span className="font-display text-base font-semibold tracking-tight text-sand">Time Out</span>
            <span className="font-display text-base font-semibold tracking-tight text-sand">The Infatuation</span>
            <span className="hidden font-display text-base font-semibold tracking-tight text-sand sm:inline">
              Vittles
            </span>
          </p>
          <a href="#grill" className="hidden items-center gap-2 uppercase tracking-[0.2em] hover:text-bone sm:flex">
            Scroll <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
