import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StepsTimeline } from "@/components/site/StepsTimeline";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — CampusX" },
      { name: "description", content: "Report, let AI sort it, vote as a community and watch staff resolve it. See how CampusX works step by step." },
      { property: "og:title", content: "How It Works — CampusX" },
      { property: "og:description", content: "Four clear steps from a campus problem to a fix." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorks,
});

const lifecycle = [
  { stage: "Submitted", text: "Your report is saved with its photo, place and category." },
  { stage: "In review", text: "The right teacher or department picks it up and may ask for details." },
  { stage: "In progress", text: "Work is underway. You'll see updates on the report." },
  { stage: "Resolved", text: "The issue is fixed and you can confirm it's sorted." },
];

const faqs = [
  { q: "Can I report something anonymously?", a: "Yes. Anonymous reporting is part of the design — staff will see the issue but not your name." },
  { q: "Who can see my report?", a: "Reports are visible to your campus community, while personal details stay with authorised staff only." },
  { q: "How does AI help?", a: "AI suggests a category and urgency, spots duplicate reports and helps you write a clear description. Staff always make the final decision." },
  { q: "Is CampusX live yet?", a: "Not yet. You can explore the design and pages today. Accounts, reporting, voting and the assistant are being built next." },
];

function HowItWorks() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="How it works"
        title={<>From a problem to a <span className="text-gradient">fix</span>, together</>}
        description="CampusX turns everyday frustrations into clear, trackable reports — and keeps everyone informed until they're solved."
      />
      <Section className="pt-6">
        <StepsTimeline />
      </Section>
      <Section className="bg-muted/50">
        <SectionHeading eyebrow="Report lifecycle" title="Always know where things stand" />
        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-brand opacity-50" aria-hidden />
          <ol className="flex flex-col gap-5">
            {lifecycle.map((l, i) => (
              <Reveal key={l.stage} delay={i * 90}>
                <li className="relative flex gap-5">
                  <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-brand font-display text-sm font-bold text-primary-foreground shadow-glow">{i + 1}</span>
                  <div className="glass flex-1 rounded-2xl p-5">
                    <h3 className="font-semibold">{l.stage}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{l.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="glass mx-auto mt-10 max-w-2xl rounded-3xl px-6">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/student/register">Create a student account <ArrowRight /></Link></Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
