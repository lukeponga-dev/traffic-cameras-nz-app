"use client";

import { APIProvider } from '@vis.gl/react-google-maps';
import type { ReactNode } from 'react';

export function MapProvider({ children }: { children: ReactNode }) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      return (
        <div className="flex h-screen w-screen items-center justify-center bg-background text-foreground">
          <div className="rounded-lg border border-destructive bg-destructive/10 p-8 text-center text-destructive-foreground">
            <h2 className="text-2xl font-bold">Configuration Error</h2>
            <p className="mt-2">Google Maps API key is missing.</p>
            <p className="mt-4 text-sm text-destructive-foreground/80">
              Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.
            </p>
          </div>
        </div>
      );
    }

    return (
        <APIProvider apiKey={apiKey} libraries={['marker', 'routes']}>
            {children}
        </APIProvider>
    );
}
