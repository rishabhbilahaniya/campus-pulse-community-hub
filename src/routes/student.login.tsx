import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/student/login")({
  head: () => ({
    meta: [
      { title: "Student Login — CampusX" },
      { name: "description", content: "Log in to CampusX as a student to report problems, vote and volunteer." },
      { property: "og:title", content: "Student Login — CampusX" },
      { property: "og:description", content: "Student sign-in for CampusX." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthShell sideTitle="Welcome back, student" sideText="Your reports, votes and volunteer drives — all in one place.">
      <AuthForm
        role="student"
        mode="login"
        title="Student login"
        subtitle="Sign in with your campus email."
        fields={[
          { name: "email", label: "Campus email", type: "email", placeholder: "you@college.edu", autoComplete: "email" },
          { name: "password", label: "Password", type: "password", placeholder: "••••••••", autoComplete: "current-password" },
        ]}
      />
    </AuthShell>
  ),
});
