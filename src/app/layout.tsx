import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Suspense } from 'react';
import Loading from '@/components/loading';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
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
      <body className={`${poppins.variable} font-poppins antialiased`}>
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
