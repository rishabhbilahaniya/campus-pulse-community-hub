import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const Route = createFileRoute("/student/register")({
  head: () => ({
    meta: [
      { title: "Student Registration — CampusX" },
      { name: "description", content: "Create a CampusX student account to make your voice heard on campus." },
      { property: "og:title", content: "Student Registration — CampusX" },
      { property: "og:description", content: "Join CampusX as a student." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AuthShell sideTitle="Your campus, your voice" sideText="Report problems, support ideas and join drives that make campus better.">
      <AuthForm
        role="student"
        mode="register"
        title="Create student account"
        subtitle="It only takes a minute."
        fields={[
          { name: "fullName", label: "Full name", placeholder: "Your name", autoComplete: "name" },
          { name: "email", label: "Campus email", type: "email", placeholder: "you@college.edu", autoComplete: "email" },
          { name: "studentId", label: "Student ID", placeholder: "e.g. 21CS045", half: true },
          { name: "year", label: "Year of study", placeholder: "e.g. 2nd year", half: true },
          { name: "college", label: "College / university", placeholder: "Your institution", autoComplete: "organization" },
          { name: "department", label: "Department", placeholder: "e.g. Computer Science" },
          { name: "password", label: "Password", type: "password", placeholder: "At least 8 characters", autoComplete: "new-password", minLength: 8 },
        ]}
      />
    </AuthShell>
  ),
});
