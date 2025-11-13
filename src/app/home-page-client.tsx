"use client";

import { useEffect, useState, useMemo, useRef } from 'react';
import type { Camera } from '@/lib/types';
import { Header } from '@/components/header';
import MapDisplay from '@/components/map-display';
import CameraList from '@/components/camera-list';
import { useToast } from '@/hooks/use-toast';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
} from "@/components/ui/sidebar";
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type LatLng = { lat: number; lng: number };

export default function HomePageClient({ cameras: initialCameras }: { cameras: Camera[] }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);
    const [center, setCenter] = useState<LatLng | null>(null);
    const [isTracking, setIsTracking] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    
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

    const regions = useMemo(() => {
        if (!initialCameras.length) return [];
        const uniqueRegions = [...new Set(initialCameras.map(c => c.region).filter(Boolean))];
        return ['All', ...uniqueRegions.sort()];
    }, [initialCameras]);


    const filteredCameras = useMemo(() => {
        if (!initialCameras) return [];
        
        let cams = initialCameras;

        if (selectedRegion !== 'All') {
            cams = cams.filter(c => c.region === selectedRegion);
        }

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
    }, [initialCameras, searchTerm, selectedRegion]);

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
                onMyLocationClick={handleMyLocationClick}
                isTracking={isTracking}
                showSidebarToggle={true}
            />
            <main className="flex-1 relative pt-16">
                 <Sidebar>
                    <SidebarHeader>
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder={`Search ${filteredCameras.length} cameras...`}
                                className="pl-9 text-base w-full bg-background/50"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                         <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="region-filter">Region</Label>
                            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                <SelectTrigger id="region-filter" className="w-full bg-background/50">
                                    <SelectValue placeholder="Select a region" />
                                </SelectTrigger>
                                <SelectContent>
                                    {regions.map(r => (
                                        <SelectItem key={r} value={r}>{r}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Separator />
                         <p className="text-sm text-muted-foreground">{filteredCameras.length} cameras found</p>
                    </SidebarHeader>
                    <SidebarContent>
                         <CameraList 
                            cameras={filteredCameras} 
                            isLoading={false}
                            onCameraSelect={handleCameraSelect}
                            selectedCameraId={selectedCamera?.id}
                        />
                    </SidebarContent>
                 </Sidebar>
                <MapDisplay
                    cameras={filteredCameras}
                    onCameraSelect={handleCameraSelect}
                    selectedCamera={selectedCamera}
                    userLocation={userLocation}
                    center={center}
                />
            </main>
        </div>
      </SidebarProvider>
    );
}
