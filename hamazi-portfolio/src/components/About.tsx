
"use client";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

export default function About() {
  const [avatar, setAvatar] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/devhamazi")
              .then((res) => res.json())
                    .then((data) => setAvatar(data.avatar_url))
                          .catch(() =>
                                  setAvatar("https://avatars.githubusercontent.com/u/9919?v=4")
                                        );
                                          }, []);

                                            const skills = [
                                                "HTML","CSS","JavaScript","React","Tailwind CSS","Typescript","Next.js",
                                                    "Node.js","Express.js","MongoDB","Render",
                                                        "GitHub Pages","Web3 / Blockchain"
                                                          ];

                                                            return (
                                                                <section id="about" className="py-20 px-[10%] text-center">
                                                                      <FadeIn>
                                                                              <h3 className="text-3xl font-bold font-[Space_Grotesk]">About Me</h3>

                                                                                      <img
                                                                                                src={avatar}
                                                                                                          alt="profile"
                                                                                                                    className="mx-auto w-36 h-36 rounded-full border-4 border-red-500 mt-6 shadow-xl"
                                                                                                                            />

                                                                                                                                    <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-7">
                                                                                                                                              I’m a passionate full stack developer focused on creating clean, responsive, and interactive
                                                                                                                                                        experiences on the web...
                                                                                                                                                                </p>

                                                                                                                                                                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                                                                                                                                                                                  {skills.map((s, i) => (
                                                                                                                                                                                              <span
                                                                                                                                                                                                            key={i}
                                                                                                                                                                                                                          className="bg-[#2a2d40] border border-white/10 px-4 py-2 rounded-md hover:bg-red-500 transition"
                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                    {s}
                                                                                                                                                                                                                                                                </span>
                                                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                        </FadeIn>
                                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                              }