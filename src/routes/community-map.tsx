import { createFileRoute } from "@tanstack/react-router";
import { CampusMap } from "@/components/site/CampusMap";
import { PageHero } from "@/components/site/PageHero";
import { PreviewNotice } from "@/components/site/PreviewNotice";
import { Section } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/community-map")({
  head: () => ({
    meta: [
      { title: "Community Map — CampusX" },
      { name: "description", content: "Explore your campus on an interactive map of buildings, issue categories and community activity." },
      { property: "og:title", content: "Community Map — CampusX" },
      { property: "og:description", content: "An interactive map of your campus, its places and what's happening there." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityMapPage,
});

function CommunityMapPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Community map"
        title={<>See your campus <span className="text-gradient">at a glance</span></>}
        description="Filter by category and tap a place to learn what can be reported there."
      />
      <Section className="pt-4">
        <PreviewNotice className="mb-6">
          Filters and place selection work. The pins are example places on an illustrated campus — your real campus map and live reports will appear here once reporting launches.
        </PreviewNotice>
        <CampusMap />
      </Section>
    </SiteLayout>
  );
}
