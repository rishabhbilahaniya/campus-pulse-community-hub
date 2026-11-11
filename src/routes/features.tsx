import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Presentation, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/site/FeatureCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { features, toneIcon } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — CampusX" },
      { name: "description", content: "Smart reporting, AI triage, community voting, a campus map, volunteering and more — the CampusX toolkit." },
      { property: "og:title", content: "Features — CampusX" },
      { property: "og:description", content: "Eight connected tools to report, prioritise and fix campus problems together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});

const roles = [
  { icon: GraduationCap, tone: "sky" as const, title: "Students", text: "Report problems, vote on ideas, join volunteer drives and ask the assistant for help." },
  { icon: Presentation, tone: "emerald" as const, title: "Teachers", text: "Review reports from your department, post updates and organise volunteer activities." },
  { icon: ShieldCheck, tone: "violet" as const, title: "Admins", text: "Moderate reports, manage users and categories, and keep the whole campus on track." },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Features"
        title={<>Built for a campus that <span className="text-gradient">listens</span></>}
        description="Every tool below is designed and ready to be built. Each card shows its current status so you always know what works today."
      />
      <Section className="pt-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <FeatureCard feature={f} detailed />
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/50">
        <SectionHeading eyebrow="For everyone" title="One platform, three roles" description="Each person gets a space tailored to what they need to do." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="glass h-full rounded-3xl p-7">
                <span className={cn("grid size-12 place-items-center rounded-2xl", toneIcon[r.tone])}><r.icon className="size-6" /></span>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/how-it-works">See how it works <ArrowRight /></Link></Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
