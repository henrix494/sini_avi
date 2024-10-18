"use client";
import React, { ReactElement, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Card({ children }: { children: ReactElement[] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  let mm = gsap.matchMedia();
  useLayoutEffect(() => {
    if (cardRef.current) {
      mm.add("(max-width: 800px)", () => {
        gsap.fromTo(
          cardRef?.current as any,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="border-2 border-[white] p-2 shadow-2xl rounded-xl hover:border-2 hover:border-[#7f193e] flex flex-col items-center h-auto max-w-[350px] mx-auto mb-10 "
    >
      {children}
    </div>
  );
}
