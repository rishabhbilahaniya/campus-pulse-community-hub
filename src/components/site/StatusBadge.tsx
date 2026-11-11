import { cva, type VariantProps } from "class-variance-authority";
import { CircleDot, FlaskConical, Hourglass } from "lucide-react";
import { cn } from "@/lib/utils";

const statusVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider",
  {
    variants: {
      status: {
        live: "border-emerald/30 bg-emerald-soft text-emerald",
        preview: "border-sky/25 bg-sky-soft text-sky",
        soon: "border-violet/25 bg-violet-soft text-violet",
      },
    },
    defaultVariants: { status: "soon" },
  },
);

const labels = { live: "Working", preview: "Sample", soon: "Coming soon" } as const;
const icons = { live: CircleDot, preview: FlaskConical, soon: Hourglass } as const;

export function StatusBadge({
  status = "soon",
  label,
  className,
}: VariantProps<typeof statusVariants> & { label?: string; className?: string }) {
  const key = status ?? "soon";
  const Icon = icons[key];
  return (
    <span className={cn(statusVariants({ status: key }), className)}>
      <Icon className="size-3" />
      {label ?? labels[key]}
    </span>
  );
}
