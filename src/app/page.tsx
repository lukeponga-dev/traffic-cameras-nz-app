"use client";

import MapDisplay from '@/components/map-display';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sidebar,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { Header } from '@/components/header';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { getAllCameras } from '@/lib/data';

export default function Home() {
    const [cameras, setCameras] = useState<Camera[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<google.maps.places.PlaceResult | Camera | null>(null);

    useEffect(() => {
        const fetchCameras = async () => {
            const cams = await getAllCameras();
            setCameras(cams);
        };
        fetchCameras();
    }, []);

    const handleCameraSelect = useCallback((camera: Camera) => {
        setSelectedDestination(camera);
    }, []);

    const handlePlaceSelect = useCallback((place: google.maps.places.PlaceResult | null) => {
        setSelectedDestination(place);
    }, []);

  return (
    <SidebarProvider>
      <div className="relative h-screen w-screen">
        <Sidebar>
          <CameraList cameras={cameras} onCameraSelect={handleCameraSelect}/>
        </Sidebar>

        <div className="h-full w-full">
          <Suspense fallback={<Skeleton className="h-full w-full bg-muted" />}>
            <MapDisplay 
                cameras={cameras} 
                onPlaceSelect={handlePlaceSelect}
                destination={selectedDestination}
            />
          </Suspense>
        </div>
        
        <Header />
      </div>
    </SidebarProvider>
  );
}
