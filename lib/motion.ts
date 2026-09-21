"use client";

import { useReducedMotion, type Variants } from "framer-motion";

/** Sequential reveal for a handful of stacked elements, driven by a `custom` index (e.g. hero copy). */
export function useFadeUp(): Variants {
  const reduce = useReducedMotion();
  if (reduce) {
    return { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
  }
  return {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
    }),
  };
}

/** Parent container that staggers its animated children into view. */
export function useStagger(staggerChildren = 0.12): Variants {
  const reduce = useReducedMotion();
  return {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : staggerChildren } },
  };
}

/** Child item paired with useStagger — fades/rises into place, or appears instantly if motion is reduced. */
export function useItemFade(): Variants {
  const reduce = useReducedMotion();
  if (reduce) {
    return { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
  }
  return {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
}
