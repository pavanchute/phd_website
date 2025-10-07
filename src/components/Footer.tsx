import React from 'react';
import { Hammer, Phone, Mail, MapPin, ArrowUp, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2.5 rounded-lg">
                <Hammer className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Pavan Home Decor</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Established in 2021 and based in Nagpur, Pavan Home Decor offers end-to-end services in construction, interior design, plumbing, and electrical work. We specialize in transforming residential and commercial spaces with a blend of technical expertise, creative design, and reliable execution.
            </p>
            <div className="space-y-4">
              <a href="tel:+918390248234" className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+91 8390248234</span>
              </a>
              <a href="mailto:pavanhomedecor@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>pavanhomedecor@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="bg-white/5 p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Nagpur, Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'What We Do', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-500 transition-colors hover:translate-x-1 inline-block transform duration-200 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-500 transition-colors cursor-pointer font-medium">Residential Construction</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer font-medium">Commercial Buildings</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer font-medium">Home Renovations</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer font-medium">Interior Finishing</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer font-medium">Plumbing Services</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer font-medium">Electrical Work</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Pavan Home Decor. All rights reserved.
              </p>
              <div className="h-4 w-px bg-gray-700 hidden md:block"></div>
              <p className="text-gray-500 text-sm">Built with excellence and dedication</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@purushottamchute5219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-2.5 rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/pavan_home_decor_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-2.5 rounded-lg hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5 text-white group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
