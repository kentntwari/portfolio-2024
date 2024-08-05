import type { UseScrollOptions, ValueKeyframesDefinition } from "framer-motion";

import { scroll, animate } from "motion";

import { useEffect } from "react";

interface IFadeInOutProps {
  children: React.ReactNode;
  targetRefs: React.RefObject<HTMLElement>[];
  offset?: UseScrollOptions["offset"];
  opacity?: ValueKeyframesDefinition;
}

export function FadeInOut({
  children,
  targetRefs,
  offset,
  opacity,
}: IFadeInOutProps) {
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      targetRefs.forEach((targetRef) => {
        targetRef.current &&
          scroll(
            animate(targetRef.current, { opacity: opacity ?? [0, 1, 1, 0] }),
            {
              target: targetRef.current,
              offset: offset ?? [
                "start 0.9",
                "start 0.5",
                "start start",
                "end start",
              ],
            }
          );
      });
    }

    return () => {
      mounted = false;
    };
  }, []);

  return <>{children}</>;
}
