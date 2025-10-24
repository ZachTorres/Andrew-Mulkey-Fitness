import { FaInstagram, FaTiktok, FaYoutube, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uga-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-uga-red mb-4">
                ANDREW MULKEY
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering individuals to achieve their fitness goals through personalized training, science-based nutrition, and unwavering support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-uga-red transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-uga-red transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-uga-red transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-uga-red transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Connect</h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://www.instagram.com/andrewmulkeycoach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-uga-red transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@andrew.mulkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-uga-red transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCt_qkqdYfJ4JOLL5voOlXAg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-uga-red transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:andrew@mulkeyfitness.com"
                  className="hover:text-uga-red transition-colors"
                >
                  andrew@mulkeyfitness.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Andrew Mulkey Fitness. All rights reserved. Made with
              <FaHeart className="text-uga-red w-4 h-4" />
              for your transformation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
