import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function AboutPage() {
  const { hospitalName, about, medicalTeam, services, operatingHours } = siteConfig;
  
  // Calculate years of experience
  const yearsExperience = new Date().getFullYear() - parseInt(about.established);
  const stats = [
    { label: 'Years of Experience', value: yearsExperience.toString() },
    { label: 'Expert Doctors', value: (medicalTeam.doctors.length + 1).toString() },
    { label: 'Dedicated Nurses', value: medicalTeam.nurses.length.toString() },
    { label: 'Medical Services', value: services.length.toString() },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
          <Image
            src="/images/bmc_logo.png"
            alt="About Balm Medical Centre"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About {hospitalName}
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            {about.mission}
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 text-gray-600 space-y-6">
                <p>
                  Founded in {about.established}, {hospitalName} (formerly known as Miracle Medical Center) began its journey in Gokana, Ogoni, Rivers State, with a vision to provide accessible, high-quality healthcare to the community.
                </p>
                <p>
                  {about.description}
                </p>
                <p className="font-semibold text-blue-900">
                  {hospitalName} is fully registered with the Rivers State Ministry of Health (License: {siteConfig.license.number}) and operates under the highest medical standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/hospital-building.jpg"
                  alt="Balm Medical Centre Building"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/bmc_receptionist.jpg"
                  alt="Our friendly reception staff"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/bmc_doctor_on_desk.jpg"
                  alt="Our experienced medical team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/bmc_medical_bed.jpg"
                  alt="Comfortable patient rooms"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mb-8 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="w-12 h-1 bg-blue-600 mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800">Operating Hours:</h4>
                  <p className="text-gray-600">{operatingHours.general}</p>
                  <p className="text-gray-600">{operatingHours.emergency}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <div className="w-12 h-1 bg-green-600 mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading healthcare provider in our region, recognized for clinical excellence, innovative treatments, and outstanding patient experiences, while making a positive impact on the health and well-being of our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by the Community
            </h2>
            <p className="mt-3 text-xl text-blue-100">
              Delivering exceptional healthcare to the Port Harcourt community for over {yearsExperience} years
            </p>
          </div>
          <div className="mt-10 text-center">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 py-8">
                  <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-2 text-base font-medium text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                      Excellence
                    </h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      We are committed to the highest standards of medical care, continuously improving our services through innovation and evidence-based practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                      Compassion
                    </h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      We treat every patient with kindness, empathy, and respect, understanding that healthcare is as much about caring as it is about curing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                      Integrity
                    </h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      We uphold the highest ethical standards, ensuring honesty, transparency, and accountability in all our actions and decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                      Community
                    </h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      We are an integral part of our community, committed to improving the health and well-being of all those we serve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                      Innovation
                    </h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      We embrace new ideas and technologies that enhance patient care and improve health outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                      Privacy
                    </h3>
                    <p className="mt-2 text-base text-gray-600 text-center">
                      We protect the confidentiality and security of patient information with the highest standards of data protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Medical Team
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
              Experienced professionals dedicated to your health and well-being
            </p>
          </div>

          {/* Medical Director */}
          <div className="bg-blue-50 rounded-xl p-6 mb-16 shadow-md">
            <div className="md:flex">
              <div className="md:flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                <div className="h-48 w-48 mx-auto md:mx-0 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  <svg className="h-32 w-32 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Medical Director</div>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{medicalTeam.director.name}</h3>
                <p className="mt-1 text-blue-700 font-medium">{medicalTeam.director.title}</p>
                <p className="mt-3 text-gray-600">
                  {medicalTeam.director.bio}
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-500">License: </span>
                  <span className="text-sm text-gray-700">{medicalTeam.director.license}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors */}
          <div className="grid gap-8 md:grid-cols-2">
            {medicalTeam.doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="h-10 w-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-700">{doctor.specialty}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>License: {doctor.license}</p>
                    <p className="mt-1">Contact: {doctor.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nursing Team */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Nursing Team</h3>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {medicalTeam.nurses.map((nurse, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-gray-900">{nurse.name}</h4>
                      <p className="text-sm text-gray-600">{nurse.role} • {nurse.license}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to experience our care?</span>
            <span className="block">Book an appointment today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Our team is here to provide you with the best possible healthcare experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>
            <a
              href="tel:08039377136"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0803 937 7136
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
