import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const THEME_KEY = "campusx-theme";

/** Runs before paint (see __root) so the saved theme applies without a flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})()`;

export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable — theme still switches for this visit */
    }
  }

  return (
    <Button
      type="button"
      variant="glass"
      size="icon"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
      className={cn("relative", className)}
    >
      <Sun className="rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
