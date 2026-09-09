import type { Metadata } from 'next';
import { Comfortaa, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
  weight: ['400', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nayant Srivastava — AI / ML Engineer',
  description:
    'Engineering portfolio of Nayant Srivastava. Specializing in Reinforcement Learning + intelligent systems with strong systems & algorithmic foundations.',
  keywords: [
    'Nayant Srivastava',
    'AI Engineer',
    'ML Engineer',
    'Reinforcement Learning',
    'Intelligent Systems',
    'Systems Engineering',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${comfortaa.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#010a0b] text-[#feffff] font-sans relative flex flex-col justify-between selection:bg-[#d4af37] selection:text-[#010a0b]">
        {/* Background Technical Grid Canvas with radial fade */}
        <div className="fixed inset-0 pointer-events-none technical-grid-canvas grid-mask-radial opacity-60 z-0" />
        
        {/* Ambient top light source (warm metallic gold luster) */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_70%)] pointer-events-none z-0" />

        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
