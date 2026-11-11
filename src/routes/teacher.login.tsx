import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/teacher/login")({
  head: () => ({
    meta: [
      { title: "Teacher Login — CampusX" },
      { name: "description", content: "Log in to CampusX as a teacher to review reports and support your students." },
      { property: "og:title", content: "Teacher Login — CampusX" },
      { property: "og:description", content: "Teacher sign-in for CampusX." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthShell sideTitle="Welcome back, teacher" sideText="Review reports from your department and keep students in the loop.">
      <AuthForm
        role="teacher"
        mode="login"
        title="Teacher login"
        subtitle="Sign in with your staff email."
        fields={[
          { name: "email", label: "Staff email", type: "email", placeholder: "name@college.edu", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "current-password" },
        ]}
      />
    </AuthShell>
  ),
});
