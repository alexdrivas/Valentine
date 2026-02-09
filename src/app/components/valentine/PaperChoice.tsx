"use client";

import { useCallback, useState } from "react";
import { cn } from "~/lib/utils";

export function PaperChoice({
  onYes,
  disabled,
}: {
  onYes: () => void;
  disabled: boolean;
}) {
  const [checked, setChecked] = useState(false);

  const handleYes = useCallback(() => {
    if (disabled) return;
    setChecked(true);
    onYes();
  }, [disabled, onYes]);

  return (
    <div
      className="relative mx-auto w-full max-w-lg rounded-xl bg-valentine-paper p-12 sm:p-16 shadow-lg"
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        transform: "rotate(-0.5deg)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-valentine-paper-line opacity-60"
            style={{ top: `${28 + i * 8}%` }}
          />
        ))}
      </div>

      <div className="relative flex flex-col gap-8 sm:gap-10">
        <label
          className={cn(
            "flex cursor-pointer items-center gap-4 font-handwritten text-3xl sm:text-4xl text-valentine-text transition",
            !disabled && "hover:opacity-90",
            disabled && "cursor-default"
          )}
          onClick={disabled ? undefined : handleYes}
        >
          <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded border-2 border-valentine-text/30 bg-white">
            {checked ? (
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8 text-valentine-yes animate-checkmark"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="30"
                strokeDashoffset="0"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
            ) : (
              <span className="sr-only">Yes</span>
            )}
          </span>
          <span className="font-handwritten">Yes</span>
        </label>

        <label className="flex cursor-default items-center gap-4 font-handwritten text-3xl sm:text-4xl text-valentine-text-soft select-none">
          <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded border-2 border-valentine-paper-line bg-valentine-cream">
            <span className="sr-only">No</span>
          </span>
          <span className="font-handwritten">No</span>
        </label>
      </div>
    </div>
  );
}
