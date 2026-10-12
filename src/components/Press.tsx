import { ArrowUpRight } from "lucide-react";
import { PRESS } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

export function Press() {
  return (
    <section className="container-x py-24 sm:py-32">
      <Reveal>
        <Eyebrow>What they wrote</Eyebrow>
      </Reveal>
      <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {PRESS.map((p, i) => (
          <Reveal key={p.outlet} as="li" delay={0.08 * i} className="flex flex-col border-t border-bone/10 pt-6">
            <p className="serif-italic text-2xl leading-snug text-bone sm:text-[1.7rem]">“{p.quote}”</p>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="mt-auto flex items-center gap-1.5 pt-8 text-xs uppercase tracking-[0.2em] text-dust hover:text-bone"
            >
              {p.outlet}
              {p.context ? <span className="normal-case tracking-normal">· {p.context}</span> : null}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
