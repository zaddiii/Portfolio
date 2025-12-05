
"use client";
import FadeIn from "./FadeIn";

type Project = {
  title: string;
    desc: string;
      link: string;
        client?: boolean;
        };

        export default function Projects() {
          const projects: Project[] = [
              { title: "TON Blog", desc: "The Open Network (TON) blockchain blog for beginners.", link: "ton.html" },
                  { title: "Kronos IT Support", desc: "Professional tech support website built for a client — clean UI and responsive design.", link: "https://kronositsupport.github.io/KronosITsupport/", client: true },
                      { title: "Hamazi News", desc: "A clean, modern mini-news platform focused on global and political events.", link: "https://devhamazi.github.io/News/", client: true },
                          { title: "GameFi P2E Arena", desc: "A blockchain-based Play-to-Earn battle arena game with token rewards.", link: "https://devhamazi.github.io/RPG-Battle-Arena/" },
                              { title: "Online School Portal", desc: "Web-based results portal for students — entering/checking results online.", link: "https://online-school-portal.github.io/BPS/", client: true },
                                ];

                                  const openSafe = (url: string) => {
                                      window.open(url, "_blank", "noopener,noreferrer");
                                        };

                                          return (
                                              <section id="projects" className="py-20 px-[10%]">
                                                    <FadeIn>
                                                            <h3 className="text-3xl font-[Space_Grotesk] text-center mb-12">My Projects</h3>
                                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                                                              {projects.map((p, i) => (
                                                                                          <div
                                                                                                        key={i}
                                                                                                                      className="bg-[#2a2d40] rounded-xl p-6 flex flex-col justify-between text-center transition transform hover:-translate-y-2 hover:shadow-lg"
                                                                                                                                  >
                                                                                                                                                <h4 className="text-red-500 text-xl font-semibold mb-3">
                                                                                                                                                                {p.title} {p.client && <span className="text-gray-400 text-sm">(Client Project)</span>}
                                                                                                                                                                              </h4>
                                                                                                                                                                                            <p className="text-gray-300 mb-6">{p.desc}</p>
                                                                                                                                                                                                          <button
                                                                                                                                                                                                                          onClick={() => openSafe(p.link)}
                                                                                                                                                                                                                                          className="border-2 border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                        {p.client ? "Visit Site" : "View"}
                                                                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                            ))}

                                                                                                                                                                                                                                                                                                                      {/* Loading Placeholder */}
                                                                                                                                                                                                                                                                                                                                <div className="flex flex-col justify-center items-center bg-[#2a2d40] rounded-xl p-6">
                                                                                                                                                                                                                                                                                                                                            <div className="w-12 h-12 border-4 border-gray-500 border-t-red-500 rounded-full animate-spin"></div>
                                                                                                                                                                                                                                                                                                                                                        <p className="mt-4 text-gray-400">More projects loading soon...</p>
                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                </FadeIn>
                                                                                                                                                                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                      }