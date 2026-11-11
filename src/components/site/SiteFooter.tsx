import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { StatusBadge } from "./StatusBadge";

const columns = [
  {
    title: "Explore",
    links: [
      { to: "/features", label: "Features" },
      { to: "/how-it-works", label: "How It Works" },
      { to: "/community-map", label: "Community Map" },
      { to: "/ai-assistant", label: "AI Assistant" },
      { to: "/about", label: "About Us" },
    ],
  },
  {
    title: "Accounts",
    links: [
      { to: "/student/login", label: "Student login" },
      { to: "/student/register", label: "Student registration" },
      { to: "/teacher/login", label: "Teacher login" },
      { to: "/teacher/register", label: "Teacher registration" },
    ],
  },
  {
    title: "Dashboards",
    links: [
      { to: "/dashboard/student", label: "Student dashboard" },
      { to: "/dashboard/teacher", label: "Teacher dashboard" },
      { to: "/dashboard/admin", label: "Admin dashboard" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t bg-muted/60">
      <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Your Campus. Your Voice. A Better Tomorrow.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <StatusBadge status="live" /> pages &amp; navigation
            <StatusBadge status="soon" /> accounts, reports &amp; AI
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 font-display text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} CampusX</span>
          <span>Design preview — features marked “Coming soon” are not yet functional.</span>
        </div>
      </div>
    </footer>
  );
}
