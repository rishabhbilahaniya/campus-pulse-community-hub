import { Link } from "@tanstack/react-router";
import { ChevronDown, GraduationCap, Menu, Presentation } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5",
          scrolled ? "glass-strong" : "border border-transparent",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-sky-soft data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Log in <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 rounded-xl">
              <DropdownMenuItem asChild>
                <Link to="/student/login">
                  <GraduationCap /> Student login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/teacher/login">
                  <Presentation /> Teacher login
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild variant="hero" size="sm">
            <Link to="/student/register">Get started</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="glass" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86%] max-w-sm">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo />
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted data-[status=active]:bg-sky-soft data-[status=active]:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-2 border-t px-4 pt-5">
              <Button asChild variant="outline">
                <Link to="/student/login" onClick={() => setOpen(false)}>Student login</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/teacher/login" onClick={() => setOpen(false)}>Teacher login</Link>
              </Button>
              <Button asChild variant="hero">
                <Link to="/student/register" onClick={() => setOpen(false)}>Get started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
