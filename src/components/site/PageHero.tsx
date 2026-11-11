import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative -mt-20 overflow-hidden pb-14 pt-36 sm:pb-20 sm:pt-44">
      <div className="absolute inset-0 bg-mesh" aria-hidden />
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center animate-fade-up sm:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
}
