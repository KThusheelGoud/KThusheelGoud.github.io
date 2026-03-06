import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1d3a] to-[#0a0e27]" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[#14b8a6] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/30 text-[#14b8a6] text-sm tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-white via-[#14b8a6] to-white bg-clip-text text-transparent">
              Kagitha Thusheel Goud
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            Full-Stack Developer & Creative Technologist crafting elegant digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-[#14b8a6] text-[#0a0e27] rounded-lg transition-all duration-300 hover:bg-[#0d9488] hover:shadow-lg hover:shadow-[#14b8a6]/30 hover:-translate-y-0.5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-transparent border-2 border-[#14b8a6] text-[#14b8a6] rounded-lg transition-all duration-300 hover:bg-[#14b8a6]/10 hover:-translate-y-0.5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#14b8a6] cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
