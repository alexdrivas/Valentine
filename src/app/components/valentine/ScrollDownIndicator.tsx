"use client";

import { ChevronDown } from "lucide-react";

export function ScrollDownIndicator() {
  return (
    <div className="flex flex-col items-center gap-3 py-6 animate-scroll-bounce">
      <span className="text-3xl sm:text-5xl font-handwritten text-valentine-text-soft">
        scroll down
      </span>
      <ChevronDown
        className="h-10 w-10 sm:h-12 sm:w-12 text-valentine-text-soft"
        strokeWidth={2}
        aria-hidden
      />
    </div>
  );
}
