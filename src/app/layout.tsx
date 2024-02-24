import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TrpcProvider from './_trpc/Provider';
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vidext | Video Player',
  description:
    'Introducing our innovative video player, using latest-generation technology so you can enjoy an immersive experience and immerse yourself in the landscapes experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
