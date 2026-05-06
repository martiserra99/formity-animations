export type Status = FormStatus | SubmittedStatus;

export type FormStatus = {
  type: "form";
  submitting: boolean;
};

export type SubmittedStatus = {
  type: "submitted";
};
