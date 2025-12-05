
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
            <head>
                    <meta charSet="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                    <title>Hamazi Portfolio</title>

                                            {/* Tailwind CDN */}
                                                    <script src="https://cdn.tailwindcss.com"></script>

                                                            {/* Google Fonts */}
                                                                    <link
                                                                              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&family=Space+Grotesk:wght@500&display=swap"
                                                                                        rel="stylesheet"
                                                                                                />

                                                                                                        {/* Custom global styles */}
                                                                                                                <style>{`
                                                                                                                          /* Scroll behavior */
                                                                                                                                    html { scroll-behavior: smooth; }

                                                                                                                                              /* Fade-in animation for sections */
                                                                                                                                                        [data-fade] {
                                                                                                                                                                    opacity: 0;
                                                                                                                                                                                transform: translateY(20px);
                                                                                                                                                                                            transition: opacity 0.6s ease, transform 0.6s ease;
                                                                                                                                                                                                      }
                                                                                                                                                                                                                [data-fade].visible {
                                                                                                                                                                                                                            opacity: 1;
                                                                                                                                                                                                                                        transform: translateY(0);
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                            /* Font families */
                                                                                                                                                                                                                                                                      .font-poppins { font-family: 'Poppins', sans-serif; }
                                                                                                                                                                                                                                                                                .font-space-grotesk { font-family: 'Space Grotesk', sans-serif; }
                                                                                                                                                                                                                                                                                        `}</style>
                                                                                                                                                                                                                                                                                              </head>
                                                                                                                                                                                                                                                                                                    <body className="bg-gradient-to-br from-[#1a1c28] to-[#23263a] text-white overflow-x-hidden font-poppins">
                                                                                                                                                                                                                                                                                                            {children}
                                                                                                                                                                                                                                                                                                                  </body>
                                                                                                                                                                                                                                                                                                                      </html>
                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                        }