import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "ember" | "ink" | "ghost" | "bone";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-[background-color,color,transform] duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yaji";

const variants: Record<Variant, string> = {
  ember: "bg-ember text-ink hover:bg-yaji",
  ink: "bg-ink text-bone hover:bg-coal",
  ghost: "border border-bone/25 text-bone hover:border-bone/60 hover:bg-bone/5",
  bone: "bg-bone text-ink hover:bg-yaji",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({ variant = "ember", className = "", children, ...rest }: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant = "ember", className = "", children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function Eyebrow({
  children,
  className = "",
  tone = "yaji",
}: {
  children: ReactNode;
  className?: string;
  tone?: "yaji" | "ink";
}) {
  const ink = tone === "ink";
  return (
    <p className={`eyebrow flex items-center gap-3 ${ink ? "text-ink/70!" : ""} ${className}`}>
      <span aria-hidden className={`inline-block h-px w-6 ${ink ? "bg-ink/50" : "bg-yaji/70"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = true,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>
      <h2
        className={`display mt-5 text-[2.6rem] sm:text-6xl lg:text-7xl ${dark ? "text-bone" : "text-ink"}`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${center ? "mx-auto" : ""} ${dark ? "text-sand" : "text-ink/75"}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M16 2c1.2 5.2 6.4 7.6 6.4 13.6 0 2.6-1 4.4-2.4 5.6.2-3.4-1.6-5.2-3.2-6.4-.4 3.6-3.6 4.8-3.6 8.4 0 1.2.4 2.2 1 3C10 25.2 7.6 22 7.6 17.6 7.6 10.4 14.8 8.4 16 2Z"
        fill="currentColor"
      />
      <path d="M5 29h22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
