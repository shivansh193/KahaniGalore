// components/Navbar.tsx
'use client';

import { useState } from 'react';
import type { FC } from 'react';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
}

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    // CHANGE: Default background is purple (light mode).
    // The dark: prefix applies the dark charcoal background for dark mode.
    <nav className="bg-brand-purple dark:bg-dark-charcoal shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* No change needed here, logo looks good on both backgrounds */}
              <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <span className="ml-3 text-white font-bold text-xl font-bebas tracking-wide">
                CELESTA FIESTA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  // No change needed here, white text with yellow hover works on both backgrounds
                  className="text-white hover:text-bright-yellow px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out font-twinkle"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-bright-yellow focus:outline-none focus:text-bright-yellow"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          {/* CHANGE: Added dark mode background to the mobile menu */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-purple dark:bg-dark-charcoal">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-bright-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;