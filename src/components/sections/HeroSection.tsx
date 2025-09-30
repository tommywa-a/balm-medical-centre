import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Clock, Stethoscope, Users, Activity } from 'lucide-react';

const stats = [
  { id: 1, name: 'Years of Service', value: `${new Date().getFullYear() - parseInt(siteConfig.about.established)}+`, icon: Clock },
  { id: 2, name: 'Expert Doctors', value: `${siteConfig.medicalTeam.doctors.length + 1}+`, icon: Stethoscope },
  { id: 3, name: 'Patients Served', value: '10,000+', icon: Users },
  { id: 4, name: 'Success Rate', value: '99%', icon: Activity },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bmc_doctor_on_desk.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Exceptional Healthcare <span className="text-blue-300">for Your Family</span>
            </h1>
            <h2 className="mt-12 text-2xl tracking-tight text-white font-bold max-w-2xl mx-auto lg:mx-0">
              Welcome to <span className="text-blue-300">{siteConfig.hospitalName}</span>. Providing trusted healthcare 24 hours a day in Woji, Port Harcourt.
            </h2>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Compassionate Care • Modern Facilities • Experienced Team
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6">
                <Link href="/contact">Book an Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/bmc_logo.png"
              alt="Caring doctor at Balm Medical Centre"
              fill
              className="h-full w-full object-contain"
              // priority
            />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative bg-white/10 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-blue-600 text-white mb-3">
                  <stat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-blue-100">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
