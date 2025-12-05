
"use client";

export default function Hero() {
  const scrollToContact = () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        };

          return (
              <section
                    id="home"
                          className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
                                style={{
                                        backgroundImage: `
                                                linear-gradient(rgba(26, 28, 40, 0.85), rgba(26, 28, 40, 0.95)),
                                                        url("https://raw.githubusercontent.com/devhamazi/Portfolio/81e7a5d718bb1b00187d9fcf58e73d5f94001677/Future%20artificial%20intelligence%20robot%20and%20cyborg_%20_%20Premium%20Photo.jpeg")
                                                              `,
                                                                    }}
                                                                        >
                                                                              <h1 className="text-4xl md:text-6xl font-[Space_Grotesk]">Hamazi</h1>
                                                                                    <h2 className="text-lg md:text-2xl text-red-400 mt-3">
                                                                                            Full Stack Developer | Web3 Builder
                                                                                                  </h2>
                                                                                                        <p className="text-gray-300 max-w-xl mt-4">
                                                                                                                Designing sleek interfaces, building responsive web apps, and experimenting with blockchain technologies.
                                                                                                                      </p>
                                                                                                                            <button
                                                                                                                                    onClick={scrollToContact}
                                                                                                                                            className="mt-8 bg-red-500 hover:bg-white hover:text-black transition px-8 py-3 rounded-lg font-semibold"
                                                                                                                                                  >
                                                                                                                                                          Contact Me
                                                                                                                                                                </button>
                                                                                                                                                                    </section>
                                                                                                                                                                      );
                                                                                                                                                                      }