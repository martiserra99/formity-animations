// components/buttons/next-button.tsx
import type { ComponentPropsWithoutRef } from "react";

import { Button } from "../button";
import { useMultiStep } from "@/multi-step";

export function NextButton({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  const { status } = useMultiStep();
  return (
    <Button
      type="submit"
      variant="primary"
      disabled={status.submitting}
      {...props}
    >
      {status.submitting ? "Submitting..." : children}
    </Button>
  );
}
