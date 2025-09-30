'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact Us', path: '/contact' },
  ] as const;
  
  // Add phone number from siteConfig
  const phoneNumber = siteConfig.phone.replace(/\D/g, ''); // Remove non-numeric characters

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            <Image src={siteConfig.logo} alt={`${siteConfig.hospitalName} Logo`} width={50} height={50} />
            <div className="flex items-center gap-2">
              <span>{siteConfig.hospitalName.split(' ')[0]}</span>
              <span className="text-green-600">{siteConfig.hospitalName.split(' ').slice(1).join(' ')}</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-2 px-1 text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone number - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-4 py-2 rounded-md transition-colors ${
                    pathname === link.path 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          
          {/* Phone number - Mobile */}
          <div className="mt-4">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors w-full"
            >
              <Phone className="w-4 h-4" />
              Call Us: {siteConfig.phone}
            </a>
          </div>
        </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
