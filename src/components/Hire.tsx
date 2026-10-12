import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { EMAIL, WHATSAPP } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ButtonLink, SectionHeading } from "./ui";

const TERMS = [
  ["Capacity", "Up to 30 guests"],
  ["Rate", "£100 per hour"],
  ["Duration", "3 to 5 hours"],
  ["Food", "Buffet or à la carte"],
  ["Sound", "DJ-ready, bring your own or ours"],
  ["Where", "Peckham Rye, whole room"],
];

const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("Private hire enquiry")}&body=${encodeURIComponent(
  "Hi Suuyar,\n\nI'd like to hire the room.\n\nDate:\nGuests:\nOccasion:\n\nThanks,",
)}`;

export function Hire() {
  return (
    <section id="hire" className="container-x py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading
              eyebrow="Private hire"
              title={
                <>
                  Thirty of your people.
                  <br />
                  One long table.
                </>
              }
              lede="Birthdays, send-offs, the cousin who finally visited. Take the whole Peckham Rye room, keep the grill going, and plug in the speaker."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
              {TERMS.map(([k, v]) => (
                <div key={k} className="border-t border-bone/10 pt-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-dust">{k}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-bone">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={mailto}>Enquire by email</ButtonLink>
            <ButtonLink href={WHATSAPP} target="_blank" rel="noreferrer" variant="ghost">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6" delay={0.08} y={40}>
          <div className="grid grid-cols-5 gap-3 sm:gap-4">
            <figure className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/interior-3.jpg"
                alt="Guests at a table"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="object-cover"
              />
            </figure>
            <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
              <figure className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/jollof-bowl.png"
                  alt="Bowl of jollof rice with chicken"
                  fill
                  sizes="(max-width: 1024px) 40vw, 20vw"
                  className="scale-110 object-cover"
                />
              </figure>
              <div className="flex flex-1 flex-col justify-end rounded-2xl bg-ember p-5 text-ink">
                <p className="display text-4xl sm:text-5xl">£100</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/70">per hour, the room</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
