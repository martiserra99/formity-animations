// types.ts
export type Status = FormityStatus | EndStatus;

export type FormityStatus = {
  type: "formity";
  submitting: boolean;
};

export type EndStatus = {
  type: "end";
};
