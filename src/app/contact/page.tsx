import { EmailCTASection } from "@/components/contact-page-sections/email-cta-section";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

// executeCommand(`mv ${file.path}.new ${file.path}`);

export default function ContactPage() {
  const { hospitalName, address, phone, email, operatingHours } = siteConfig;

  // Get social media links from siteConfig and filter out empty ones
  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: siteConfig.socialMedia.facebook },
    { name: 'Twitter', icon: 'twitter', url: siteConfig.socialMedia.twitter },
    { name: 'Instagram', icon: 'instagram', url: siteConfig.socialMedia.instagram },
    { name: 'LinkedIn', icon: 'linkedin', url: siteConfig.socialMedia.linkedin },
  ].filter(social => social.url); // Only keep social links with URLs

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
          <Image
            src="/images/bmc_receptionist.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            We&apos;re here to help and answer any questions you might have.
          </p>
        </div>
      </div>

      {/* Contact Info & Email CTA */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12">
            {/* Contact Information */}
            <div className="mb-12 lg:mb-0 lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">{address}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      View on map
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">{phone}</p>
                    <p className="mt-1 text-sm text-gray-500">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">{email}</p>
                    <p className="mt-1 text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">{operatingHours.general}</p>
                    <p className="mt-1 text-sm text-gray-500">{operatingHours.emergency}</p>
                  </div>
                </div>
              </div>

              {socialLinks.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="text-gray-400 hover:text-blue-600"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{social.name}</span>
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <i className={`fab fa-${social.icon} text-xl`}></i>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Email CTA Section */}
            <EmailCTASection />
          </div>
        </div>
      </div>

      {/* Map & Location */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Location</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Visit us at our conveniently located facility
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.372117157629!2d7.042100315328251!3d4.85575139647902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMjAuNyJOIDfCsDAyJzMxLjUiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title={`${hospitalName} Location`}
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-lg font-medium text-gray-900">Getting Here</h3>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              We are conveniently located in the heart of Port Harcourt with easy access to public transportation and ample parking available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
