import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/teacher/register")({
  head: () => ({
    meta: [
      { title: "Teacher Registration — CampusX" },
      { name: "description", content: "Create a CampusX teacher account to review reports and guide improvements." },
      { property: "og:title", content: "Teacher Registration — CampusX" },
      { property: "og:description", content: "Join CampusX as a teacher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthShell sideTitle="Lead a better campus" sideText="See what students raise, post updates and organise volunteer activities.">
      <AuthForm
        role="teacher"
        mode="register"
        title="Create teacher account"
        subtitle="Set up your staff profile."
        fields={[
          { name: "fullName", label: "Full name", placeholder: "Your name", autoComplete: "name" },
          { name: "email", label: "Staff email", type: "email", placeholder: "name@college.edu", autoComplete: "email" },
          { name: "employeeId", label: "Employee ID", placeholder: "e.g. FAC-1023", half: true },
          { name: "designation", label: "Designation", placeholder: "e.g. Assistant Professor", half: true },
          { name: "department", label: "Department", placeholder: "e.g. Physics" },
          { name: "password", label: "Password", type: "password", placeholder: "At least 8 characters", autoComplete: "new-password", minLength: 8 },
        ]}
      />
    </AuthShell>
  ),
});
