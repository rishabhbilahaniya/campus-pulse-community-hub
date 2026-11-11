import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import { categoryTone, toneIcon, type ReportCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Local-only voting preview; nothing is saved. */
export function VoteCard({ title, category }: { title: string; category: ReportCategory }) {
  const [voted, setVoted] = useState(false);
  return (
    <div className="flex items-center gap-4 rounded-2xl border bg-background/70 p-4 transition-colors hover:border-sky/40">
      <button
        type="button"
        onClick={() => setVoted((v) => !v)}
        aria-pressed={voted}
        className={cn(
          "grid size-12 shrink-0 cursor-pointer place-items-center rounded-xl border transition-all duration-300",
          voted ? "border-transparent bg-brand text-primary-foreground shadow-glow" : "bg-background text-muted-foreground hover:text-primary",
        )}
        aria-label={voted ? "Remove support" : "Support this idea"}
      >
        <ThumbsUp className={cn("size-5 transition-transform", voted && "scale-110")} />
      </button>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug text-foreground">{title}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <span className={cn("rounded-full px-2 py-0.5 text-[0.7rem] font-semibold", toneIcon[categoryTone[category]])}>{category}</span>
          <span className="text-[0.7rem] text-muted-foreground">{voted ? "You supported this — not saved" : "Tap to try voting"}</span>
        </div>
      </div>
    </div>
  );
}
