import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Check } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center text-center lg:text-left">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About {siteConfig.hospitalName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {siteConfig.about.description}
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Established in {siteConfig.about.established}, we continue to serve our community with state-of-the-art facilities and advanced medical technology.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Learn more about us
              </Link>
            </div>
          </div>
          <div className="relative h-64 sm:h-96 lg:h-full">
            <Image
              src="/images/bmc_receptionist.jpg"
              alt="Friendly receptionist at Balm Medical Centre"
              fill
              className="rounded-lg object-cover shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
