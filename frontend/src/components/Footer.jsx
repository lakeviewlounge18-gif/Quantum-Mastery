import React from 'react';
import { Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { heroData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Story', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Free Guides', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Case Studies', href: '#' },
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Community', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#0f0f0f] border-t border-[#1a1a1a] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <img
                src={heroData.logo}
                alt="QTM"
                className="w-14 h-14 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(112,219,62,0.5)]"
              />
            </div>
            <p className="text-gray-500 mb-6 max-w-xs">
              Quantum Trading Mastery - Transform your trading journey with expert mentorship and proven strategies.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-gray-500 hover:bg-[#70DB3E] hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(112,219,62,0.4)]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#70DB3E] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#70DB3E] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#70DB3E] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#70DB3E] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-[#1a1a1a] mb-8">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#70DB3E]/20 transition-all duration-300">
              <Mail className="w-5 h-5 text-[#70DB3E]" />
            </div>
            <div>
              <p className="text-gray-600 text-xs">Email us</p>
              <p className="text-white text-sm group-hover:text-[#70DB3E] transition-colors duration-300">support@quantumtrading.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#70DB3E]/20 transition-all duration-300">
              <Phone className="w-5 h-5 text-[#70DB3E]" />
            </div>
            <div>
              <p className="text-gray-600 text-xs">Call us</p>
              <p className="text-white text-sm group-hover:text-[#70DB3E] transition-colors duration-300">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#70DB3E]/20 transition-all duration-300">
              <MapPin className="w-5 h-5 text-[#70DB3E]" />
            </div>
            <div>
              <p className="text-gray-600 text-xs">Location</p>
              <p className="text-white text-sm group-hover:text-[#70DB3E] transition-colors duration-300">Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1a1a1a]">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Quantum Trading Mastery. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Trading involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
