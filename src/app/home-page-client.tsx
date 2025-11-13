
"use client";

import { useEffect, useState, useMemo, useRef } from 'react';
import type { Camera } from '@/lib/types';
import { Header } from '@/components/header';
import MapDisplay from '@/components/map-display';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

type LatLng = { lat: number; lng: number };

export default function HomePageClient({ cameras: initialCameras }: { cameras: Camera[] }) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);
    const [center, setCenter] = useState<LatLng | null>(null);
    const [isTracking, setIsTracking] = useState(false);

    const watchIdRef = useRef<number | null>(null);
    const { toast } = useToast();
    
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        if (isTracking) {
             toast({
                title: "Live location enabled",
                description: "Your position will be updated automatically."
            });
        } else {
             toast({
                title: "Live location disabled",
            });
        }
    }, [isTracking, toast]);

    useEffect(() => {
        if (!isTracking) {
            if (watchIdRef.current) {
                navigator.geolocation.clearWatch(watchIdRef.current);
                watchIdRef.current = null;
            }
            return;
        }

        if (!navigator.geolocation) {
            toast({
                variant: 'destructive',
                title: 'Geolocation not supported',
                description: "Your browser doesn't support geolocation.",
            });
            setIsTracking(false);
            return;
        }

        watchIdRef.current = navigator.geolocation.watchPosition(
            (position) => {
                const newPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setUserLocation(newPos);
                setCenter(newPos);
            },
            () => {
                 toast({
                    variant: 'destructive',
                    title: 'Geolocation failed',
                    description: 'Could not get your location. Please ensure you have granted permission.',
                });
                setIsTracking(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );

        return () => {
            if (watchIdRef.current) {
                navigator.geolocation.clearWatch(watchIdRef.current);
            }
        };
    }, [isTracking, toast]);


    const filteredCameras = useMemo(() => {
        if (!initialCameras) return [];
        
        let cams = initialCameras;

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            cams = cams.filter(camera =>
                camera.name.toLowerCase().includes(lowerCaseSearch) ||
                camera.region.toLowerCase().includes(lowerCaseSearch) ||
                (camera.highway && camera.highway.toLowerCase().includes(lowerCaseSearch)) ||
                (camera.description && camera.description.toLowerCase().includes(lowerCaseSearch))
            );
        }
        return cams;
    }, [initialCameras, searchTerm]);

    const handleCameraSelect = (camera: Camera | null) => {
        setSelectedCamera(camera);
        if (camera) {
            setCenter({ lat: camera.latitude, lng: camera.longitude });
        }
    };
    
    const handleMyLocationClick = () => {
        setIsTracking(prev => !prev);
    };

    return (
        <div className="h-screen w-screen flex flex-col bg-background">
            <Header 
                cameraCount={filteredCameras.length}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onMyLocationClick={handleMyLocationClick}
                isTracking={isTracking}
            />
            <main className="flex-1 relative">
                <MapDisplay
                    cameras={filteredCameras}
                    onCameraSelect={handleCameraSelect}
                    selectedCamera={selectedCamera}
                    userLocation={userLocation}
                    center={center}
                />
            </main>
        </div>
    );
}
