import { Link } from "@tanstack/react-router";
import { Bell, LayoutDashboard, LogOut, Menu, type LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/Logo";
import { PreviewNotice } from "@/components/site/PreviewNotice";
import { comingSoon } from "@/lib/coming-soon";
import { cn } from "@/lib/utils";

export type NavItem = { label: string; icon: LucideIcon };

function SideNav({ items, roleLabel }: { items: NavItem[]; roleLabel: string }) {
  return (
    <div className="flex h-full flex-col gap-6">
      <Logo />
      <span className="w-fit rounded-full bg-sky-soft px-3 py-1 text-xs font-semibold text-primary">{roleLabel}</span>
      <nav className="flex flex-col gap-1" aria-label="Dashboard">
        <span className="flex items-center gap-3 rounded-xl bg-navy px-3 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft">
          <LayoutDashboard className="size-4" /> Overview
        </span>
        {items.map((it) => (
          <button
            key={it.label}
            type="button"
            onClick={() => comingSoon(it.label)}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <it.icon className="size-4" />
            <span className="flex-1">{it.label}</span>
            <span className="rounded-full bg-violet-soft px-1.5 py-0.5 text-[0.6rem] font-bold uppercase text-violet">Soon</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto">
        <Button asChild variant="ghost" className="w-full justify-start rounded-xl">
          <Link to="/"><LogOut /> Back to site</Link>
        </Button>
      </div>
    </div>
  );
}

export function DashboardShell({
  roleLabel,
  greeting,
  description,
  nav,
  children,
}: {
  roleLabel: string;
  greeting: string;
  description: string;
  nav: NavItem[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-muted/40">
      <div className="pointer-events-none fixed inset-0 bg-mesh opacity-60" aria-hidden />
      <aside className="glass-strong fixed inset-y-3 left-3 z-30 hidden w-64 rounded-3xl p-5 lg:block">
        <SideNav items={nav} roleLabel={roleLabel} />
      </aside>
      <div className="relative lg:pl-[17.5rem]">
        <header className="sticky top-0 z-20 px-3 pt-3 sm:px-5">
          <div className="glass-strong flex h-16 items-center justify-between gap-3 rounded-2xl px-4">
            <div className="flex items-center gap-3">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu"><Menu /></Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72 p-5">
                  <SheetHeader className="sr-only"><SheetTitle>Dashboard menu</SheetTitle></SheetHeader>
                  <SideNav items={nav} roleLabel={roleLabel} />
                </SheetContent>
              </Sheet>
              <p className="font-display text-sm font-semibold sm:text-base">{roleLabel} dashboard</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="Notifications" onClick={() => comingSoon("Notifications")}><Bell /></Button>
              <span className="grid size-9 place-items-center rounded-full bg-brand font-display text-sm font-bold text-primary-foreground">?</span>
            </div>
          </div>
        </header>
        <main className="px-3 pb-12 pt-6 sm:px-5">
          <div className="animate-fade-up">
            <h1 className="text-3xl font-bold sm:text-4xl">{greeting}</h1>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </div>
          <PreviewNotice className="mt-6">
            This is a layout preview. Sign-in isn't connected yet, so there's no personal data here — sections fill in once accounts and reporting launch.
          </PreviewNotice>
          <div className="mt-6 flex flex-col gap-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function StatTile({ label, icon: Icon, tone }: { label: string; icon: LucideIcon; tone: string }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <span className={cn("grid size-9 place-items-center rounded-xl", tone)}><Icon className="size-4" /></span>
      </div>
      <p className="mt-4 font-display text-3xl font-bold text-border">—</p>
      <p className="mt-1 text-xs text-muted-foreground">No data yet</p>
    </div>
  );
}

export function QuickAction({ label, icon: Icon, tone }: { label: string; icon: LucideIcon; tone: string }) {
  return (
    <button
      type="button"
      onClick={() => comingSoon(label)}
      className="glass group flex cursor-pointer flex-col items-start gap-4 rounded-3xl p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
    >
      <span className={cn("grid size-11 place-items-center rounded-2xl transition-transform group-hover:scale-110", tone)}><Icon className="size-5" /></span>
      <span className="font-semibold">{label}</span>
      <span className="rounded-full bg-violet-soft px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-violet">Coming soon</span>
    </button>
  );
}

export function EmptyPanel({
  title,
  icon: Icon,
  text,
  className,
}: {
  title: string;
  icon: LucideIcon;
  text: string;
  className?: string;
}) {
  return (
    <section className={cn("glass-strong flex flex-col rounded-3xl p-6", className)}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 py-10 text-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-muted text-muted-foreground"><Icon className="size-6" /></span>
        <p className="max-w-xs text-sm text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}
