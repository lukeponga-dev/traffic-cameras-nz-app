
"use client";

import { useState, useCallback, useEffect, useMemo } from 'react';
import type { Camera } from '@/lib/types';
import { Map, AdvancedMarker, InfoWindow, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Milestone, Zap, User, Camera as CameraIcon } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { darkMapStyle } from '@/lib/map-styles';
import FavoriteButton from './favorite-button';
import { useSidebar } from './ui/sidebar';
import { cn } from '@/lib/utils';

const NZ_CENTER = { lat: -41.28664, lng: 174.77557 };
const INITIAL_ZOOM = 5;

type LatLng = { lat: number; lng: number; };

function Directions({ destination }: { destination: google.maps.places.PlaceResult | Camera | null }) {
    const map = useMap();
    const routesLibrary = useMapsLibrary('routes');
    const { toast } = useToast();
    
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
    
    // Init directions service and renderer
    useEffect(() => {
        if (!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService());
        const renderer = new routesLibrary.DirectionsRenderer({
            map,
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: 'hsl(var(--primary))',
                strokeOpacity: 0.8,
                strokeWeight: 6
            }
        });
        setDirectionsRenderer(renderer);

        return () => {
            renderer.setMap(null);
        }
    }, [routesLibrary, map]);
    
    // Render routes
    useEffect(() => {
        if (!directionsRenderer) return;
        directionsRenderer.setDirections({ routes });
    }, [routes, directionsRenderer]);


    const calculateRoute = useCallback((origin: LatLng, dest: google.maps.LatLng | LatLng) => {
        if (directionsService && directionsRenderer) {
            directionsRenderer.setMap(map);
            const request: google.maps.DirectionsRequest = {
                origin: origin,
                destination: dest,
                travelMode: google.maps.TravelMode.DRIVING,
            };
            directionsService.route(request, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK && result) {
                    setRoutes(result.routes);
                } else {
                    setRoutes([]);
                    toast({
                        variant: 'destructive',
                        title: 'Could not find a route',
                        description: 'Please check your destination and try again.',
                    });
                }
            });
        }
    }, [directionsService, directionsRenderer, toast, map]);

    useEffect(() => {
        if (!destination) {
            setRoutes([]);
            if (directionsRenderer) {
                directionsRenderer.setMap(null);
            }
            return;
        };

        let destLocation: google.maps.LatLng | LatLng;

        if ('geometry' in destination && destination.geometry?.location) { // It's a PlaceResult
            destLocation = destination.geometry.location;
        } else if ('latitude' in destination) { // It's a Camera
            destLocation = { lat: destination.latitude, lng: destination.longitude };
        } else {
            return;
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
                calculateRoute(newPos, destLocation);
            },
            () => {
                 toast({
                    variant: 'destructive',
                    title: 'Geolocation failed',
                    description: 'Could not get your location. Please ensure you have granted permission.',
                });
            }
        );
        
        return () => {
            if (directionsRenderer) {
                directionsRenderer.setMap(null);
            }
        }

    }, [destination, calculateRoute, toast, directionsRenderer]);

    return null;
}

export default function MapDisplay({ 
    cameras, 
    destination,
    selectedCamera,
    onCameraSelect,
    userLocation,
    center
}: { 
    cameras: Camera[]; 
    destination: google.maps.places.PlaceResult | Camera | null;
    selectedCamera: Camera | null;
    onCameraSelect: (camera: Camera | null) => void;
    userLocation: LatLng | null;
    center: LatLng | null;
}) {
    const map = useMap();
    const { isMobile, open: sidebarOpen } = useSidebar();
    
    const handleMarkerClick = useCallback((camera: Camera) => {
        onCameraSelect(camera);
    }, [onCameraSelect]);

    const handleCloseInfoWindow = useCallback(() => {
        onCameraSelect(null);
    }, [onCameraSelect]);

    useEffect(() => {
        if (center && map) {
            map.panTo(center);
            if(userLocation && center.lat === userLocation.lat && center.lng === userLocation.lng) {
                map.setZoom(14);
            }
        }
    }, [center, map, userLocation]);

    useEffect(() => {
        if (selectedCamera && map) {
            map.panTo({ lat: selectedCamera.latitude, lng: selectedCamera.longitude });
        }
    }, [selectedCamera, map]);
    
    const mapPadding = useMemo(() => {
        const basePadding = { top: 80, right: 20, bottom: 20, left: 20 };
        if (isMobile) return basePadding;
        if (sidebarOpen) return { ...basePadding, left: 420 };
        return basePadding;
    }, [isMobile, sidebarOpen])


    return (
        <div className="w-full h-full bg-muted relative">
            <Map
                defaultCenter={NZ_CENTER}
                defaultZoom={INITIAL_ZOOM}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="kiwi-traffic-map-dark"
                styles={darkMapStyle}
                onDragstart={handleCloseInfoWindow}
                padding={mapPadding}
            >
                {cameras.map((camera) => {
                    const isSelected = selectedCamera?.id === camera.id;
                    return (
                        <AdvancedMarker
                            key={camera.id}
                            position={{ lat: camera.latitude, lng: camera.longitude }}
                            onClick={() => handleMarkerClick(camera)}
                        >
                            <div className={cn(
                                "p-1.5 rounded-full border-2 shadow-lg transition-colors",
                                isSelected 
                                ? "bg-primary border-primary-foreground/80" 
                                : "bg-background border-border"
                            )}>
                                <CameraIcon className={cn(
                                    "h-4 w-4",
                                    isSelected ? "text-primary-foreground" : "text-foreground"
                                )} />
                            </div>
                        </AdvancedMarker>
                    )
                })}
                
                {userLocation && (
                    <AdvancedMarker position={userLocation}>
                         <div className="h-6 w-6 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-lg">
                            <User className="h-3 w-3 text-primary-foreground" />
                        </div>
                    </AdvancedMarker>
                )}


                <Directions destination={destination} />

                {selectedCamera && (
                    <InfoWindow
                        position={{ lat: selectedCamera.latitude, lng: selectedCamera.longitude }}
                        onCloseClick={handleCloseInfoWindow}
                        minWidth={320}
                        headerDisabled
                        pixelOffset={[0, -50]}
                    >
                        <div className="p-1 bg-background text-foreground rounded-lg font-body">
                             <div className="aspect-video relative mb-2 rounded-md overflow-hidden bg-muted">
                                <Skeleton className="absolute inset-0" />
                                <Image
                                    src={selectedCamera.imageUrl}
                                    alt={`Live feed from ${selectedCamera.name}`}
                                    fill
                                    className="object-cover"
                                    sizes="320px"
                                    unoptimized
                                />
                                <div className="absolute top-1 right-1 z-10">
                                    <FavoriteButton id={selectedCamera.id} />
                                </div>
                            </div>
                             <h3 className="font-bold text-base mb-1 px-1 truncate">{selectedCamera.name}</h3>
                             <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 px-1">
                                <div className="flex items-center gap-1.5">
                                    <Zap className="h-3.5 w-3.5" />
                                    <span>{selectedCamera.direction}</span>
                                </div>
                                {selectedCamera.highway && (
                                <div className="flex items-center gap-1.5">
                                    <Milestone className="h-3.5 w-3.5" />
                                    <span>{selectedCamera.highway}</span>
                                </div>
                                )}
                            </div>
                            <Button asChild size="sm" className="w-full">
                                <Link href={`/cameras/${selectedCamera.id}`}>
                                    View Full Details
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
