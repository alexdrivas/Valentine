"use client";

import { cn } from "~/lib/utils";
import { useScrollReveal } from "./useScrollReveal";
import { PaperChoice } from "./PaperChoice";

export function ValentineQuestion({
  onYes,
  disabled,
}: {
  onYes: () => void;
  disabled: boolean;
}) {
  const question = useScrollReveal(0.3);
  const choice = useScrollReveal(0.2);

  return (
    <section className="mt-40 sm:mt-48 space-y-16 sm:space-y-20">
      <h2
        ref={question.ref}
        className={cn(
          "text-center text-4xl sm:text-5xl font-serif text-valentine-text transition-all duration-700",
          question.visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
        )}
      >
        Will you be my Valentine?
      </h2>

      <div
        ref={choice.ref}
        className={cn(
          "transition-all duration-700",
          choice.visible ? "opacity-100" : "opacity-0 translate-y-4"
        )}
      >
        <PaperChoice onYes={onYes} disabled={disabled} />
      </div>
    </section>
  );
}
