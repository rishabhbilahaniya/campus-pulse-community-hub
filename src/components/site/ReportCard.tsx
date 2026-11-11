import { MapPin } from "lucide-react";
import { categoryTone, toneIcon, type ReportCategory } from "@/lib/content";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

const stages = ["Submitted", "In review", "Resolved"] as const;

export function ReportCard({
  title,
  category,
  location,
  stage,
}: {
  title: string;
  category: ReportCategory;
  location: string;
  stage: (typeof stages)[number];
}) {
  const idx = stages.indexOf(stage);
  return (
    <article className="glass flex h-full flex-col gap-4 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
      <div className="flex items-center justify-between gap-2">
        <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", toneIcon[categoryTone[category]])}>{category}</span>
        <StatusBadge status="preview" />
      </div>
      <h3 className="text-base font-semibold leading-snug">{title}</h3>
      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <MapPin className="size-4" /> {location}
      </p>
      <div className="mt-auto">
        <div className="mb-2 flex gap-1.5">
          {stages.map((s, i) => (
            <span key={s} className={cn("h-1.5 flex-1 rounded-full", i <= idx ? "bg-brand" : "bg-muted")} />
          ))}
        </div>
        <p className="text-xs font-medium text-muted-foreground">Status: <span className="text-foreground">{stage}</span></p>
      </div>
    </article>
  );
}
