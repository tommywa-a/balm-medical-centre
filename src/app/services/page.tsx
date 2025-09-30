import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { Stethoscope, HeartPulse, Syringe, Pill, Microscope, CalendarCheck, Phone } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const { services, operatingHours } = siteConfig;
  
  const serviceIcons = {
    "Obstetrics and Gynecology": <HeartPulse className="h-8 w-8 text-pink-600" />,
    "Surgery": <Scalpel className="h-8 w-8 text-blue-600" />,
    "General Practice and Family Medicine": <Stethoscope className="h-8 w-8 text-green-600" />,
    "Hospice and Follow-up Care": <HeartPulse className="h-8 w-8 text-purple-600" />,
    "Pharmacy": <Pill className="h-8 w-8 text-red-600" />,
    "Laboratory Services": <Microscope className="h-8 w-8 text-yellow-600" />
  };

  const serviceDetails = {
    "Obstetrics and Gynecology": {
      description: "Comprehensive women's health services including prenatal care, delivery, and gynecological care.",
      features: [
        "Prenatal and postnatal care",
        "Family planning and contraception",
        "Routine gynecological exams",
        "Minimally invasive gynecological surgery"
      ]
    },
    "Surgery": {
      description: "Advanced surgical procedures performed by experienced surgeons in a state-of-the-art facility.",
      features: [
        "General surgery",
        "Minimally invasive procedures",
        "Day surgery options",
        "Post-operative care"
      ]
    },
    "General Practice and Family Medicine": {
      description: "Primary healthcare services for the entire family, from infants to seniors.",
      features: [
        "Preventive care",
        "Chronic disease management",
        "Health screenings",
        "Vaccinations"
      ]
    },
    "Hospice and Follow-up Care": {
      description: "Compassionate care for patients with serious illnesses and their families.",
      features: [
        "Pain and symptom management",
        "Emotional and spiritual support",
        "Bereavement services",
        "Home care coordination"
      ]
    },
    "Pharmacy": {
      description: "Full-service pharmacy providing prescription medications and pharmaceutical care.",
      features: [
        "Prescription filling and refills",
        "Medication therapy management",
        "Over-the-counter medications",
        "Health and wellness products"
      ]
    },
    "Laboratory Services": {
      description: "Comprehensive diagnostic testing with accurate and timely results.",
      features: [
        "Blood tests",
        "Microbiology",
        "Clinical chemistry",
        "Hematology"
      ]
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" />
          <Image
            src="/images/bmc_medical_bed.jpg"
            alt="Medical Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Healthcare Services
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive medical care designed to meet all your health needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Specialized Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Quality healthcare services delivered with compassion and expertise
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service} className="group hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {serviceIcons[service as keyof typeof serviceIcons]}
                    </div>
                    <CardTitle className="text-xl">{service}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {serviceDetails[service as keyof typeof serviceDetails]?.description}
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    {serviceDetails[service as keyof typeof serviceDetails]?.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Appointment CTA */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">Ready to schedule an appointment?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                  Our team is here to provide you with the best possible healthcare experience.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:08039377136"
                    className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <Image
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="/images/bmc_receptionist.jpg"
                alt="Schedule an appointment"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-16">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Our Operating Hours
                </h2>
                <p className="mt-4 text-xl text-blue-100">
                  {operatingHours.general}
                </p>
                <div className="mt-8 flex items-center justify-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <CalendarCheck className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Emergency Services</h3>
                    <p className="text-blue-100">{operatingHours.emergency}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-blue-200">
                  {operatingHours.policy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add missing Scalpel icon component
function Scalpel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}
