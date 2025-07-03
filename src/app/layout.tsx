import type { Metadata } from "next";
import localFont from 'next/font/local';
import Link from "next/link";
import "./globals.css";
import { Suspense } from 'react';
import Loading from '@/components/loading';

const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "musinsai",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard antialiased`}>
        <header className="fixed top-0 left-0 px-12 py-6 z-50">
          <Link 
            href="/" 
            className="text-5xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            m<span className="text-purple-500">ai</span>.
          </Link>
        </header>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
