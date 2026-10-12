import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ButtonLink, SectionHeading } from "./ui";

const STATS = [
  { v: "2018", k: "First grill lit on Rye Lane" },
  { v: "3", k: "Grills across SE15 and SE6" },
  { v: "1hr", k: "The queue on a good Saturday" },
  { v: "30M+", k: "Views on the chef's channels" },
];

export function Story() {
  return (
    <section id="story" className="relative isolate overflow-hidden bg-coal">
      <div aria-hidden className="ember-glow absolute inset-0 -z-10 opacity-70" />
      <div className="container-x grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-5" y={40}>
          <figure className="relative mx-auto max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/chef.jpg"
                alt="Chef Kolawole Ajayi at the grill"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute -bottom-5 left-6 rounded-2xl border border-bone/10 bg-ink/90 px-5 py-4 backdrop-blur">
              <p className="font-display text-lg font-semibold tracking-tight text-bone">Kolawole Ajayi</p>
              <p className="text-xs uppercase tracking-[0.18em] text-dust">Chef & founder</p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
          <Reveal>
            <SectionHeading
              eyebrow="The story"
              title={
                <>
                  From a Rye Lane pavement
                  <br />
                  to three grills.
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-sand sm:text-lg">
            <p>
              Kola was a soldier, then a social worker, then a cook with a camera. He started
              filming Nigerian home cooking in 2012 and the channel outgrew the kitchen.
            </p>
            <p>
              In 2018 he lit an oil-drum grill on Choumert Road, off Rye Lane. He opened when the
              weather was good, handed out beef to the people at the front of the queue, and the
              queue got longer anyway. People came from Reading for it.
            </p>
            <p>
              The stall is still there. The restaurant on Peckham Rye and the grill in Catford came
              later, so you can sit down with the same suya, and bring thirty friends.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 grid grid-cols-2 gap-6 border-t border-bone/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.k}>
                <p className="display text-4xl text-bone sm:text-5xl">{s.v}</p>
                <p className="mt-2 text-xs leading-snug text-dust">{s.k}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <ButtonLink href={SOCIAL.youtube} target="_blank" rel="noreferrer" variant="ghost">
              Watch the channel <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
