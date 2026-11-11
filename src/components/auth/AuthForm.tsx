import { Link } from "@tanstack/react-router";
import { GraduationCap, Hourglass, Presentation } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusBadge } from "@/components/site/StatusBadge";
import { cn } from "@/lib/utils";

export type AuthField = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  half?: boolean;
  minLength?: number;
};

type Role = "student" | "teacher";

const roleMeta = {
  student: { icon: GraduationCap, label: "Student", dashboard: "/dashboard/student", login: "/student/login", register: "/student/register" },
  teacher: { icon: Presentation, label: "Teacher", dashboard: "/dashboard/teacher", login: "/teacher/login", register: "/teacher/register" },
} as const;

export function AuthForm({
  role,
  mode,
  title,
  subtitle,
  fields,
}: {
  role: Role;
  mode: "login" | "register";
  title: string;
  subtitle: string;
  fields: AuthField[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const meta = roleMeta[role];
  const other = role === "student" ? roleMeta.teacher : roleMeta.student;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast(mode === "login" ? "Sign-in isn't available yet" : "Registration isn't available yet", {
      description: "Accounts are coming soon. Nothing you typed was sent or saved.",
    });
  }

  return (
    <div className="animate-fade-up">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-glow">
          <meta.icon className="size-5" />
        </span>
        <StatusBadge status="soon" label="Accounts coming soon" />
      </div>
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>

      <form onSubmit={onSubmit} className="glass-strong mt-8 grid grid-cols-2 gap-4 rounded-3xl p-6 sm:p-7">
        {fields.map((f) => (
          <div key={f.name} className={cn("flex flex-col gap-2", f.half ? "col-span-2 sm:col-span-1" : "col-span-2")}>
            <Label htmlFor={f.name}>{f.label}</Label>
            <Input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              minLength={f.minLength}
              required
              className="h-11 rounded-xl bg-background/80"
            />
          </div>
        ))}
        {mode === "login" && (
          <div className="col-span-2 -mt-1 flex justify-end">
            <button type="button" onClick={() => toast("Password reset is coming soon")} className="cursor-pointer text-xs font-medium text-primary hover:underline">
              Forgot password?
            </button>
          </div>
        )}
        <Button type="submit" variant="hero" size="lg" className="col-span-2 mt-1">
          {mode === "login" ? "Log in" : "Create account"}
        </Button>
        {submitted && (
          <div className="col-span-2 flex items-start gap-2 rounded-xl bg-violet-soft px-3 py-2.5 text-xs text-foreground/80 animate-fade-up">
            <Hourglass className="mt-0.5 size-3.5 shrink-0 text-violet" />
            <span>
              {mode === "login" ? "Signing in" : "Creating accounts"} isn't connected yet, so nothing was sent or saved.{" "}
              <Link to={meta.dashboard} className="font-semibold text-primary hover:underline">Preview the dashboard</Link> instead.
            </span>
          </div>
        )}
      </form>

      <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
        {mode === "login" ? (
          <p>New here? <Link to={meta.register} className="font-semibold text-primary hover:underline">Create a {meta.label.toLowerCase()} account</Link></p>
        ) : (
          <p>Already registered? <Link to={meta.login} className="font-semibold text-primary hover:underline">Log in</Link></p>
        )}
        <p>
          Are you a {other.label.toLowerCase()}?{" "}
          <Link to={mode === "login" ? other.login : other.register} className="font-semibold text-primary hover:underline">
            {other.label} {mode === "login" ? "login" : "registration"}
          </Link>
        </p>
      </div>
    </div>
  );
}
