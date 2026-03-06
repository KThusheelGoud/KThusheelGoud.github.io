import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Flat-Booking Platform",
    description: "A modern, location-based flat booking platform with intuitive search, real-time filtering, and branded confirmation flow.",
    image: "https://web.meetingselect.com/hubfs/Hotel%20booking%20platform.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    gradient: "from-[#14b8a6] to-[#0d9488]",
    demo: "https://kthusheelgoud.github.io/flat-booking/",   // Live demo
    github: "https://github.com/KThusheelGoud/flat-booking"
  },
  {
    title: "College Peer Learning Portal",
    description: "A full-stack web app for peer-to-peer learning with role-based dashboards, session booking, and material sharing.",
    image: "https://www.commonlit.org/blog/content/images/size/w1200/2022/03/1__0I-MVK-hU_5po5gs_Gskw-2.jpg",
    tags: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JS"],
    gradient: "from-[#3b82f6] to-[#2563eb]",
    demo: "https://yourusername.github.io/flat-booking",   // Live demo
    github: "https://github.com/yourusername/flat-booking"
  },
  {
    title: "Attentiveness Monitoring System",
    description: "A computer vision app that detects yawning, drowsiness, and absence using OpenCV and TensorFlow.",
    image: "https://ai.google.dev/static/edge/mediapipe/images/solutions/examples/face_landmark.png",
    tags: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
    gradient: "from-[#8b5cf6] to-[#7c3aed]",
    demo: "https://yourusername.github.io/flat-booking",   // Live demo
    github: "https://github.com/yourusername/flat-booking"
  },
  {
    title: "Todo List",
    description: "A simple and efficient tool to shorten long URLs, with LocalStorage persistence and copy-to-clipboard functionality.",
    image: "https://iwork-online.com/wp-content/uploads/2022/12/url-shortner--e1672225433339.png",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-[#ec4899] to-[#db2777]",
    demo: "https://kthusheelgoud.github.io/URL-Shortener",   // Live demo
    github: "https://github.com/KThusheelGoud/url-shortener"
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1d3a]/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl mb-6 inline-block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] mx-auto mb-6" />
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            A selection of recent work that showcases my skills and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-[#12152e] rounded-xl overflow-hidden border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#14b8a6]/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="text-[#0a0e27]" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={20} className="text-[#0a0e27]" />
                    </a>
                  )}
                </div>
                {/* <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    <ExternalLink size={20} className="text-[#0a0e27]" />
                  </button>
                  <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    <Github size={20} className="text-[#0a0e27]" />
                  </button>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl mb-3 text-[#14b8a6]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-300 mb-4 leading-relaxed"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-[#14b8a6]/10 text-[#14b8a6] rounded-full border border-[#14b8a6]/30"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
