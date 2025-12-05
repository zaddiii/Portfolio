
"use client";

import FadeIn from "./FadeIn";

export default function Contact() {
  const socials = [
      { name: "GitHub", link: "https://github.com/hamazi", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" },
          { name: "LinkedIn", link: "https://linkedin.com/in/yourusername", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" },
              { name: "Email", link: "mailto:joelomoemmanuel96@gmail.com", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" },
                ];

                  const openSafe = (url: string) => {
                      window.open(url, "_blank", "noopener,noreferrer");
                        };

                          return (
                              <section id="contact" className="py-20 bg-[#1c1e2c] border-t border-gray-700">
                                    <FadeIn>
                                            <h3 className="text-3xl font-[Space_Grotesk] text-center mb-6">Contact Me</h3>
                                                    <p className="text-gray-300 text-center mb-10">Have a project or idea in mind? Let's collaborate!</p>
                                                            <div className="flex justify-center gap-8 flex-wrap">
                                                                      {socials.map((s, i) => (
                                                                                  <button
                                                                                                key={i}
                                                                                                              onClick={() => openSafe(s.link)}
                                                                                                                            className="transition transform hover:scale-110"
                                                                                                                                        >
                                                                                                                                                      <img src={s.icon} alt={s.name} className="w-9 h-9 filter brightness-90 hover:brightness-110" />
                                                                                                                                                                  </button>
                                                                                                                                                                            ))}
                                                                                                                                                                                    </div>
                                                                                                                                                                                          </FadeIn>
                                                                                                                                                                                              </section>
                                                                                                                                                                                                );
                                                                                                                                                                                                }