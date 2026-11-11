import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Compass, FileText, Languages } from "lucide-react";
import { AssistantPreview } from "@/components/site/AssistantPreview";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StatusBadge } from "@/components/site/StatusBadge";
import { toneIcon, type Tone } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ai-assistant")({
  head: () => ({
    meta: [
      { title: "AI Assistant — CampusX" },
      { name: "description", content: "Meet the CampusX AI assistant: help writing reports, answers about campus services and guidance to the right office." },
      { property: "og:title", content: "AI Assistant — CampusX" },
      { property: "og:description", content: "A friendly AI guide for your campus — coming soon to CampusX." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssistantPage,
});

const abilities: { icon: typeof FileText; tone: Tone; title: string; text: string }[] = [
  { icon: FileText, tone: "sky", title: "Write better reports", text: "Turns a quick note into a clear, complete report with the right details." },
  { icon: Compass, tone: "emerald", title: "Find the right office", text: "Points you to the department or person who can actually help." },
  { icon: BookOpen, tone: "violet", title: "Answer campus questions", text: "Library hours, facilities, procedures — answered in plain language." },
  { icon: Languages, tone: "cyan", title: "Speak your language", text: "Ask in the language you're most comfortable with." },
];

const prompts = ["How do I report a broken projector?", "Where can I find volunteer drives this month?", "Who handles hostel maintenance?", "Help me describe a safety issue"];

function AssistantPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="AI assistant"
        title={<>Your always-on <span className="text-gradient">campus guide</span></>}
        description="The assistant is designed and on the way. Here's how it will look and what it will help you do."
      >
        <StatusBadge status="soon" label="Assistant coming soon" />
      </PageHero>
      <Section className="pt-4">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal><AssistantPreview /></Reveal>
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {abilities.map((a, i) => (
                <Reveal key={a.title} delay={i * 80}>
                  <div className="glass h-full rounded-3xl p-5">
                    <span className={cn("grid size-10 place-items-center rounded-xl", toneIcon[a.tone])}><a.icon className="size-5" /></span>
                    <h3 className="mt-4 font-semibold">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="glass rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Things you'll be able to ask</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {prompts.map((p) => (
                  <span key={p} className="rounded-full border bg-background px-3 py-1.5 text-xs text-foreground/80">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
