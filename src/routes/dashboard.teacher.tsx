import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, ClipboardList, Inbox, MessageSquare, Settings, Users, CheckCircle2 } from "lucide-react";
import { DashboardShell, EmptyPanel, QuickAction, StatTile } from "@/components/dashboard/DashboardShell";
import { toneIcon } from "@/lib/content";

export const Route = createFileRoute("/dashboard/teacher")({
  head: () => ({
    meta: [
      { title: "Teacher Dashboard — CampusX" },
      { name: "description", content: "Review department reports, post updates and organise volunteering on CampusX." },
      { property: "og:title", content: "Teacher Dashboard — CampusX" },
      { property: "og:description", content: "Your CampusX workspace as a teacher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TeacherDashboard,
});

function TeacherDashboard() {
  return (
    <DashboardShell
      roleLabel="Teacher"
      greeting="Welcome, teacher"
      description="Reports from your department, student updates and activities you organise."
      nav={[
        { label: "Report inbox", icon: Inbox },
        { label: "Activities", icon: CalendarPlus },
        { label: "Students", icon: Users },
        { label: "Messages", icon: MessageSquare },
        { label: "Settings", icon: Settings },
      ]}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatTile label="Awaiting review" icon={Inbox} tone={toneIcon.sky} />
        <StatTile label="In progress" icon={ClipboardList} tone={toneIcon.violet} />
        <StatTile label="Resolved" icon={CheckCircle2} tone={toneIcon.emerald} />
        <StatTile label="Activities" icon={CalendarPlus} tone={toneIcon.cyan} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <QuickAction label="Review reports" icon={Inbox} tone={toneIcon.sky} />
        <QuickAction label="Post an update" icon={MessageSquare} tone={toneIcon.emerald} />
        <QuickAction label="Create an activity" icon={CalendarPlus} tone={toneIcon.violet} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <EmptyPanel title="Report inbox" icon={Inbox} text="Reports assigned to your department will appear here for review." />
        <EmptyPanel title="Your activities" icon={CalendarPlus} text="Volunteer activities you create will be listed here." />
      </div>
    </DashboardShell>
  );
}
