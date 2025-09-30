import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Format services from siteConfig
  const services = siteConfig.services.map(service => ({
    name: service,
    path: `/services#${service.toLowerCase().replace(/\s+/g, '-')}`
  }));

  const contactInfo = [
    { 
      icon: <MapPin className="w-5 h-5 flex-shrink-0" />,
      text: siteConfig.address
    },
    { 
      icon: <Phone className="w-5 h-5 flex-shrink-0" />,
      text: siteConfig.phone
    },
    { 
      icon: <Mail className="w-5 h-5 flex-shrink-0" />,
      text: siteConfig.email
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 text-center lg:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-2 lg:mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">{siteConfig.hospitalName}</h3>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services with compassion and excellence. Our dedicated team is committed to your well-being.
            </p>
            <div className="flex space-x-4 mt-4">
              {siteConfig.socialMedia.facebook && (
                <a href={siteConfig.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {siteConfig.socialMedia.twitter && (
                <a href={siteConfig.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
              )}
              {siteConfig.socialMedia.instagram && (
                <a href={siteConfig.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {siteConfig.socialMedia.linkedin && (
                <a href={siteConfig.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-4 lg:mb-8">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-4 lg:mb-8">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link href={service.path} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-4 lg:mb-8">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-0.5">
                    {item.icon}
                  </span>
                  <span className="text-gray-300 text-left">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Privacy and Disclaimer - Full Width */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 border-t border-gray-800 pt-6 mt-4 text-center">
          <h3 className="text-lg font-semibold mb-3 text-blue-400">Important Notice</h3>
          <p className="text-gray-300 text-sm">
            Information on this website is for general purposes only and does not replace professional medical advice. 
            Balm Medical Centre Ltd complies with applicable Nigerian data protection regulations. 
            Personal information submitted through contact forms will be used solely for responding to enquiries.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Balm Medical Centre. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
