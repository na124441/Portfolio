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
  metadataBase: new URL('https://nayantsrivastava.in'),
  title: {
    template: '%s — Nayant Srivastava',
    default: 'Nayant Srivastava — Personal Website & Engineering Tech Hub',
  },
  description:
    'Personal Website & Engineering Tech Hub of Nayant Srivastava. Exploring computation through artificial intelligence, systems, algorithms, mathematics, graphics, and interactive technology.',
  keywords: [
    'Nayant Srivastava',
    'ByteLogic',
    'Engineer',
    'Researcher',
    'Builder',
    'Systems Engineering',
    'Artificial Intelligence',
    'Reinforcement Learning',
    'Computer Graphics',
    'Vulkan',
    'Algorithms',
    'Computational Mathematics',
    'Personal Tech Hub',
  ],
  authors: [{ name: 'Nayant Srivastava', url: 'https://nayantsrivastava.in' }],
  creator: 'Nayant Srivastava',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nayantsrivastava.in',
    title: 'Nayant Srivastava — Personal Website & Engineering Tech Hub',
    description:
      'Exploring computation through artificial intelligence, systems, algorithms, mathematics, graphics, and interactive technology.',
    siteName: 'Nayant Srivastava',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nayant Srivastava — Personal Website & Engineering Tech Hub',
    description:
      'Exploring computation through artificial intelligence, systems, algorithms, mathematics, graphics, and interactive technology.',
    creator: '@nayantsrivastava',
  },
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
