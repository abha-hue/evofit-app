"use client";

import { useEffect } from "react";

export function useScrollAnimate() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(
      "section:not(:first-of-type), .group, h2, form"
    );
    animatedElements.forEach((el) => {
      el.classList.add("scroll-animate");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
