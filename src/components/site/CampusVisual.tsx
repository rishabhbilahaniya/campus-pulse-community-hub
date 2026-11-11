import { Sparkles, ThumbsUp } from "lucide-react";
import { useRef, useState } from "react";
import campus from "@/assets/campus-hero.jpg";
import { campusSpots, categoryTone, toneDot } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Interactive campus illustration: tilts with the pointer, hotspots reveal what can be reported where. */
export function CampusVisual() {
  const stage = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>("library");

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = stage.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`;
  }
  function onLeave() {
    if (stage.current) stage.current.style.transform = "";
  }

  return (
    <div className="perspective-1000 relative" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="absolute inset-[8%] rounded-full bg-aurora opacity-30 blur-3xl animate-gradient" aria-hidden />
      <div ref={stage} className="preserve-3d relative transition-transform duration-500 ease-out">
        <img
          src={campus}
          alt="Isometric illustration of a modern campus with library, labs, hostels, cafeteria, sports field and park"
          width={1536}
          height={1152}
          className="relative w-full select-none mix-blend-multiply"
          draggable={false}
        />
        {campusSpots.map((spot) => {
          const isActive = active === spot.id;
          const tone = categoryTone[spot.category];
          return (
            <button
              key={spot.id}
              type="button"
              onPointerEnter={() => setActive(spot.id)}
              onFocus={() => setActive(spot.id)}
              onClick={() => setActive(spot.id)}
              style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: "translate(-50%, -50%) translateZ(40px)" }}
              className="absolute z-10 grid size-7 cursor-pointer place-items-center"
              aria-label={`${spot.name}: ${spot.hint}`}
            >
              <span className={cn("absolute inset-0 rounded-full animate-pulse-ring", toneDot[tone])} />
              <span className={cn("relative size-3.5 rounded-full border-2 border-background shadow-soft", toneDot[tone])} />
              {isActive && (
                <span className="glass-strong pointer-events-none absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-xl px-3 py-2 text-left animate-fade-up">
                  <span className="block font-display text-xs font-semibold text-foreground">{spot.name}</span>
                  <span className="block text-[0.7rem] leading-snug text-muted-foreground">{spot.hint}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="glass-strong absolute -left-2 bottom-[14%] hidden items-center gap-3 rounded-2xl px-4 py-3 animate-float sm:flex">
        <span className="grid size-9 place-items-center rounded-xl bg-violet-soft text-violet">
          <Sparkles className="size-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-foreground">AI triage</p>
          <p className="text-[0.7rem] text-muted-foreground">Sorts reports by urgency</p>
        </div>
      </div>
      <div className="glass-strong absolute -right-2 top-[8%] hidden items-center gap-3 rounded-2xl px-4 py-3 animate-float-slow sm:flex">
        <span className="grid size-9 place-items-center rounded-xl bg-emerald-soft text-emerald">
          <ThumbsUp className="size-4" />
        </span>
        <div>
          <p className="text-xs font-semibold text-foreground">Community votes</p>
          <p className="text-[0.7rem] text-muted-foreground">Students set priorities</p>
        </div>
      </div>
    </div>
  );
}
