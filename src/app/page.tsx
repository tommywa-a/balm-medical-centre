import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { HeartPulse, Stethoscope, Clock, Users, Activity, Baby, Syringe, Pill, Microscope, UserCheck } from 'lucide-react';

// Direct imports for all sections
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DoctorsSection from '@/components/sections/DoctorsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';

const doctors = [
  {
    name: siteConfig.medicalTeam.director.name,
    specialty: siteConfig.medicalTeam.director.title,
    experience: '15+ years',
    image: '/images/bmc_doctor_on_desk.jpg',
    description: siteConfig.medicalTeam.director.bio
  },
  ...siteConfig.medicalTeam.doctors.map(doctor => ({
    name: doctor.name,
    specialty: doctor.specialty,
    experience: '10+ years',
    image: '/images/doctors/' + doctor.name.toLowerCase().replace(/\s+/g, '-') + '.jpg',
    description: `Licensed ${doctor.specialty} with extensive experience in patient care.`
  }))
];

// const stats = [
//   { id: 1, name: 'Years of Service', value: `${new Date().getFullYear() - parseInt(siteConfig.about.established)}+`, icon: Clock },
//   { id: 2, name: 'Expert Doctors', value: `${siteConfig.medicalTeam.doctors.length + 1}+`, icon: Stethoscope },
//   { id: 3, name: 'Nursing Staff', value: `${siteConfig.medicalTeam.nurses.length}+`, icon: Users },
//   { id: 4, name: 'Specialties', value: `${siteConfig.services.length}+`, icon: Activity },
// ];

const testimonials = [
  {
    id: 1,
    name: 'James Ojo',
    role: 'Patient',
    content: 'The care I received at Balm Medical Centre was exceptional. The doctors took the time to listen to my concerns and provided excellent treatment.',
    rating: 5,
    image: '/images/testimonials/person1.jpg'
  },
  {
    id: 2,
    name: 'Maria Davis',
    role: 'Patient',
    content: 'The staff was incredibly kind and professional. The facilities are clean and modern. Highly recommend this medical centre!',
    rating: 5,
    image: '/images/testimonials/person2.jpg'
  },
  {
    id: 3,
    name: 'Amaka Chinemere',
    role: 'Patient',
    content: 'Quick service and knowledgeable doctors. They made me feel comfortable throughout my treatment.',
    rating: 4,
    image: '/images/testimonials/person3.jpg'
  },
];

export default function Home() {
  const services = siteConfig.services.map((service: string) => {
    // Map service names to Lucide icons
    const getIcon = (serviceName: string) => {
      const iconClass = "w-8 h-8 text-blue-600";
      const iconProps = { className: iconClass };
      
      const iconMap: {[key: string]: JSX.Element} = {
        'obstetrics and gynecology': <Baby {...iconProps} />,
        'surgery': <Syringe {...iconProps} />,
        'general practice and family medicine': <UserCheck {...iconProps} />,
        'hospice and follow-up care': <HeartPulse {...iconProps} />,
        'pharmacy': <Pill {...iconProps} />,
        'laboratory services': <Microscope {...iconProps} />
      };
      
      const defaultIcon = <Stethoscope {...iconProps} />;
      
      // Find a matching icon (case insensitive)
      const normalizedService = serviceName.toLowerCase();
      return iconMap[normalizedService] || defaultIcon;
    };

    // Map service names to descriptions
    const getDescription = (serviceName: string): string => {
      const descriptions: Record<string, string> = {
        'Obstetrics and Gynecology': 'Comprehensive women\'s health services including prenatal care, delivery, and gynecological services.',
        'Surgery': 'Advanced surgical procedures with modern techniques and minimal recovery time.',
        'General Practice and Family Medicine': 'Primary healthcare for the whole family, from infants to seniors.',
        'Hospice and Follow-up Care': 'Compassionate end-of-life care and ongoing support for patients and families.',
        'Pharmacy': 'Fully stocked pharmacy with a wide range of medications and professional consultation.',
        'Laboratory Services': 'State-of-the-art diagnostic testing and laboratory services for accurate results.'
      };
      return descriptions[serviceName] || 'Professional medical services provided by our expert team.';
    };

    return {
      title: service,
      description: getDescription(service),
      icon: getIcon(service)
    };
  });

  const features = [
    {
      title: '24/7 Availability',
      description: siteConfig.operatingHours.general
    },
    {
      title: 'Experienced Specialists',
      description: `Our team includes ${siteConfig.medicalTeam.doctors.length + 1} experienced doctors across various specialties.`
    },
    {
      title: 'Patient-Centered Care',
      description: 'Personalized treatment plans tailored to your unique health needs and goals.'
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art medical equipment and comfortable facilities for your care.'
    },
    {
      title: 'Comprehensive Services',
      description: `From ${siteConfig.services[0].toLowerCase()} to ${siteConfig.services[siteConfig.services.length - 1].toLowerCase()}, we've got you covered.`
    },
    {
      title: 'Emergency Services',
      description: siteConfig.operatingHours.emergency
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Secondary Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
          <Image
            src="/images/bmc_medical_bed.jpg"
            alt="Balm Medical Centre building"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your Health is Our Top Priority
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              At {siteConfig.hospitalName}, we provide exceptional healthcare services with compassion and expertise. Our dedicated team is committed to your well-being.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-8 transition-colors"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection features={features} />

      {/* Doctors Section */}
      <DoctorsSection doctors={doctors} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
