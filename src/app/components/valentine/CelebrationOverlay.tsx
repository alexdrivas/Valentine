"use client";

import { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
import { CELEBRATION_DURATION_MS } from "./constants";

export function CelebrationOverlay({
  active,
  calming,
  onDone,
}: {
  active: boolean;
  calming: boolean;
  onDone: () => void;
}) {
  const hasTriggeredDone = useRef(false);

  useEffect(() => {
    if (!active || hasTriggeredDone.current) return;
    const t = setTimeout(() => {
      hasTriggeredDone.current = true;
      onDone();
    }, CELEBRATION_DURATION_MS);
    return () => clearTimeout(t);
  }, [active, onDone]);

  if (!active && !calming) return null;

  const heartCount = 40;
  const confettiCount = 80;
  const colors = ["#ec4899", "#f472b6", "#f9a8d4", "#fce7f3", "#fb7185"];

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 pointer-events-none overflow-hidden",
        calming && "transition-opacity duration-1000 opacity-0"
      )}
      aria-hidden
    >
      {Array.from({ length: heartCount }).map((_, i) => (
        <span
          key={`heart-${i}`}
          className="absolute animate-float-heart text-2xl sm:text-3xl opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            opacity: active ? 0.9 : 0,
            transition: calming ? "opacity 1s" : undefined,
          }}
        >
          💕
        </span>
      ))}

      {Array.from({ length: confettiCount }).map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute w-2 h-2 animate-confetti-fall rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-20px",
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]!,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: "5s",
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: active ? 1 : 0,
            transition: calming ? "opacity 1s" : undefined,
          }}
        />
      ))}
    </div>
  );
}
