import {
  Bot,
  Camera,
  HandHeart,
  Map,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  Activity,
  type LucideIcon,
} from "lucide-react";

export type Tone = "sky" | "cyan" | "emerald" | "violet" | "amber";

/** Literal class maps so Tailwind can see every class. */
export const toneIcon: Record<Tone, string> = {
  sky: "bg-sky-soft text-sky",
  cyan: "bg-cyan-soft text-cyan",
  emerald: "bg-emerald-soft text-emerald",
  violet: "bg-violet-soft text-violet",
  amber: "bg-amber-soft text-amber",
};
export const toneDot: Record<Tone, string> = {
  sky: "bg-sky",
  cyan: "bg-cyan",
  emerald: "bg-emerald",
  violet: "bg-violet",
  amber: "bg-amber",
};

export const mainNav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/community-map", label: "Community Map" },
  { to: "/ai-assistant", label: "AI Assistant" },
  { to: "/about", label: "About Us" },
] as const;

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
  details: string[];
};

export const features: Feature[] = [
  {
    title: "Smart Issue Reporting",
    description: "Report a broken light, leaking tap or unsafe path in seconds with a photo and location.",
    icon: Camera,
    tone: "sky",
    details: ["Photo and short description", "Pin the exact spot on campus", "Choose a category or let AI suggest one"],
  },
  {
    title: "AI Triage",
    description: "AI reads each report, suggests a category and urgency, and routes it to the right team.",
    icon: Sparkles,
    tone: "violet",
    details: ["Suggested category and urgency", "Duplicate report detection", "Routing to the right department"],
  },
  {
    title: "Community Voting",
    description: "Students upvote the issues that matter most so the biggest problems rise to the top.",
    icon: ThumbsUp,
    tone: "emerald",
    details: ["One vote per student", "Priority list shaped by the community", "Transparent ranking"],
  },
  {
    title: "Community Map",
    description: "See reports, safe routes and events on an interactive map of your campus.",
    icon: Map,
    tone: "cyan",
    details: ["Filter by category", "Building-level detail", "Safe-route overlays"],
  },
  {
    title: "Volunteer Hub",
    description: "Find clean-up drives, tutoring and campus projects that need helping hands.",
    icon: HandHeart,
    tone: "emerald",
    details: ["Browse open opportunities", "Sign up in one tap", "Track your contributions"],
  },
  {
    title: "AI Campus Assistant",
    description: "Ask about campus services, deadlines or how to report something, any time of day.",
    icon: Bot,
    tone: "sky",
    details: ["Answers about campus services", "Helps write clear reports", "Points you to the right office"],
  },
  {
    title: "Safe & Anonymous",
    description: "Report sensitive issues anonymously, with privacy built in from the start.",
    icon: ShieldCheck,
    tone: "violet",
    details: ["Optional anonymous reports", "Role-based access for staff", "Clear data handling"],
  },
  {
    title: "Resolution Tracking",
    description: "Follow every report from submitted to resolved, with updates from staff.",
    icon: Activity,
    tone: "cyan",
    details: ["Status timeline on each report", "Updates from staff", "Notifications when things change"],
  },
];

export const steps = [
  {
    title: "Report",
    description: "Snap a photo, add a short note and drop a pin where the problem is.",
    icon: Camera,
    tone: "sky" as Tone,
  },
  {
    title: "AI sorts it",
    description: "AI suggests a category and urgency and spots duplicates before they pile up.",
    icon: Sparkles,
    tone: "violet" as Tone,
  },
  {
    title: "Community votes",
    description: "Fellow students support the reports that matter, shaping what gets fixed first.",
    icon: ThumbsUp,
    tone: "emerald" as Tone,
  },
  {
    title: "Staff resolve",
    description: "Teachers and admins update progress until the issue is marked resolved.",
    icon: ShieldCheck,
    tone: "cyan" as Tone,
  },
];

export type ReportCategory = "Infrastructure" | "Safety" | "Cleanliness" | "Wi-Fi & IT" | "Events";

export const categoryTone: Record<ReportCategory, Tone> = {
  Infrastructure: "sky",
  Safety: "violet",
  Cleanliness: "emerald",
  "Wi-Fi & IT": "cyan",
  Events: "amber",
};

/** Example content only — shown with a "Sample" label until reporting launches. */
export const sampleReports: {
  title: string;
  category: ReportCategory;
  location: string;
  stage: "Submitted" | "In review" | "Resolved";
}[] = [
  { title: "Flickering lights on the library staircase", category: "Infrastructure", location: "Central Library", stage: "In review" },
  { title: "Poorly lit path behind the hostel blocks", category: "Safety", location: "Hostel walkway", stage: "Submitted" },
  { title: "Overflowing bins near the cafeteria terrace", category: "Cleanliness", location: "Cafeteria", stage: "Resolved" },
];

export const sampleVotes = [
  { title: "Add more water refill stations near the sports field", category: "Infrastructure" as ReportCategory },
  { title: "Extend library hours during exam weeks", category: "Events" as ReportCategory },
  { title: "Stronger Wi-Fi in the science lab block", category: "Wi-Fi & IT" as ReportCategory },
];

export const sampleVolunteering = [
  { title: "Campus green clean-up", description: "Help tidy the central park and plant new saplings.", tone: "emerald" as Tone },
  { title: "Peer study circles", description: "Guide first-year students through tricky subjects.", tone: "sky" as Tone },
  { title: "Accessibility walk-through", description: "Map ramps, lifts and barriers across campus buildings.", tone: "violet" as Tone },
];

/** Hotspots on the campus illustration, positioned in % of the image. */
export const campusSpots: {
  id: string;
  name: string;
  hint: string;
  x: number;
  y: number;
  category: ReportCategory;
}[] = [
  { id: "library", name: "Central Library", hint: "Study spaces, lighting, quiet zones", x: 46, y: 16, category: "Infrastructure" },
  { id: "lab", name: "Science Lab Block", hint: "Lab safety, equipment, Wi-Fi", x: 22, y: 30, category: "Wi-Fi & IT" },
  { id: "hostel", name: "Student Hostels", hint: "Night safety, maintenance", x: 76, y: 22, category: "Safety" },
  { id: "plaza", name: "Central Plaza", hint: "Events, gatherings, notices", x: 50, y: 41, category: "Events" },
  { id: "cafe", name: "Cafeteria", hint: "Hygiene, waste, seating", x: 78, y: 49, category: "Cleanliness" },
  { id: "sports", name: "Sports Field", hint: "Equipment, water points, lighting", x: 29, y: 59, category: "Infrastructure" },
  { id: "park", name: "Campus Park", hint: "Green drives, benches, paths", x: 58, y: 70, category: "Cleanliness" },
];
