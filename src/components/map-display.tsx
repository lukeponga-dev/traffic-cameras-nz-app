"use client";

import { useState, useCallback } from 'react';
import type { Camera } from '@/lib/types';
import { Map, AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Crosshair, MapPin } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { darkMapStyle } from '@/lib/map-styles';
import { useToast } from '@/hooks/use-toast';

const NZ_CENTER = { lat: -41.28664, lng: 174.77557 };
const INITIAL_ZOOM = 5;
const LOCATE_ZOOM = 14;

type LatLng = { lat: number; lng: number; };

export default function MapDisplay({ cameras }: { cameras: Camera[] }) {
    const [selectedCameraId, setSelectedCameraId] = useState<string | null>(null);
    const [center, setCenter] = useState<LatLng>(NZ_CENTER);
    const [zoom, setZoom] = useState(INITIAL_ZOOM);
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);
    const { toast } = useToast();

    const selectedCamera = cameras.find(c => c.id === selectedCameraId);

    const handleGeolocate = useCallback(() => {
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
                setCenter(newPos);
                setUserLocation(newPos);
                setZoom(LOCATE_ZOOM);
            },
            () => {
                toast({
                    variant: 'destructive',
                    title: 'Geolocation failed',
                    description: 'Could not get your location. Please ensure you have granted permission.',
                });
            }
        );
    }, [toast]);
    
    return (
        <div className="w-full h-full bg-muted relative">
            <Map
                center={center}
                zoom={zoom}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="kiwi-traffic-map"
                styles={darkMapStyle}
                onDragstart={() => {
                    if(selectedCameraId) setSelectedCameraId(null);
                }}
            >
                {cameras.map((camera) => (
                    <AdvancedMarker
                        key={camera.id}
                        position={{ lat: camera.latitude, lng: camera.longitude }}
                        onClick={() => setSelectedCameraId(camera.id)}
                    >
                         <Pin background={'hsl(var(--primary))'} borderColor={'hsl(var(--primary))'} glyphColor={'hsl(var(--primary-foreground))'} />
                    </AdvancedMarker>
                ))}

                {userLocation && (
                    <AdvancedMarker position={userLocation}>
                        <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
                    </AdvancedMarker>
                )}

                {selectedCamera && (
                    <InfoWindow
                        position={{ lat: selectedCamera.latitude, lng: selectedCamera.longitude }}
                        onCloseClick={() => setSelectedCameraId(null)}
                        minWidth={250}
                    >
                        <div className="p-1 max-w-xs">
                            <h3 className="font-bold text-md mb-2">{selectedCamera.name}</h3>
                             <div className="aspect-video relative mb-2 rounded-md overflow-hidden bg-muted">
                                <Skeleton className="absolute inset-0" />
                                <Image
                                    src={selectedCamera.imageUrl}
                                    alt={`Live feed from ${selectedCamera.name}`}
                                    fill
                                    className="object-cover"
                                    sizes="250px"
                                    unoptimized
                                />
                            </div>
                             <p className="text-sm text-muted-foreground mb-3">{selectedCamera.region}</p>
                            <Button asChild size="sm" className="w-full">
                                <Link href={`/cameras/${selectedCamera.id}`}>
                                    View Details
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </InfoWindow>
                )}
            </Map>
            <div className="absolute top-4 right-4 z-10">
                 <Button size="icon" variant="outline" className="rounded-full shadow-lg" onClick={handleGeolocate}>
                    <Crosshair />
                </Button>
            </div>
        </div>
    );
}
