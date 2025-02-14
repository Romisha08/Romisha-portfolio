import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">AI-Logo-Generator </h3>
              <p className="text-gray-400 mb-4">
              A full-stack AI-powered logo generator features secure authentication via Clerk and provides a seamless, interactive logo creation experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Next.js", "Gemini","Clerk","HuggingFace.io","TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://drive.google.com/file/d/19aSkBAEUc3kUVpJuCKc6XPHySddJJjuf/view?usp=drive_link" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Romisha08/Ai-Logo-Generator" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Code →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">ECpedia</h3>
              <p className="text-gray-400 mb-4">
              Developed a full-stack academic resource platform that hosts PDFs for B.Tech Electronics and Communication Engineering subjects. The platform provides structured access to books, previous year questions, and course notes, enabling students to efficiently navigate their coursework across all semesters.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Typescript", "Astro", "Node.js", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://ecpedia-website.netlify.app/" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Romisha08/ECpedia_wesite" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Classic-Flappy-Bird</h3>
              <p className="text-gray-400 mb-4">
              A simple and my first game built using HTML Canvas and JavaScript. The goal is to guide the bird through gaps between pipes without hitting them or falling off the screen.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5 Canvas", "JavaScript", "CSS", ].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://classic-flappy-bird-game.vercel.app/" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Romisha08/Classic-Flappy-Bird-Game" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Code→
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Playlist Timer</h3>
              <p className="text-gray-400 mb-4">
              Developed a YouTube Playlist Duration Calculator that fetches and calculates the total runtime of a YouTube playlist using its URL, providing accurate time estimates for better content planning and management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["YoutubeAPI", "TailwindCSS", "Javascript", "React"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://youtube-playlist-timer.vercel.app/" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Romisha08/youtube-playlist-timer" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Code →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">FlowForge (Ongoing)</h3>
              <p className="text-gray-400 mb-4">
              A collaborative whiteboarding tool designed for teams, developers, and product managers to brainstorm, plan, and document ideas visually.
              The platform enables seamless collaboration, allowing users to sketch, diagram, and share ideas instantly with low-latency data synchronization powered by Convex.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "Convex", "TailwindCSS", "React","TypeScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Romisha08/flowforge" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Code →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Gamified Portfolio</h3>
              <p className="text-gray-400 mb-4">
              A Gamified Portfolio walk into an interactive 2D world where visitors can walk around, explore sections, and interact with NPCs to learn about your skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Kaboom.js", "Tiled Map Editor", "JavaScript", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://2d-gamifiedportfolio-git-main-romisha-biswas-projects.vercel.app" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Romisha08/2d-gamifiedportfolio" target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Code →
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-xl text-center justify-center ">Check out my GitHub for more projects.</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
