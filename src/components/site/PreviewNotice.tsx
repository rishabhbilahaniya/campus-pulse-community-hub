import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Honest notice explaining what on a section is sample or not yet built. */
export function PreviewNotice({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-dashed border-sky/30 bg-sky-soft/60 px-4 py-3 text-sm text-foreground/80",
        className,
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-primary" />
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}
