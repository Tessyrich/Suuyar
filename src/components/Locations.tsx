import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { LOCATIONS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ButtonLink, SectionHeading } from "./ui";

export function Locations() {
  return (
    <section id="locations" className="border-t border-bone/10 bg-coal">
      <div className="container-x py-24 sm:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Find us"
            title="Three grills, one spice."
            lede="Peckham Rye is the one you book. Rye Lane is the stall you queue for. Catford is the one your south-east cousins keep quiet about."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} as="li" delay={0.08 * i} y={36}>
              <article className="group flex h-full flex-col rounded-3xl border border-bone/10 bg-ink p-7 transition-colors hover:border-bone/25">
                <p className="text-xs uppercase tracking-[0.2em] text-dust">{l.kind}</p>
                <h3 className="display mt-3 text-4xl text-bone">{l.name}</h3>

                <address className="mt-6 space-y-3 text-sm not-italic text-sand">
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    <span>
                      {l.address.join(", ")}
                      <br />
                      {l.postcode}
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    <span>
                      {l.hours}
                      {l.note ? (
                        <>
                          <br />
                          <span className="text-dust">{l.note}</span>
                        </>
                      ) : null}
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    <a href={`tel:${PHONE_TEL}`} className="hover:text-bone">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                </address>

                <div className="mt-8 flex flex-wrap gap-2 pt-2">
                  {l.bookable ? (
                    <ButtonLink href="#book" className="px-5! py-2.5!">
                      Book
                    </ButtonLink>
                  ) : null}
                  <ButtonLink
                    href={l.maps}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                    className="px-5! py-2.5!"
                  >
                    Directions <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
