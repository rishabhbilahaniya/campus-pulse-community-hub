import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import campus from "@/assets/campus-hero.webp";
import { Logo } from "@/components/site/Logo";

export function AuthShell({
  children,
  sideTitle,
  sideText,
}: {
  children: ReactNode;
  sideTitle: string;
  sideText: string;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-mesh lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="relative"><Logo /></div>
        <div className="perspective-1000 relative">
          <img src={campus} alt="" width={1536} height={1152} className="mx-auto w-full max-w-xl animate-float-slow" />
        </div>
        <div className="glass-strong relative max-w-md rounded-3xl p-6">
          <h2 className="text-2xl font-bold">{sideTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sideText}</p>
        </div>
      </aside>
      <main className="relative flex flex-col px-5 py-8 sm:px-10">
        <div className="absolute inset-0 bg-mesh opacity-60 lg:hidden" aria-hidden />
        <div className="relative flex items-center justify-between">
          <div className="lg:hidden"><Logo /></div>
          <Link to="/" className="ml-auto flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </div>
        <div className="relative mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">{children}</div>
      </main>
    </div>
  );
}
