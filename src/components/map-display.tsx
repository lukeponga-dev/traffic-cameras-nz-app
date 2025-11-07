
"use client";

import { useState, useCallback, useEffect, useRef } from 'react';
import type { Camera } from '@/lib/types';
import { Map, AdvancedMarker, InfoWindow, Pin, useMapsLibrary } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { darkMapStyle } from '@/lib/map-styles';
import { useMap } from '@vis.gl/react-google-maps';

const NZ_CENTER = { lat: -41.28664, lng: 174.77557 };
const INITIAL_ZOOM = 5;

type LatLng = { lat: number; lng: number; };

function Directions({ destination }: { destination: google.maps.places.PlaceResult | Camera | null }) {
    const map = useMap();
    const routesLibrary = useMapsLibrary('routes');
    const { toast } = useToast();
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);

    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);

    useEffect(() => {
        if (!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({
            map,
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: 'hsl(var(--primary))',
                strokeOpacity: 0.8,
                strokeWeight: 6
            }
        }));
    }, [routesLibrary, map]);

    const calculateRoute = useCallback((dest: google.maps.LatLng | LatLng) => {
        if (!userLocation) {
            toast({
                variant: 'destructive',
                title: 'Location not available',
                description: 'Please enable location services to calculate a route.',
            });
            return;
        }

        if (directionsService && directionsRenderer) {
            directionsService.route({
                origin: userLocation,
                destination: dest,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsRenderer.setDirections(result);
                } else {
                    toast({
                        variant: 'destructive',
                        title: 'Could not find a route',
                        description: 'Please check your destination and try again.',
                    });
                }
            });
        }
    }, [userLocation, directionsService, directionsRenderer, toast]);

    useEffect(() => {
        if (!destination) {
            directionsRenderer?.setDirections({routes: []});
            return;
        };

        let destLocation: google.maps.LatLng | LatLng;

        if ('geometry' in destination && destination.geometry) { // It's a PlaceResult
            if(destination.geometry?.location){
                destLocation = destination.geometry.location;
            } else {
                return;
            }
        } else { // It's a Camera
            destLocation = { lat: (destination as Camera).latitude, lng: (destination as Camera).longitude };
        }
        
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
                setUserLocation(newPos);
                calculateRoute(destLocation);
            },
            () => {
                 toast({
                    variant: 'destructive',
                    title: 'Geolocation failed',
                    description: 'Could not get your location. Please ensure you have granted permission.',
                });
            }
        );

    }, [destination, calculateRoute, directionsRenderer, toast]);

    return userLocation ? (
         <AdvancedMarker position={userLocation}>
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md" />
        </AdvancedMarker>
    ) : null;
}

export default function MapDisplay({ 
    cameras, 
    destination 
}: { 
    cameras: Camera[]; 
    destination: google.maps.places.PlaceResult | Camera | null;
}) {
    const [selectedCameraId, setSelectedCameraId] = useState<string | null>(null);
    
    const selectedCamera = cameras.find(c => c.id === selectedCameraId);
    
    return (
        <div className="w-full h-full bg-muted relative">
            <Map
                defaultCenter={NZ_CENTER}
                defaultZoom={INITIAL_ZOOM}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="kiwi-traffic-map-dark"
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
                         <Pin 
                            borderColor={'hsl(var(--primary))'}
                            background={'hsl(var(--primary))'}
                            glyphColor={'hsl(var(--primary-foreground))'}
                         />
                    </AdvancedMarker>
                ))}

                <Directions destination={destination} />

                {selectedCamera && (
                    <InfoWindow
                        position={{ lat: selectedCamera.latitude, lng: selectedCamera.longitude }}
                        onCloseClick={() => setSelectedCameraId(null)}
                        minWidth={250}
                        headerDisabled
                    >
                        <div className="p-1 max-w-xs bg-background text-foreground rounded-lg">
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
        </div>
    );
}
