import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { MapProvider } from './map-provider';
import { cn } from '@/lib/utils';
import { TooltipProvider } from '@/components/ui/tooltip';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const APP_NAME = "Kiwi Traffic Watch";
const APP_DEFAULT_TITLE = "Kiwi Traffic Watch";
const APP_TITLE_TEMPLATE = "%s | Kiwi Traffic Watch";
const APP_DESCRIPTION = "Real-time traffic and speed camera monitoring for New Zealand.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <TooltipProvider>
          <MapProvider>{children}</MapProvider>
        </TooltipProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
