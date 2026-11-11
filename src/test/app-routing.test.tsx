import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
const pages = [
  "/",
  "/features",
  "/how-it-works",
  "/community-map",
  "/ai-assistant",
  "/about",
  "/student/login",
  "/student/register",
  "/teacher/login",
  "/teacher/register",
  "/dashboard/student",
  "/dashboard/teacher",
  "/dashboard/admin",
];

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const path of pages) {
    it(`matches a page for ${path}`, () => {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});
