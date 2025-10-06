import React from 'react';
import { Hammer, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Hammer className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Pavan Home Decor</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Established in 2021 and based in Nagpur, Pavan Home Decor offers end-to-end services in construction, interior design, plumbing, and electrical work. We specialize in transforming residential and commercial spaces with a blend of technical expertise, creative design, and reliable execution.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">+918390248234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">pavanhomedecor@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'What We Do', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-2"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors">Residential Construction</li>
              <li className="hover:text-white transition-colors">Commercial Buildings</li>
              <li className="hover:text-white transition-colors">Home Renovations</li>
              <li className="hover:text-white transition-colors">Repair & Maintenance</li>
              <li className="hover:text-white transition-colors">Interior Finishing</li>
              <li className="hover:text-white transition-colors">Emergency Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pavan Home Decor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
