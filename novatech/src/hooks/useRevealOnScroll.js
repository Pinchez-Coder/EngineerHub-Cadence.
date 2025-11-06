import { useEffect, useRef } from "react";

export const useRevealOnScroll = (threshold = 0.2) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("opacity-100", "translate-y-0");
            element.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};