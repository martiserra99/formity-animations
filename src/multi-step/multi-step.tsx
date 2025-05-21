// multi-step/multi-step.tsx
import type { ReactNode } from "react";
import type { OnNext, OnBack } from "@formity/react";

import { useMemo } from "react";

import type { FormityStatus } from "@/types";
import { MultiStepContext } from "./multi-step-context";

interface MultiStepProps {
  onNext: OnNext;
  onBack: OnBack;
  status: FormityStatus;
  children: ReactNode;
}

export function MultiStep({
  onNext,
  onBack,
  status,
  children,
}: MultiStepProps) {
  const values = useMemo(
    () => ({ onNext, onBack, status }),
    [onNext, onBack, status],
  );
  return (
    <MultiStepContext.Provider value={values}>
      {children}
    </MultiStepContext.Provider>
  );
}
