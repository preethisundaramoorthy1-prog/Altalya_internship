// components/Footer.tsx
import { LucideGithub, LucideTwitter, LucideInstagram, LucideLinkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid: 1 column mobile, 2 columns tablet, 4 columns desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Altalya</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Learn AI, ML, Robotics & more. Transform your skills for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-3">Courses</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/courses/ai-ml" className="hover:text-white transition">AI & ML</a></li>
              <li><a href="/courses/robotics" className="hover:text-white transition">Robotics</a></li>
              <li><a href="/courses/web-dev" className="hover:text-white transition">Web Dev</a></li>
              <li><a href="/courses/data-science" className="hover:text-white transition">Data Science</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4 mt-1">
              <a href="https://github.com" target="_blank" className="hover:text-white transition"><LucideGithub size={24} /></a>
              <a href="https://twitter.com" target="_blank" className="hover:text-white transition"><LucideTwitter size={24} /></a>
              <a href="https://instagram.com" target="_blank" className="hover:text-white transition"><LucideInstagram size={24} /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition"><LucideLinkedin size={24} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Altalya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}