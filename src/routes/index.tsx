import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, CalendarDays, Compass, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AssistantPreview } from "@/components/site/AssistantPreview";
import { CampusVisual } from "@/components/site/CampusVisual";
import { FeatureCard } from "@/components/site/FeatureCard";
import { PreviewNotice } from "@/components/site/PreviewNotice";
import { ReportCard } from "@/components/site/ReportCard";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, Section, SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { StatusBadge } from "@/components/site/StatusBadge";
import { StepsTimeline } from "@/components/site/StepsTimeline";
import { VoteCard } from "@/components/site/VoteCard";
import { comingSoon } from "@/lib/coming-soon";
import { features, sampleReports, sampleVolunteering, sampleVotes, toneIcon } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusX — Making Every Campus Smarter, Safer & Better with AI" },
      {
        name: "description",
        content: "CampusX helps students and staff report campus problems, vote on priorities, volunteer and get AI help. Your Campus. Your Voice. A Better Tomorrow.",
      },
      { property: "og:title", content: "CampusX — Making Every Campus Smarter, Safer & Better with AI" },
      { property: "og:description", content: "Report campus problems, vote on priorities, volunteer and get AI help — all in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative -mt-20 overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-mesh" aria-hidden />
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:pb-24">
          <div className="flex flex-col items-start gap-7 animate-fade-up">
            <Eyebrow>Your Campus. Your Voice. A Better Tomorrow.</Eyebrow>
            <h1 className="text-[2.6rem] font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-[4.1rem]">
              Making Every Campus <span className="text-gradient">Smarter, Safer &amp; Better</span> with AI
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Report problems, support the ideas that matter, join volunteer drives and get instant help — one shared space
              for students, teachers and campus teams.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/student/login">
                  <Megaphone /> Report a Problem
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/community-map">
                  <Compass /> Explore Campus
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Reporting opens once student accounts launch. Hover the glowing pins to explore the campus.
            </p>
          </div>
          <div className="animate-fade-up [animation-delay:150ms]">
            <CampusVisual />
          </div>
        </div>
      </section>

      {/* Status legend */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass flex flex-col gap-3 rounded-2xl px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-foreground">CampusX is in early preview.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
            <span className="flex items-center gap-2"><StatusBadge status="live" /> Browsing &amp; navigation</span>
            <span className="flex items-center gap-2"><StatusBadge status="preview" /> Example content</span>
            <span className="flex items-center gap-2"><StatusBadge status="soon" /> Not built yet</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow="Features"
          title={<>Everything your campus needs to <span className="text-gradient">speak up and improve</span></>}
          description="Eight connected tools designed around how students and staff actually work."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <FeatureCard feature={f} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="soft" size="lg">
            <Link to="/features">See all features <ArrowRight /></Link>
          </Button>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-muted/50">
        <SectionHeading
          eyebrow="How it works"
          title="From problem to solved in four steps"
          description="A clear, transparent path that keeps everyone in the loop."
        />
        <div className="mt-14">
          <StepsTimeline />
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="glass" size="lg">
            <Link to="/how-it-works">Learn more <ArrowRight /></Link>
          </Button>
        </div>
      </Section>

      {/* Recent reports */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Recent campus reports"
          title="What a report looks like"
          description="Each report shows its category, place on campus and progress toward being fixed."
          action={
            <Button asChild variant="glass">
              <Link to="/community-map">View on map <ArrowRight /></Link>
            </Button>
          }
        />
        <PreviewNotice className="mt-8">
          These are example reports to show the design. Real reports from your campus will appear here once reporting launches.
        </PreviewNotice>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {sampleReports.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <ReportCard {...r} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Voting + Volunteering */}
      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-strong flex h-full flex-col gap-6 rounded-3xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold">Community voting</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Support ideas so the most important ones rise to the top.</p>
                </div>
                <StatusBadge status="preview" label="Try it" />
              </div>
              <div className="flex flex-col gap-3">
                {sampleVotes.map((v) => (
                  <VoteCard key={v.title} {...v} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Example ideas. Votes stay on your screen only and aren't saved.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-strong flex h-full flex-col gap-6 rounded-3xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold">Volunteer opportunities</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Lend a hand on projects that make campus better.</p>
                </div>
                <StatusBadge status="preview" />
              </div>
              <div className="flex flex-col gap-3">
                {sampleVolunteering.map((v) => (
                  <div key={v.title} className="flex items-center gap-4 rounded-2xl border bg-background/70 p-4">
                    <span className={cn("grid size-12 shrink-0 place-items-center rounded-xl", toneIcon[v.tone])}>
                      <CalendarDays className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">{v.title}</p>
                      <p className="text-xs text-muted-foreground">{v.description}</p>
                    </div>
                    <Button size="sm" variant="soft" onClick={() => comingSoon("Volunteer sign-up")}>Join</Button>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Example opportunities. Sign-ups open once accounts launch.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* AI assistant */}
      <Section className="overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col items-start gap-6">
              <Eyebrow>AI assistant</Eyebrow>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                A campus guide that's <span className="text-gradient">always on</span>
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ask how to report something, find the right office, or get help writing a clear description. The assistant
                will know your campus and guide you step by step.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-foreground/80">
                {["Helps you write clear, complete reports", "Answers questions about campus services", "Suggests the right category and department"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="grid size-6 place-items-center rounded-full bg-sky-soft text-primary"><Bot className="size-3.5" /></span>
                    {t}
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg">
                <Link to="/ai-assistant">Meet the assistant <ArrowRight /></Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <AssistantPreview />
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-aurora opacity-25 animate-gradient" aria-hidden />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Be part of a better campus</h2>
            <p className="text-primary-foreground/75">Create your account to be ready when reporting, voting and volunteering go live.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg"><Link to="/student/register">I'm a student</Link></Button>
              <Button asChild variant="glass" size="lg"><Link to="/teacher/register">I'm a teacher</Link></Button>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
