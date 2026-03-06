import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#1a1d3a] to-transparent" />
      
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
              Let's Connect
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] mx-auto mb-6" />
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#12152e] border border-[#14b8a6]/20 rounded-lg text-gray-300 focus:outline-none focus:border-[#14b8a6] transition-colors duration-300"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#12152e] border border-[#14b8a6]/20 rounded-lg text-gray-300 focus:outline-none focus:border-[#14b8a6] transition-colors duration-300"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#14b8a6] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#12152e] border border-[#14b8a6]/20 rounded-lg text-gray-300 focus:outline-none focus:border-[#14b8a6] transition-colors duration-300 resize-none"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-[#14b8a6] text-[#0a0e27] rounded-lg transition-all duration-300 hover:bg-[#0d9488] hover:shadow-lg hover:shadow-[#14b8a6]/30 flex items-center justify-center gap-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-[#12152e] p-8 rounded-xl border border-[#14b8a6]/20">
              <h3
                className="text-2xl text-[#14b8a6] mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:alex.morgan@example.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-[#14b8a6] transition-colors duration-300 group"
                  style={{ fontFamily: "'Crimson Pro', serif" }}
                >
                  <div className="w-12 h-12 bg-[#14b8a6]/10 rounded-lg flex items-center justify-center group-hover:bg-[#14b8a6]/20 transition-colors duration-300">
                    <Mail size={24} className="text-[#14b8a6]" />
                  </div>
                  <span>kagithathusheelgoud@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="bg-[#12152e] p-8 rounded-xl border border-[#14b8a6]/20">
              <h3
                className="text-2xl text-[#14b8a6] mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Follow Me
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/KThusheelGoud", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kagitha-thusheelgoud-0228b0334/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/thusheel", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-[#14b8a6]/10 rounded-lg flex items-center justify-center hover:bg-[#14b8a6] hover:scale-110 transition-all duration-300 group"
                  >
                    <social.icon size={24} className="text-[#14b8a6] group-hover:text-[#0a0e27]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#12152e] p-8 rounded-xl border border-[#14b8a6]/20">
              <h3
                className="text-2xl text-[#14b8a6] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Open for Opportunities
              </h3>
              <p
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: "'Crimson Pro', serif" }}
              >I'm currently available for freelance work and exciting collaborations. Let's create something amazing together!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
