"use client";

import MapDisplay from '@/components/map-display';
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { getAllCameras } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PanelLeft, Star } from 'lucide-react';
import Link from 'next/link';

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
        <header className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <Button asChild variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
                <Link href="/favorites">
                    <Star className="mr-2 h-4 w-4" />
                    Favorites
                </Link>
            </Button>
            <SidebarTrigger asChild>
                <Button size="icon" variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
                    <PanelLeft />
                </Button>
            </SidebarTrigger>
        </header>

        <Sidebar side="right">
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
        
      </div>
    </SidebarProvider>
  );
}
