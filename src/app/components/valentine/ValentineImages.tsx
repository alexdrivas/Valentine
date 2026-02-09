"use client";

import Image from "next/image";
import { cn } from "~/lib/utils";
import { useScrollReveal } from "./useScrollReveal";
import { IMAGE_SRCS } from "./constants";

export function ValentineImages() {
  const img1 = useScrollReveal(0.1);
  const img2 = useScrollReveal(0.1);
  const img3 = useScrollReveal(0.1);

  return (
    <section className="flex flex-col items-center gap-24">
      <div
        ref={img1.ref}
        className={cn(
          "w-full max-w-md transition-all duration-1000 ease-out",
          img1.visible ? "animate-slide-up-in opacity-100" : "opacity-0 translate-y-[40%]"
        )}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={IMAGE_SRCS[0]!}
            alt="Us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
            unoptimized
          />
        </div>
      </div>
      <div
        ref={img2.ref}
        className={cn(
          "w-full max-w-md transition-all duration-1000 ease-out",
          img2.visible ? "animate-slide-up-in opacity-100" : "opacity-0 translate-y-[40%]"
        )}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={IMAGE_SRCS[1]!}
            alt="Us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
            unoptimized
          />
        </div>
      </div>
      <div
        ref={img3.ref}
        className={cn(
          "w-full max-w-md transition-all duration-1000 ease-out",
          img3.visible ? "animate-slide-up-in opacity-100" : "opacity-0 translate-y-[40%]"
        )}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={IMAGE_SRCS[2]!}
            alt="Us"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 448px"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
