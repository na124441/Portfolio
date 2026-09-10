import type { Metadata } from 'next';
import { Comfortaa, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: {
    template: '%s | Nayant Srivastava & ByteLogic',
    default: 'Nayant Srivastava — AI / ML Engineer & ByteLogic Platform',
  },
  description:
    'Engineering portfolio of Nayant Srivastava and home of ByteLogic: a technical learning and computational knowledge platform.',
  keywords: [
    'Nayant Srivastava',
    'ByteLogic',
    'AI Engineer',
    'ML Engineer',
    'Reinforcement Learning',
    'Intelligent Systems',
    'Systems Engineering',
    'Computational Platform',
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
      <body className="min-h-screen font-sans bg-[#010a0b] text-[#feffff]">
        {children}
      </body>
    </html>
  );
}
