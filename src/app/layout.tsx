import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { MapProvider } from './map-provider';

export const metadata: Metadata = {
  title: 'Kiwi Traffic Watch',
  description: 'Real-time traffic monitoring for New Zealand.',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <MapProvider>
          {children}
          <Toaster />
        </MapProvider>
      </body>
    </html>
  );
}