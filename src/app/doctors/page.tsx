import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Phone, Mail, Stethoscope, BadgeCheck, Users, ClipboardList } from "lucide-react";
import Image from "next/image";

export default function DoctorsPage() {
  const { medicalTeam, hospitalName } = siteConfig;
  const { director, doctors, nurses } = medicalTeam;

  // Calculate years of experience for each doctor
  const getYearsOfExperience = (license: string) => {
    // Simple calculation based on license number (for demo purposes)
    // In a real app, you might want to store this information in your data
    const baseYear = 2000 + parseInt(license.substring(0, 2)) % 20;
    return new Date().getFullYear() - baseYear;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
          <Image
            src="/images/bmc_doctor_on_desk.jpg"
            alt="Our Medical Team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet Our Medical Team
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Experienced healthcare professionals dedicated to your well-being
          </p>
        </div>
      </div>

      {/* Medical Director */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Medical Director
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Leading our team with expertise and vision
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:flex-shrink-0 mb-8 md:mb-0 md:mr-8 flex justify-center">
                <div className="relative h-48 w-48 rounded-full bg-blue-100 border-4 border-white shadow-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-blue-400">
                    <Stethoscope className="h-20 w-20" />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start">
                  <h3 className="text-2xl font-bold text-gray-900">{director.name}</h3>
                  <BadgeCheck className="ml-2 h-5 w-5 text-blue-600" />
                </div>
                <p className="text-lg text-blue-700 font-medium mt-1">{director.title}</p>
                <p className="mt-4 text-gray-600">{director.bio}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={`tel:${director.phone}`}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {director.phone}
                  </a>
                  <a
                    href={`mailto:${director.email}`}
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {director.email}
                  </a>
                </div>
                <div className="mt-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <ClipboardList className="h-4 w-4 mr-1" />
                    License: {director.license}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Specialist Doctors
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Highly qualified professionals dedicated to your health
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <div className="h-48 w-full md:h-full md:w-48 bg-blue-100 flex items-center justify-center text-blue-400">
                      <Stethoscope className="h-16 w-16" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      <BadgeCheck className="ml-2 h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-blue-700 font-medium mt-1">{doctor.specialty}</p>
                    <p className="mt-3 text-sm text-gray-500">
                      <span className="font-medium">{getYearsOfExperience(doctor.license)}+</span> years of experience
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        {doctor.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                        {doctor.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <ClipboardList className="h-4 w-4 mr-2 text-gray-500" />
                        License: {doctor.license}
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="/appointment"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Book an appointment
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Nursing Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Nursing Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Compassionate caregivers dedicated to your comfort and recovery
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nurses.map((nurse, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{nurse.name}</h3>
                      <p className="text-sm text-blue-700">{nurse.role}</p>
                      <p className="text-xs text-gray-500 mt-1">License: {nurse.license}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Team */}
      <div className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Join Our Medical Team
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              We're always looking for talented healthcare professionals to join our team
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${siteConfig.hr.email}"`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
