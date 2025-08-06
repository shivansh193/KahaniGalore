// components/Footer.tsx
'use client';

import type { FC, ReactNode } from 'react';
import Link from 'next/link';

// --- TYPE DEFINITIONS ---
interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

interface QuickLinkItem {
  name: string;
  href: string;
}

interface ContactItem {
  icon: ReactNode;
  lines: string[];
  iconBgColor: string;
}

// --- COMPONENT DATA ---
const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>,
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" /></svg>,
  },
];

const quickLinks: QuickLinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const contactInfo: ContactItem[] = [
  {
    icon: <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>,
    lines: ['Sector 14, Gurugram', 'Haryana, India'],
    iconBgColor: 'bg-[#75c044]',
  },
  {
    icon: <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
    lines: ['+91 9876543210'],
    iconBgColor: 'bg-[#74dff6]',
  },
  {
    icon: <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>,
    lines: ['hello@kahanigalore.com'],
    iconBgColor: 'bg-[#f05656]',
  },
  {
    icon: <svg className="w-3 h-3 text-[#231f20]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>,
    lines: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: 11:00 AM - 6:00 PM'],
    iconBgColor: 'bg-[#fff572]',
  },
];


const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#231f20] to-[#8b6baf] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#74dff6] rounded-full flex items-center justify-center border-4 border-white mr-4">
                <span className="text-white font-bold text-2xl">KG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-bebas tracking-wider">KAHANI GALORE</h3>
                <p className="text-[#74dff6] text-sm font-twinkle">Where Magic Meets Creativity</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md font-twinkle">
              Creating unforgettable experiences for children through art, play, and imagination. We&apos;re dedicated to nurturing creativity and joy in every child who walks through our doors.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={`Follow us on ${link.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#74dff6] rounded-full flex items-center justify-center hover:bg-[#fff572] transition-colors duration-300 group"
                >
                  <div className="text-white group-hover:text-[#231f20]">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#fff572] font-bebas tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#74dff6] transition-colors duration-300 flex items-center group font-twinkle">
                    <span className="w-2 h-2 bg-[#75c044] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#fff572] font-bebas tracking-wide">CONTACT INFO</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-6 h-6 ${item.iconBgColor} rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed font-twinkle">
                      {item.lines.map((line, lineIndex) => (
                        <span key={lineIndex}>{line}<br /></span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-twinkle">
              © {currentYear} Kahani Galore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#74dff6] text-sm transition-colors duration-300 font-twinkle">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#74dff6] text-sm transition-colors duration-300 font-twinkle">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#74dff6] opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-[#fff572] opacity-5 animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 right-0 w-20 h-20 rounded-full bg-[#75c044] opacity-5 animate-pulse animation-delay-2000"></div>
    </footer>
  );
};

export default Footer;
