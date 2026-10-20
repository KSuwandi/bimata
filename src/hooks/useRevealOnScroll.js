import { useEffect } from "react";

const REVEAL_SELECTORS = [
  ".reveal",
  ".service-card",
  ".benefit-row",
  ".coverage-form-card",
  ".about-visual",
].join(", ");

export default function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTORS);

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
