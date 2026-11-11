import { toast } from "sonner";

/** Tells the user, honestly, that a feature is not built yet. */
export function comingSoon(feature: string) {
  toast(`${feature} is coming soon`, {
    description: "This part of CampusX is designed but not connected yet.",
  });
}
