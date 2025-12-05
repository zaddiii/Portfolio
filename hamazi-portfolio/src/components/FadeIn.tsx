
"use client";
import { useEffect, useRef } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
            if (!el) return;

                const obs = new IntersectionObserver(
                      (entries) => {
                              entries.forEach((entry) => {
                                        if (entry.isIntersecting) {
                                                    el.classList.add("visible");
                                                                obs.unobserve(el);
                                                                          }
                                                                                  });
                                                                                        },
                                                                                              { threshold: 0.2 }
                                                                                                  );

                                                                                                      obs.observe(el);

                                                                                                          return () => obs.disconnect();
                                                                                                            }, []);

                                                                                                              return <div ref={ref} className="fade">{children}</div>;
                                                                                                              }