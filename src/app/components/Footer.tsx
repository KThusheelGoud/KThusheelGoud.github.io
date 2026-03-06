import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#14b8a6]/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-gray-400 flex items-center gap-2"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            Made with <Heart size={16} className="text-[#14b8a6] fill-[#14b8a6]" /> by Kagitha Thusheel Goud
          </p>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "'Crimson Pro', serif" }}>
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
