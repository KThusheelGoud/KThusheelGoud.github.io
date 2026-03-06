import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Database, Rocket, Globe, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Java, Python, C, JavaScript (Basic)",
    color: "#14b8a6",
  },
  {
    icon: Database,
    title: "Databases & Query Languages",
    description: "MySQL, SQL",
    color: "#3b82f6",
  },
  {
    icon: Rocket,
    title: "Backend Development",
    description: "Spring Boot, REST APIs",
    color: "#ec4899",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "HTML, CSS, JavaScript",
    color: "#f59e0b",
  },
  {
    icon: Zap,
    title: "Data Science & ML",
    description: "Pandas, NumPy, TensorFlow/Keras, OpenCV, MediaPipe",
    color: "#10b981",
  },
  {
    icon: Palette,
    title: "Developer Tools",
    description: "Git, VS Code, Jupyter Notebook",
    color: "#8b5cf6",
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
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
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] mx-auto mb-6" />
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            A comprehensive toolkit for building modern digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-[#12152e] p-8 rounded-xl border border-[#14b8a6]/20 hover:border-[#14b8a6]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#14b8a6]/20"
            >
              {/* Hover gradient effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${skill.color} 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <skill.icon size={28} style={{ color: skill.color }} />
                </div>

                <h3
                  className="text-xl mb-3 transition-colors duration-300"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: isInView ? skill.color : "#ffffff",
                  }}
                >
                  {skill.title}
                </h3>

                <p
                  className="text-gray-400 leading-relaxed"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
