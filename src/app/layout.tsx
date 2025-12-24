import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';

export const metadata: Metadata = {
  title: 'SafePark - Secure Your Parking',
  description: 'The easiest way to find and book secure parking spots.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}