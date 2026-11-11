import { Check } from "lucide-react";
import { toneIcon, type Feature } from "@/lib/content";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";
import { TiltCard } from "./TiltCard";

export function FeatureCard({ feature, detailed = false }: { feature: Feature; detailed?: boolean }) {
  const Icon = feature.icon;
  return (
    <TiltCard className="h-full">
      <article className="glass group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl p-6 transition-shadow duration-500 hover:shadow-elevated">
        <div className="absolute -right-16 -top-16 size-40 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20" aria-hidden />
        <div className="flex items-start justify-between gap-3">
          <span className={cn("grid size-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110", toneIcon[feature.tone])}>
            <Icon className="size-6" />
          </span>
          <StatusBadge status="soon" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
        {detailed && (
          <ul className="mt-auto flex flex-col gap-2 border-t pt-4">
            {feature.details.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-foreground/80">
                <Check className="size-4 text-emerald" />
                {d}
              </li>
            ))}
          </ul>
        )}
      </article>
    </TiltCard>
  );
}
