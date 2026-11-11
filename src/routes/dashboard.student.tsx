import { createFileRoute } from "@tanstack/react-router";
import { Bot, CalendarDays, FileText, HandHeart, Megaphone, Settings, ThumbsUp } from "lucide-react";
import { DashboardShell, EmptyPanel, QuickAction, StatTile } from "@/components/dashboard/DashboardShell";
import { toneIcon } from "@/lib/content";

export const Route = createFileRoute("/dashboard/student")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — CampusX" },
      { name: "description", content: "Track your reports, votes and volunteer activity on CampusX." },
      { property: "og:title", content: "Student Dashboard — CampusX" },
      { property: "og:description", content: "Your personal CampusX space as a student." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StudentDashboard,
});

function StudentDashboard() {
  return (
    <DashboardShell
      roleLabel="Student"
      greeting="Welcome, student"
      description="Your reports, votes and volunteer activity will live here."
      nav={[
        { label: "My reports", icon: FileText },
        { label: "Voting", icon: ThumbsUp },
        { label: "Volunteering", icon: HandHeart },
        { label: "AI assistant", icon: Bot },
        { label: "Settings", icon: Settings },
      ]}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="My reports" icon={FileText} tone={toneIcon.sky} />
        <StatTile label="Resolved" icon={Megaphone} tone={toneIcon.emerald} />
        <StatTile label="Votes given" icon={ThumbsUp} tone={toneIcon.violet} />
        <StatTile label="Volunteer drives" icon={HandHeart} tone={toneIcon.cyan} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <QuickAction label="Report a problem" icon={Megaphone} tone={toneIcon.sky} />
        <QuickAction label="Vote on ideas" icon={ThumbsUp} tone={toneIcon.emerald} />
        <QuickAction label="Find volunteering" icon={HandHeart} tone={toneIcon.violet} />
        <QuickAction label="Ask the assistant" icon={Bot} tone={toneIcon.cyan} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <EmptyPanel title="My recent reports" icon={FileText} text="You haven't reported anything yet. Your reports and their progress will show here." />
        <EmptyPanel title="Upcoming volunteering" icon={CalendarDays} text="Drives you sign up for will appear here." />
      </div>
    </DashboardShell>
  );
}
