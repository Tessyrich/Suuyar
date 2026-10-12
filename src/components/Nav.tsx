"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ButtonLink, Mark } from "./ui";

const LINKS = [
  { href: "#buffet", label: "Buffet" },
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Story" },
  { href: "#hire", label: "Hire" },
  { href: "#locations", label: "Find us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "border-b border-bone/10 bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between sm:h-20">
          <Link href="#top" className="flex items-center gap-2.5 text-bone" aria-label="Suuyar home">
            <Mark className="h-6 w-6 text-ember" />
            <span className="display text-[1.35rem] tracking-tight">Suuyar</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-sand transition-colors hover:text-bone"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink href="#book" className="hidden sm:inline-flex px-5! py-2.5!">
              Book a table
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="container-x flex h-16 items-center justify-between">
              <span className="flex items-center gap-2.5 text-bone">
                <Mark className="h-6 w-6 text-ember" />
                <span className="display text-[1.35rem]">Suuyar</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 text-bone"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.ul
              className="container-x mt-10 flex flex-col gap-2"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
            >
              {[...LINKS, { href: "#book", label: "Book a table" }].map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display block border-b border-bone/10 py-4 text-5xl text-bone hover:text-ember"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <p className="container-x mt-auto mb-10 text-sm text-dust">
              24A Peckham Rye, SE15 4JR · 152B Rye Lane · 280 Sangley Road
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
