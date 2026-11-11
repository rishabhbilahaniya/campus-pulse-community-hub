import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="CampusX home">
      <span className="relative grid size-9 place-items-center rounded-xl bg-brand shadow-glow transition-transform duration-500 group-hover:rotate-[8deg]">
        <span className="font-display text-lg font-bold text-primary-foreground">X</span>
        <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-background bg-violet" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        Campus<span className="text-gradient">X</span>
      </span>
    </Link>
  );
}
