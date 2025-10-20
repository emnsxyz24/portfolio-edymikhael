"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import { title } from "@/components/primitives";

gsap.registerPlugin(SplitText);

export const AnimatedGreeting = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let split: SplitText;

    const initAnimation = async () => {
      await document.fonts.ready;

      if (textRef.current) {
        split = new SplitText(textRef.current, {
          type: "lines",
        });

        gsap.from(split.lines, {
          duration: 0.8,
          opacity: 0,
          rotationX: -100,
          transformOrigin: "50% 50% -160px",
          ease: "power3.out",
          stagger: 0.2,
        });
      }
    };

    initAnimation();

    return () => {
      if (split) {
        split.revert();
      }
    };
  }, []);

  return (
    <div ref={textRef} className="text-left justify-center [perspective:500px]">
      <h1
        className={`${title()} text-5xl md:text-7xl lg:text-8xl leading-tight`}
      >
        Hello{" "}
        <span aria-label="waving hand" role="img">
          👋
        </span>{" "}
        <br />
        I'm Edy Mikhael -{" "}
      </h1>
      <h1
        className={`${title()} text-5xl md:text-7xl lg:text-8xl leading-tight`}
      >
        Fullstack Website Developer based on{" "}
      </h1>
      <h1
        className={`${title()} text-5xl md:text-7xl lg:text-8xl leading-tight`}
      >
        Medan, Indonesia.
      </h1>
    </div>
  );
};
