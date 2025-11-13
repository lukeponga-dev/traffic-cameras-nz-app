
"use client";

import { useEffect, useState, useMemo, useRef } from 'react';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { Header } from '@/components/header';
import MapDisplay from '@/components/map-display';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type LatLng = { lat: number; lng: number };

export default function HomePageClient({ cameras: initialCameras }: { cameras: Camera[] }) {
    const [cameras, setCameras] = useState<Camera[]>(initialCameras);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);
    const [center, setCenter] = useState<LatLng | null>(null);
    const [isTracking, setIsTracking] = useState(false);

    const watchIdRef = useRef<number | null>(null);
    const isInitialMount = useRef(true);
    const { toast } = useToast();

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


    const regions = useMemo(() => {
        if (!cameras.length) return [];
        const uniqueRegions = [...new Set(cameras.map(c => c.region).filter(Boolean))];
        return ['All', ...uniqueRegions.sort()];
    }, [cameras]);

    const filteredCameras = useMemo(() => {
        if (!cameras.length) return [];
        
        let cams = cameras;

        if (selectedRegion !== 'All') {
            cams = cams.filter(c => c.region === selectedRegion);
        }

        if (searchTerm) {
            const lowerCaseSearch = searchTerm.toLowerCase();
            cams = cams.filter(camera =>
                camera.name.toLowerCase().includes(lowerCaseSearch) ||
                camera.region.toLowerCase().includes(lowerCaseSearch) ||
                camera.highway?.toLowerCase().includes(lowerCaseSearch) ||
                camera.description?.toLowerCase().includes(lowerCaseSearch)
            );
        }
        return cams;
    }, [cameras, searchTerm, selectedRegion]);

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
        <SidebarProvider>
            <div className="h-screen w-screen flex flex-col bg-background">
                <Header 
                    cameraCount={filteredCameras.length}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onMyLocationClick={handleMyLocationClick}
                    isTracking={isTracking}
                />
                <div className="flex-1 relative">
                    <Sidebar>
                        <SidebarHeader>
                            <h2 className="text-xl font-bold tracking-tight">Cameras</h2>
                             <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="region-filter">Region</Label>
                                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                    <SelectTrigger id="region-filter" className="w-full">
                                        <SelectValue placeholder="Select a region" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {regions.map(r => (
                                            <SelectItem key={r} value={r}>{r}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </SidebarHeader>
                        <SidebarContent>
                           <CameraList 
                                cameras={filteredCameras} 
                                isLoading={loading}
                                onCameraSelect={handleCameraSelect}
                                selectedCameraId={selectedCamera?.id}
                            />
                        </SidebarContent>
                    </Sidebar>
                    <MapDisplay
                        cameras={filteredCameras}
                        destination={null}
                        onCameraSelect={handleCameraSelect}
                        selectedCamera={selectedCamera}
                        userLocation={userLocation}
                        center={center}
                    />
                </div>
            </div>
        </SidebarProvider>
    );
}
