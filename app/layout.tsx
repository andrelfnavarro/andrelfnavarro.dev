import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Navbar from './components/navbar';

export const metadata = {
  title: {
    default: 'André Navarro',
    template: '%s | André Navarro',
  },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        inter.className
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
