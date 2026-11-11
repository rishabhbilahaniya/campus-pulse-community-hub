import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Flag, FolderTree, Settings, ShieldCheck, UserCog, Users } from "lucide-react";
import { DashboardShell, EmptyPanel, QuickAction, StatTile } from "@/components/dashboard/DashboardShell";
import { toneIcon } from "@/lib/content";

export const Route = createFileRoute("/dashboard/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — CampusX" },
      { name: "description", content: "Moderate reports, manage users and categories, and oversee campus activity on CampusX." },
      { property: "og:title", content: "Admin Dashboard — CampusX" },
      { property: "og:description", content: "The CampusX control centre for campus admins." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <DashboardShell
      roleLabel="Admin"
      greeting="Campus control centre"
      description="Moderation, people, categories and campus-wide insights in one place."
      nav={[
        { label: "Moderation", icon: Flag },
        { label: "Users & roles", icon: Users },
        { label: "Categories", icon: FolderTree },
        { label: "Insights", icon: BarChart3 },
        { label: "Settings", icon: Settings },
      ]}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Total reports" icon={Flag} tone={toneIcon.sky} />
        <StatTile label="Flagged" icon={ShieldCheck} tone={toneIcon.violet} />
        <StatTile label="Students" icon={Users} tone={toneIcon.emerald} />
        <StatTile label="Teachers" icon={UserCog} tone={toneIcon.cyan} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <QuickAction label="Moderate reports" icon={Flag} tone={toneIcon.sky} />
        <QuickAction label="Manage roles" icon={UserCog} tone={toneIcon.violet} />
        <QuickAction label="Edit categories" icon={FolderTree} tone={toneIcon.emerald} />
        <QuickAction label="View insights" icon={BarChart3} tone={toneIcon.cyan} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <EmptyPanel title="Moderation queue" icon={Flag} text="Reports that need attention will queue here." />
        <EmptyPanel title="Campus insights" icon={BarChart3} text="Trends by category and building will appear once real reports come in." />
      </div>
    </DashboardShell>
  );
}
