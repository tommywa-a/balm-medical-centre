import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Phone, Mail } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/bmc_waiting_area.jpg')] opacity-10"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to prioritize your health?</span>
            <span className="block text-blue-200">Book an appointment today.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Our team of healthcare professionals is ready to provide you with exceptional care. {siteConfig.operatingHours.emergency}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center text-center space-y-2">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-200" />
              <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="ml-2 text-blue-100 hover:text-white">
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-200" />
              <a href={`mailto:${siteConfig.email}`} className="ml-2 text-blue-100 hover:text-white">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
