import { MapPin } from "lucide-react";
import { useState } from "react";
import campus from "@/assets/campus-hero.jpg";
import { campusSpots, categoryTone, toneDot, toneIcon, type ReportCategory } from "@/lib/content";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

const filters: ("All" | ReportCategory)[] = ["All", "Infrastructure", "Safety", "Cleanliness", "Wi-Fi & IT", "Events"];

export function CampusMap() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<string>(campusSpots[0].id);
  const visible = campusSpots.filter((s) => filter === "All" || s.category === filter);
  const current = campusSpots.find((s) => s.id === selected);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-3 sm:p-5">
        <div className="mb-4 flex flex-wrap gap-2" role="toolbar" aria-label="Filter map by category">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all",
                filter === f ? "border-transparent bg-navy text-primary-foreground shadow-soft" : "bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {f !== "All" && <span className={cn("size-2 rounded-full", toneDot[categoryTone[f]])} />}
              {f}
            </button>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-muted/40">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <img src={campus} alt="Campus map" width={1536} height={1152} className="relative w-full mix-blend-multiply" draggable={false} />
          {visible.map((spot) => {
            const tone = categoryTone[spot.category];
            const isSel = spot.id === selected;
            return (
              <button
                key={spot.id}
                type="button"
                onClick={() => setSelected(spot.id)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute z-10 -translate-x-1/2 -translate-y-full cursor-pointer transition-transform hover:scale-110"
                aria-label={spot.name}
              >
                <span className={cn("relative grid size-9 place-items-center rounded-full rounded-bl-none -rotate-45 border-2 border-background shadow-elevated transition-all", toneDot[tone], isSel && "scale-125")}>
                  <MapPin className="size-4 rotate-45 text-primary-foreground" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <aside className="flex flex-col gap-4">
        {current && (
          <div className="glass-strong rounded-3xl p-6 animate-fade-up" key={current.id}>
            <div className="flex items-center justify-between">
              <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", toneIcon[categoryTone[current.category]])}>{current.category}</span>
              <StatusBadge status="preview" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{current.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Typical reports here: {current.hint.toLowerCase()}.</p>
            <p className="mt-4 rounded-xl bg-muted px-3 py-2 text-xs text-muted-foreground">No live reports yet — this area will fill in once reporting launches.</p>
          </div>
        )}
        <div className="glass rounded-3xl p-3">
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Places ({visible.length})</p>
          <ul className="flex flex-col">
            {visible.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setSelected(s.id)}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                    s.id === selected ? "bg-sky-soft text-primary" : "hover:bg-muted",
                  )}
                >
                  <span className={cn("size-2.5 rounded-full", toneDot[categoryTone[s.category]])} />
                  <span className="font-medium">{s.name}</span>
                </button>
              </li>
            ))}
            {visible.length === 0 && <li className="px-3 py-4 text-sm text-muted-foreground">No places in this category.</li>}
          </ul>
        </div>
      </aside>
    </div>
  );
}
