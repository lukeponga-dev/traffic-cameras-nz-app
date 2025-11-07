
"use client";

import MapDisplay from '@/components/map-display';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sidebar,
  SidebarProvider,
} from '@/components/ui/sidebar';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { getAllCameras } from '@/lib/data';
import { Header } from '@/components/header';

export default function Home() {
    const [cameras, setCameras] = useState<Camera[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<google.maps.places.PlaceResult | Camera | null>(null);
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);

    useEffect(() => {
        const fetchCameras = async () => {
            const cams = await getAllCameras();
            setCameras(cams);
        };
        fetchCameras();
    }, []);

    const handleCameraSelect = useCallback((camera: Camera | null) => {
        setSelectedCamera(camera);
        if (camera) {
            setSelectedDestination(camera);
        }
    }, []);

    const handlePlaceSelect = useCallback((place: google.maps.places.PlaceResult | null) => {
        setSelectedDestination(place);
        setSelectedCamera(null); // Clear camera selection when a place is selected
    }, []);

  return (
    <SidebarProvider>
      <div className="relative h-screen w-screen overflow-hidden">
        
        <Header 
            onPlaceSelect={handlePlaceSelect} 
            cameraCount={cameras.length}
        />

        <Sidebar side="left">
          <CameraList 
            cameras={cameras} 
            onCameraSelect={handleCameraSelect}
            selectedCamera={selectedCamera}
            />
        </Sidebar>

        <div className="h-full w-full">
          <Suspense fallback={<Skeleton className="h-full w-full bg-muted" />}>
            <MapDisplay 
                cameras={cameras} 
                destination={selectedDestination}
                selectedCamera={selectedCamera}
                onCameraSelect={handleCameraSelect}
            />
          </Suspense>
        </div>
        
      </div>
    </SidebarProvider>
  );
}
