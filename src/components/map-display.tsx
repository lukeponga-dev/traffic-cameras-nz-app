"use client";

import { useState, useCallback, useEffect, useRef } from 'react';
import type { Camera } from '@/lib/types';
import { Map, AdvancedMarker, InfoWindow, Pin, useMapsLibrary } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Crosshair, Search } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { darkMapStyle } from '@/lib/map-styles';

const NZ_CENTER = { lat: -41.28664, lng: 174.77557 };
const INITIAL_ZOOM = 5;
const LOCATE_ZOOM = 14;

type LatLng = { lat: number; lng: number; };

function AutocompleteInput({ onPlaceChange }: { onPlaceChange: (place: google.maps.places.PlaceResult | null) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const ac = new places.Autocomplete(inputRef.current, {
            fields: ['geometry', 'name'],
            componentRestrictions: { country: 'nz' }
        });
        setAutocomplete(ac);

        ac.addListener('place_changed', () => {
            onPlaceChange(ac.getPlace());
        });

    }, [places, onPlaceChange]);

    return (
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                ref={inputRef}
                placeholder="Search for a destination..."
                className="pl-10 h-10 w-full"
            />
        </div>
    )
}

export default function MapDisplay({ 
    cameras, 
    onPlaceSelect, 
    destination 
}: { 
    cameras: Camera[]; 
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
    destination: google.maps.places.PlaceResult | Camera | null;
}) {
    const [selectedCameraId, setSelectedCameraId] = useState<string | null>(null);
    const [center, setCenter] = useState<LatLng>(NZ_CENTER);
    const [zoom, setZoom] = useState(INITIAL_ZOOM);
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);
    const { toast } = useToast();

    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);

    useEffect(() => {
        if(!window.google) return;
        setDirectionsService(new window.google.maps.DirectionsService());
        setDirectionsRenderer(new window.google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: 'hsl(var(--primary))',
                strokeOpacity: 0.8,
                strokeWeight: 6
            }
        }));
    }, []);

    useEffect(() => {
        if(directionsRenderer && window.google) {
            directionsRenderer.setMap(window.google.maps.Map as any);
        }
    }, [directionsRenderer]);


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

        if ('geometry' in destination) { // It's a PlaceResult
            if(destination.geometry?.location){
                destLocation = destination.geometry.location;
            } else {
                return;
            }
        } else { // It's a Camera
            destLocation = { lat: destination.latitude, lng: destination.longitude };
        }
        
        calculateRoute(destLocation);

    }, [destination, calculateRoute, directionsRenderer]);

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
    }, [toast]);
    
    return (
        <div className="w-full h-full bg-muted relative">
             <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-4 flex items-center gap-2">
                <AutocompleteInput onPlaceChange={onPlaceSelect} />
                 <Button size="icon" variant="outline" className="rounded-full shadow-lg bg-background flex-shrink-0" onClick={handleGeolocate}>
                    <Crosshair />
                </Button>
            </div>
            <Map
                center={center}
                zoom={zoom}
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

                {userLocation && (
                    <AdvancedMarker position={userLocation}>
                        <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md" />
                    </AdvancedMarker>
                )}

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
