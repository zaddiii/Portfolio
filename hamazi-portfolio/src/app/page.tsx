
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
      <main className="font-poppins bg-gradient-to-br from-[#1a1c28] to-[#23263a] text-white overflow-x-hidden">
            {/* Navbar */}
                  <Navbar />

                        {/* Hero Section */}
                              <Hero />

                                    {/* About Section */}
                                          <About />

                                                {/* Projects Section */}
                                                      <Projects />

                                                            {/* Contact Section */}
                                                                  <Contact />
                                                                      </main>
                                                                        );
                                                                        }