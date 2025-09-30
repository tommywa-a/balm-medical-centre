import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Balm Medical Centre - Quality Healthcare Services',
  description: 'Balm Medical Centre provides comprehensive healthcare services with a focus on patient care and medical excellence.',
  keywords: [
    'Balm Medical Centre',
    'Balm Medical Center',
    'Port Harcourt Hospital',
    'Medical Centre',
    'Healthcare Services',
    'Patient Care',
    'Medical Excellence',
    'Obstetrics and Gynecology',
    'Surgery',
    'General Practice and Family Medicine',
    'Hospice and Follow-up Care',
    'Pharmacy',
    'Laboratory Services',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
