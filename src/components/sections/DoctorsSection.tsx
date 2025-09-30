import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Stethoscope } from 'lucide-react';

type Doctor = {
  name: string;
  specialty: string;
  experience: string;
  description: string;
};

type DoctorsSectionProps = {
  doctors: Doctor[];
};

export default function DoctorsSection({ doctors }: DoctorsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Meet Our Expert Doctors
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our team of experienced healthcare professionals is dedicated to providing you with the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40">
                <div className="text-center p-6">
                  <div className="mx-auto bg-blue-100 rounded-full p-6 w-32 h-32 flex items-center justify-center mb-4">
                    <Stethoscope className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white text-sm font-medium">{doctor.experience} of experience</p>
                    <p className="text-white text-sm">{doctor.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-blue-600 font-medium">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link href="/doctors">
              Meet All Doctors
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
