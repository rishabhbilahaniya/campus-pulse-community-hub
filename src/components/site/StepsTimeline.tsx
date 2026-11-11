import { steps, toneIcon } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function StepsTimeline() {
  return (
    <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <Reveal key={step.title} delay={i * 110}>
            <div className="glass relative flex h-full flex-col gap-4 rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <span className={cn("relative grid size-14 place-items-center rounded-2xl shadow-soft", toneIcon[step.tone])}>
                  <Icon className="size-6" />
                </span>
                <span className="font-display text-4xl font-bold text-border">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
