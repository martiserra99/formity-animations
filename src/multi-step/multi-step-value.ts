// multi-step/multi-step-value.ts
import type { OnNext, OnBack } from "@formity/react";
import type { FormityStatus } from "@/types";

export interface MultiStepValue {
  onNext: OnNext;
  onBack: OnBack;
  status: FormityStatus;
}
