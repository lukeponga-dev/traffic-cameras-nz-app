
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
import { Header } from '@/components/header';
import { Crosshair, PanelLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMap } from '@vis.gl/react-google-maps';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
    const [cameras, setCameras] = useState<Camera[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<google.maps.places.PlaceResult | Camera | null>(null);
    const map = useMap();
    const { toast } = useToast();

    useEffect(() => {
        const fetchCameras = async () => {
            const cams = await getAllCameras();
            setCameras(cams);
        };
        fetchCameras();
    }, []);

    const handleCameraSelect = useCallback((camera: Camera) => {
        setSelectedDestination(camera);
        if (map) {
            map.moveCamera({ center: { lat: camera.latitude, lng: camera.longitude }, zoom: 15 });
        }
    }, [map]);

    const handlePlaceSelect = useCallback((place: google.maps.places.PlaceResult | null) => {
        setSelectedDestination(place);
    }, []);

    const handleGeolocate = () => {
        if (!navigator.geolocation) {
            toast({
                variant: 'destructive',
                title: 'Geolocation not supported',
                description: "Your browser doesn't support geolocation.",
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const newPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map?.moveCamera({ center: newPos, zoom: 14 });
                toast({
                    title: 'Location found',
                    description: 'Your location has been updated.',
                });
            },
            () => {
                toast({
                    variant: 'destructive',
                    title: 'Geolocation failed',
                    description: 'Could not get your location. Please ensure you have granted permission.',
                });
            }
        );
    };

  return (
    <SidebarProvider>
      <div className="relative h-screen w-screen">
        
        <Header onPlaceSelect={handlePlaceSelect} />

        <div className="absolute top-16 right-4 z-10 flex flex-col gap-2">
            <Button size="icon" variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-lg border shadow-lg h-12 w-12" onClick={handleGeolocate}>
                <Crosshair className="h-6 w-6"/>
            </Button>
            <SidebarTrigger asChild>
                <Button size="icon" variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-lg border shadow-lg h-12 w-12">
                    <PanelLeft className="h-6 w-6"/>
                </Button>
            </SidebarTrigger>
        </div>


        <Sidebar side="left">
          <CameraList cameras={cameras} onCameraSelect={handleCameraSelect}/>
        </Sidebar>

        <div className="h-full w-full">
          <Suspense fallback={<Skeleton className="h-full w-full bg-muted" />}>
            <MapDisplay 
                cameras={cameras} 
                destination={selectedDestination}
            />
          </Suspense>
        </div>
        
      </div>
    </SidebarProvider>
  );
}
