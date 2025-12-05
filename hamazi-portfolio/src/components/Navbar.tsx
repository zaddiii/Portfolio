
"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
            window.addEventListener("scroll", onScroll);
                return () => window.removeEventListener("scroll", onScroll);
                  }, []);

                    return (
                        <nav
                              className={`fixed top-0 w-full z-50 px-[10%] py-4 flex items-center justify-end transition-all 
                                    ${scrolled ? "bg-[#1a1c28e6] shadow-lg" : "bg-[#1a1c28cc]"}`}
                                        >
                                              <div className="flex space-x-6">
                                                      <a href="#home" className="hover:text-red-400 transition">Home</a>
                                                              <a href="#about" className="hover:text-red-400 transition">About</a>
                                                                      <a href="#projects" className="hover:text-red-400 transition">Projects</a>
                                                                              <a href="#contact" className="hover:text-red-400 transition">Contact</a>
                                                                                    </div>
                                                                                        </nav>
                                                                                          );
                                                                                          }