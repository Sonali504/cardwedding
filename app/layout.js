// app/layout.js

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Wedding Card Generator',
  description: 'Create beautiful wedding invitations online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#fefcfb] text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
