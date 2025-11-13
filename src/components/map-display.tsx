
"use client";

import { useState, useCallback, useEffect, useMemo } from 'react';
import type { Camera } from '@/lib/types';
import { Map, AdvancedMarker, InfoWindow, useMap } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink, Milestone, Zap, Camera as CameraIcon } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { darkMapStyle } from '@/lib/map-styles';
import FavoriteButton from './favorite-button';
import { cn } from '@/lib/utils';
import { useSidebar } from './ui/sidebar';

const NZ_CENTER = { lat: -41.28664, lng: 174.77557 };
const INITIAL_ZOOM = 5;

type LatLng = { lat: number; lng: number; };

export default function MapDisplay({ 
    cameras, 
    selectedCamera,
    onCameraSelect,
    userLocation,
    center
}: { 
    cameras: Camera[]; 
    selectedCamera: Camera | null;
    onCameraSelect: (camera: Camera | null) => void;
    userLocation: LatLng | null;
    center: LatLng | null;
}) {
    const map = useMap();
    const { open: isSidebarOpen } = useSidebar();
    
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
            map.setZoom(15);
        }
    }, [selectedCamera, map]);

    return (
        <div className={cn("w-full h-full bg-muted relative transition-all duration-300 ease-in-out", 
            isSidebarOpen ? "md:pl-[400px]" : "md:pl-0"
        )}>
            <Map
                defaultCenter={NZ_CENTER}
                defaultZoom={INITIAL_ZOOM}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="kiwi-traffic-map-dark"
                styles={darkMapStyle}
                onDragstart={handleCloseInfoWindow}
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
                                "w-7 h-7 rounded-full border-2 shadow-lg transition-all flex items-center justify-center",
                                isSelected 
                                ? "bg-primary border-white scale-125" 
                                : "bg-background border-muted-foreground/50 hover:bg-primary/20"
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
                         <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white ring-4 ring-blue-500/50 flex items-center justify-center shadow-lg">
                        </div>
                    </AdvancedMarker>
                )}

                {selectedCamera && (
                    <InfoWindow
                        position={{ lat: selectedCamera.latitude, lng: selectedCamera.longitude }}
                        onCloseClick={handleCloseInfoWindow}
                        minWidth={320}
                        headerDisabled
                        pixelOffset={[0, -45]}
                    >
                        <div className="p-1 bg-background text-foreground rounded-lg font-sans">
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
                            