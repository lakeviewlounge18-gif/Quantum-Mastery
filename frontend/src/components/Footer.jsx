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
    <footer className="bg-[rgb(26,28,30)] border-t border-[rgb(63,63,63)] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={heroData.logo}
                alt="QTM"
                className="w-10 h-10 object-contain"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-[rgb(0,212,255)] to-[rgb(186,85,211)] bg-clip-text text-transparent">
                QTM
              </div>
            </div>
            <p className="text-[rgb(161,161,170)] mb-6 max-w-xs">
              Quantum Trading Mastery - Transform your trading journey with expert mentorship and proven strategies.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center text-[rgb(161,161,170)] hover:bg-gradient-to-r hover:from-[rgb(0,212,255)] hover:to-[rgb(186,85,211)] hover:text-white transition-all hover:-translate-y-1"
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
                    className="text-[rgb(161,161,170)] hover:text-[rgb(0,212,255)] transition-colors text-sm"
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
                    className="text-[rgb(161,161,170)] hover:text-[rgb(0,212,255)] transition-colors text-sm"
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
                    className="text-[rgb(161,161,170)] hover:text-[rgb(0,212,255)] transition-colors text-sm"
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
                    className="text-[rgb(161,161,170)] hover:text-[rgb(0,212,255)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-[rgb(63,63,63)] mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[rgb(0,212,255)]" />
            </div>
            <div>
              <p className="text-[rgb(161,161,170)] text-xs">Email us</p>
              <p className="text-white text-sm">support@quantumtrading.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[rgb(0,212,255)]" />
            </div>
            <div>
              <p className="text-[rgb(161,161,170)] text-xs">Call us</p>
              <p className="text-white text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[rgb(38,40,42)] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[rgb(0,212,255)]" />
            </div>
            <div>
              <p className="text-[rgb(161,161,170)] text-xs">Location</p>
              <p className="text-white text-sm">Dubai, UAE</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgb(63,63,63)]">
          <p className="text-[rgb(161,161,170)] text-sm mb-4 md:mb-0">
            © {currentYear} Quantum Trading Mastery. All rights reserved.
          </p>
          <p className="text-[rgb(161,161,170)] text-sm">
            Trading involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
