// app.tsx
import { useCallback, useState } from "react";

import { Formity, type OnReturn } from "@formity/react";

import { End } from "./components/end";

import { schema, type Values, type Params } from "./schema";

import type { Status } from "./types";

export default function App() {
  const [status, setStatus] = useState<Status>({
    type: "formity",
    submitting: false,
  });

  const onReturn = useCallback<OnReturn<Values>>(async (output) => {
    setStatus({ type: "formity", submitting: true });

    // Show output in the console
    console.log(output);

    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStatus({ type: "end" });
  }, []);

  if (status.type === "end") {
    return (
      <End onStart={() => setStatus({ type: "formity", submitting: false })} />
    );
  }

  return (
    <Formity<Values, object, Params>
      schema={schema}
      params={{ status }}
      onReturn={onReturn}
    />
  );
}
