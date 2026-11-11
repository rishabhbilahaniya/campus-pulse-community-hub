import { Bot, Send, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";

const conversation = [
  { from: "user", text: "The Wi-Fi in the lab block keeps dropping. How do I report it?" },
  {
    from: "ai",
    text: "I can help you write that report. I'll file it under Wi-Fi & IT, pin it to the Science Lab Block and check if someone already reported it.",
  },
  { from: "user", text: "Great, can I keep it anonymous?" },
  { from: "ai", text: "Yes — you can choose to hide your name before submitting." },
] as const;

export function AssistantPreview() {
  return (
    <div className="glass-strong ring-gradient relative overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative grid size-10 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow">
            <Bot className="size-5" />
          </span>
          <div>
            <p className="font-display text-sm font-semibold">CampusX Assistant</p>
            <p className="text-xs text-muted-foreground">Example conversation</p>
          </div>
        </div>
        <StatusBadge status="soon" />
      </div>
      <div className="flex flex-col gap-3 p-5">
        {conversation.map((m, i) =>
          m.from === "user" ? (
            <div key={i} className="flex items-end justify-end gap-2">
              <p className="max-w-[80%] rounded-2xl rounded-br-md bg-navy px-4 py-2.5 text-sm text-primary-foreground">{m.text}</p>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                <User className="size-3.5" />
              </span>
            </div>
          ) : (
            <div key={i} className="flex items-end gap-2">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sky-soft text-primary">
                <Bot className="size-3.5" />
              </span>
              <p className="max-w-[80%] rounded-2xl rounded-bl-md border bg-background px-4 py-2.5 text-sm text-foreground">{m.text}</p>
            </div>
          ),
        )}
      </div>
      <div className="flex gap-2 border-t p-4">
        <Input disabled placeholder="The assistant isn't connected yet" className="rounded-full bg-muted/60" />
        <Button disabled size="icon" variant="hero" aria-label="Send">
          <Send />
        </Button>
      </div>
    </div>
  );
}
