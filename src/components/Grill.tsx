import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";

const STEPS = [
  { n: "01", t: "Sliced thin", d: "Beef cut against the grain so the yaji gets into every edge." },
  { n: "02", t: "Crusted in yaji", d: "Ground kuli-kuli, uda, chilli, ginger, onion, garlic. Thick, not dusted." },
  { n: "03", t: "Smoked, then flamed", d: "Slow in the oil-drum smoker, finished over open charcoal for the char." },
];

export function Grill() {
  return (
    <section id="grill" className="container-x py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="The grill"
              title={
                <>
                  Yaji, smoke,
                  <br />
                  open flame.
                </>
              }
              lede="Suya is street food. Ours still is. The same spice blend and the same fire as the pavement stall, served on a plate you can sit down with."
            />
          </Reveal>

          <ol className="mt-12 space-y-7">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} as="li" delay={0.08 * i} className="flex gap-5 border-t border-bone/10 pt-6">
                <span className="font-display text-sm font-semibold text-ember">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-bone">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-sand">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2} className="mt-12">
            <blockquote className="border-l-2 border-ember pl-5">
              <p className="serif-italic text-2xl leading-snug text-bone sm:text-3xl">
                “Come prepared for proper, actual chilli.”
              </p>
              <cite className="mt-3 block text-xs uppercase tracking-[0.2em] text-dust not-italic">
                Time Out London
              </cite>
            </blockquote>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-6 gap-3 sm:gap-4 lg:col-span-7">
          <Reveal className="col-span-4 row-span-2" y={40}>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-coal">
              <Image
                src="/images/suya-skewers.jpg"
                alt="Beef suya skewers crusted in yaji"
                fill
                sizes="(max-width: 1024px) 66vw, 40vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-bone backdrop-blur">
                Beef suya · £13
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="col-span-2" delay={0.1} y={40}>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-coal">
              <Image
                src="/images/asun.jpg"
                alt="Asun, peppered goat with onions"
                fill
                sizes="(max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal className="col-span-2" delay={0.18} y={40}>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-coal">
              <Image
                src="/images/plantain-beans.jpg"
                alt="Fried plantain with beans"
                fill
                sizes="(max-width: 1024px) 33vw, 20vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal className="col-span-6 sm:col-span-3" delay={0.22} y={40}>
            <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-coal sm:aspect-[4/3]">
              <Image
                src="/images/jollof-assorted.jpg"
                alt="Jollof rice with assorted meat"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-bone backdrop-blur">
                Jollof + assorted · £10
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="col-span-6 sm:col-span-3" delay={0.28} y={40}>
            <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-coal sm:aspect-[4/3]">
              <Image
                src="/images/moin-moin.jpg"
                alt="Moin moin with boiled egg"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
