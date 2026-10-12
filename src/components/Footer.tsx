import Link from "next/link";
import { EMAIL, LOCATIONS, PHONE_DISPLAY, PHONE_TEL, SOCIAL } from "@/lib/data";
import { Mark } from "./ui";

const FOLLOW = [
  ["Instagram", SOCIAL.instagram],
  ["TikTok", SOCIAL.tiktok],
  ["YouTube", SOCIAL.youtube],
  ["Facebook", SOCIAL.facebook],
];

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="#top" className="flex items-center gap-2.5 text-bone">
            <Mark className="h-7 w-7 text-ember" />
            <span className="display text-3xl">Suuyar</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand">
            Nigerian suya grill. Peckham Rye, Rye Lane and Catford, London. Est. 2018 on a
            pavement off Rye Lane.
          </p>
          <p className="mt-6 space-y-1 text-sm text-sand">
            <a href={`tel:${PHONE_TEL}`} className="block hover:text-bone">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="block hover:text-bone">
              {EMAIL}
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dust">Visit</p>
            <ul className="mt-4 space-y-4 text-sm text-sand">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <p className="font-medium text-bone">{l.name}</p>
                  <p>
                    {l.address[0]}, {l.postcode}
                  </p>
                  <p className="text-dust">{l.hours}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dust">Follow</p>
            <ul className="mt-4 space-y-2.5 text-sm text-sand">
              {FOLLOW.map(([k, href]) => (
                <li key={k}>
                  <a href={href} target="_blank" rel="noreferrer" className="hover:text-bone">
                    {k}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dust">Quick</p>
            <ul className="mt-4 space-y-2.5 text-sm text-sand">
              <li><Link href="#book" className="hover:text-bone">Book a table</Link></li>
              <li><Link href="#buffet" className="hover:text-bone">Weekend buffet</Link></li>
              <li><Link href="#hire" className="hover:text-bone">Private hire</Link></li>
              <li><Link href="#menu" className="hover:text-bone">Menu & allergens</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-dust sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Suuyar. All rights reserved.</p>
          <p>Yaji contains peanuts. Ask us about allergens before you order.</p>
        </div>
      </div>
    </footer>
  );
}
