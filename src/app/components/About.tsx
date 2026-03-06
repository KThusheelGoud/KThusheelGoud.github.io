import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1d3a]/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-6 inline-block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                I'm Kagitha Thusheel Goud, a passionate Computer Science student pursuing my B.Tech at 
                St. Peter's Engineering College (JNTUH) with a CGPA of 9.38. I have a strong foundation 
                in full-stack development and a keen interest in building real-world applications that 
                combine technical depth with practical impact.
              </p>

              <p
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                My journey includes developing projects such as a Peer Learning Portal using Java and 
                Spring Boot, an Attentiveness Monitoring System with Python and TensorFlow, and several 
                frontend applications like Flat Booking and URL Shortener. I enjoy solving problems 
                through clean code, thoughtful design, and continuous learning.
              </p>

              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                I completed a 2‑month internship as a Backend Developer Intern at DeepTrics Software Solutions 
                (July–September 2025), where I focused on backend systems and architecture, delivered high‑quality 
                code, and quickly adapted to new technologies. Alongside, I hold certifications in Google Cloud, 
                Python (Cisco), and Java (DataFlair), and actively contribute as an NSS volunteer.
              </p>
              {/* <p
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                I'm a passionate full-stack developer with a keen eye for design and a love for creating
                seamless digital experiences. With over 5 years of experience in the industry, I specialize
                in building modern web applications that combine aesthetic beauty with functional excellence.
              </p>
              <p
                className="text-lg text-gray-300 mb-6 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                My approach blends technical expertise with creative problem-solving, always focusing on
                delivering solutions that not only meet business objectives but also delight users. I believe
                in clean code, thoughtful design, and continuous learning.
              </p>
              <p
                className="text-lg text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p> */}
            </motion.div>

                        <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Experience */}
              <div className="bg-[#12152e] p-6 rounded-lg border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:-translate-y-1">
                <h3
                  className="text-xl text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Experience
                </h3>
                <p className="text-gray-300 text-[16px]" style={{ fontFamily: "'Crimson Pro', serif" }}>
                  Backend Developer Intern at DeepTrics Software Solutions (July–Sept 2025)
                </p>
              </div>

              {/* Projects */}
              <div className="bg-[#12152e] p-6 rounded-lg border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:-translate-y-1">
                <h3
                  className="text-xl text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Projects
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "'Crimson Pro', serif" }}>
                  Peer Learning Portal, Attentiveness Monitoring System, Flat Booking, URL Shortener
                </p>
              </div>

              {/* Certifications */}
              <div className="bg-[#12152e] p-6 rounded-lg border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:-translate-y-1">
                <h3
                  className="text-xl text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Certifications
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "'Crimson Pro', serif" }}>
                  Google Cloud, Cisco Python, DataFlair Java, HackerRank Problem‑Solving
                </p>
              </div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-[#12152e] p-6 rounded-lg border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <h3
                  className="text-xl text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Experience
                </h3>
                <p className="text-gray-300 text-[16px]" style={{ fontFamily: "'Crimson Pro', serif" }}>3+ years building scalable web applications</p>
              </div>

              <div className="bg-[#12152e] p-6 rounded-lg border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <h3
                  className="text-xl text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >Projects</h3>
                <p className="text-gray-300" style={{ fontFamily: "'Crimson Pro', serif" }}>10+ successful projects delivered</p>
              </div>

              <div className="bg-[#12152e] p-6 rounded-lg border border-[#14b8a6]/20 hover:border-[#14b8a6]/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <h3
                  className="text-xl text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Clients
                </h3>
                <p className="text-gray-300" style={{ fontFamily: "'Crimson Pro', serif" }}>
                  Working with startups to Fortune 500 companies
                </p>
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
