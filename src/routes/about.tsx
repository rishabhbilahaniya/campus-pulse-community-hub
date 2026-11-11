import { createFileRoute, Link } from "@tanstack/react-router";
import { Accessibility, Eye, Heart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StatusBadge } from "@/components/site/StatusBadge";
import { toneIcon, type Tone } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — CampusX" },
      { name: "description", content: "CampusX gives every student a voice in shaping a smarter, safer and better campus. Learn our mission, values and roadmap." },
      { property: "og:title", content: "About Us — CampusX" },
      { property: "og:description", content: "Our mission: Your Campus. Your Voice. A Better Tomorrow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values: { icon: typeof Heart; tone: Tone; title: string; text: string }[] = [
  { icon: Heart, tone: "emerald", title: "Community first", text: "The people who use the campus every day should help decide what gets fixed." },
  { icon: Eye, tone: "sky", title: "Transparency", text: "Every report has a visible status, so nobody is left wondering." },
  { icon: Lock, tone: "violet", title: "Privacy & safety", text: "Anonymous reporting and careful access rules protect the people who speak up." },
  { icon: Accessibility, tone: "cyan", title: "Accessible to all", text: "Clear language, readable design and support for every device." },
];

const roadmap: { title: string; status: "live" | "soon" }[] = [
  { title: "Design, pages and navigation", status: "live" },
  { title: "Student and teacher accounts", status: "soon" },
  { title: "Issue reporting with photos and location", status: "soon" },
  { title: "Community voting and volunteering", status: "soon" },
  { title: "AI triage and campus assistant", status: "soon" },
  { title: "Live community map and dashboards", status: "soon" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title={<>Your Campus. Your Voice. <span className="text-gradient">A Better Tomorrow.</span></>}
        description="CampusX exists so that every student, teacher and staff member can help make campus life smarter, safer and better — with AI doing the heavy lifting."
      />
      <Section className="pt-4">
        <SectionHeading eyebrow="Our values" title="What guides us" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="glass h-full rounded-3xl p-6">
                <span className={cn("grid size-12 place-items-center rounded-2xl", toneIcon[v.tone])}><v.icon className="size-6" /></span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/50">
        <SectionHeading eyebrow="Roadmap" title="Where CampusX is today" description="We're honest about what's ready and what's next." />
        <ul className="glass-strong mx-auto mt-12 flex max-w-2xl flex-col divide-y rounded-3xl">
          {roadmap.map((r) => (
            <li key={r.title} className="flex items-center justify-between gap-4 px-6 py-4">
              <span className="text-sm font-medium">{r.title}</span>
              <StatusBadge status={r.status} />
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/student/register">Join CampusX</Link></Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
