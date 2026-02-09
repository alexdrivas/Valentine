"use client";

import { cn } from "~/lib/utils";
import { useScrollReveal } from "./useScrollReveal";
import { TITLE, LINES } from "./constants";

export function ValentineMessage() {
  const title = useScrollReveal(0.2);
  const line1 = useScrollReveal(0.2);
  const line2 = useScrollReveal(0.2);
  const line3 = useScrollReveal(0.2);

  return (
    <div className="space-y-24">
      <h1
        ref={title.ref}
        className={cn(
          "text-5xl sm:text-7xl md:text-7xl font-handwritten text-valentine-text transition-all duration-700",
          title.visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
        )}
      >
        {TITLE}
      </h1>
      <p
        ref={line1.ref}
        className={cn(
          "text-5xl sm:text-7xl md:text-6xl text-valentine-text leading-relaxed transition-all duration-700 font-handwritten",
          line1.visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
        )}
      >
        {LINES[0]}
      </p>
      <p
        ref={line2.ref}
        className={cn(
          "text-5xl sm:text-7xl md:text-6xl text-valentine-text leading-relaxed transition-all duration-700 font-handwritten",
          line2.visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
        )}
      >
        {LINES[1]}
      </p>
      <p
        ref={line3.ref}
        className={cn(
          "text-5xl sm:text-7xl md:text-6xl text-valentine-text leading-relaxed transition-all duration-700 font-handwritten",
          line3.visible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
        )}
      >
        {LINES[2]}
      </p>
    </div>
  );
}
