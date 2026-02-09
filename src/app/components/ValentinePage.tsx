"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "~/lib/utils";
import {
  ValentineMessage,
  ScrollDownIndicator,
  ValentineImages,
  ValentineQuestion,
  CelebrationOverlay,
} from "./valentine";

export default function ValentinePage() {
  const [answered, setAnswered] = useState(false);
  const [celebration, setCelebration] = useState(false);
  const [calm, setCalm] = useState(false);
  const celebrationRef = useRef(false);

  const triggerCelebration = useCallback(() => {
    if (celebrationRef.current) return;
    celebrationRef.current = true;
    setAnswered(true);
    setCelebration(true);
  }, []);

  const handleCelebrationDone = useCallback(() => {
    setCalm(true);
    setCelebration(false);
  }, []);

  return (
    <>
      <main
        className={cn(
          "min-h-screen transition-colors duration-1000",
          calm ? "valentine-bg-calm" : "valentine-bg"
        )}
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-10 pb-32 font-handwritten">
          {/* First view: full viewport — text lower so gap to scroll hint is normal */}
          <section className="min-h-screen flex flex-col pt-20 sm:pt-20">
            <div className="flex-1 pt-20 sm:pt-20">
              <ValentineMessage />
            </div>
            <ScrollDownIndicator />
          </section>

          {/* Images — below the fold, user must scroll to see */}
          <section className="pt-12">
            <ValentineImages />
          </section>

          <ValentineQuestion
            onYes={triggerCelebration}
            disabled={answered}
          />

          {calm && (
            <section className="mt-24 text-center">
              <p className="font-handwritten text-3xl sm:text-4xl text-valentine-rose">
                Always and forever. 💕
              </p>
              <p className="font-handwritten text-3xl sm:text-4xl text-valentine-rose mt-2">
                Love, Alex
              </p>
            </section>
          )}
        </div>
      </main>

      <CelebrationOverlay
        active={celebration}
        calming={calm}
        onDone={handleCelebrationDone}
      />
    </>
  );
}
