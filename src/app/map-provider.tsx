"use client";

import { APIProvider } from '@vis.gl/react-google-maps';
import type { ReactNode } from 'react';

export function MapProvider({ children }: { children: ReactNode }) {
    const apiKey = "AIzaSyDxXmCx9QPwZfbWmstxeXa3ta86zD-4lGI";

    return (
        <APIProvider apiKey={apiKey} libraries={['marker']}>
            {children}
        </APIProvider>
    );
}
