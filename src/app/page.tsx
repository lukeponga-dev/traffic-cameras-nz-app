
"use client";

import { useEffect, useState, useMemo } from 'react';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { getAllCameras } from '@/lib/data';
import { Header } from '@/components/header';
import MapDisplay from '@/components/map-display';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

type LatLng = { lat: number; lng: number };

export default function Home() {
    const [cameras, setCameras] = useState<Camera[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);
    const [center, setCenter] = useState<LatLng | null>(null);

    const { toast } = useToast();

    useEffect(() => {
        const fetchCameras = async () => {
            setLoading(true);
            const cams = await getAllCameras();
            setCameras(cams);
            setLoading(false);
        };
        fetchCameras();
    }, []);

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
                setCenter(newPos);
                toast({
                    title: "Location Found",
                    description: "Map centered on your current location."
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
            <div className="h-screen w-screen flex flex-col bg-background">
                <Header 
                    cameraCount={filteredCameras.length}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onMyLocationClick={handleMyLocationClick}
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
