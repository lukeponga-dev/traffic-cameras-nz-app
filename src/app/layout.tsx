import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { MapProvider } from './map-provider';

export const metadata: Metadata = {
  title: 'Kiwi Traffic Watch',
  description: 'Real-time traffic and speed camera monitoring for New Zealand.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <MapProvider>
            {children}
        </MapProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
