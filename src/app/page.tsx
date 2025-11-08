
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


export default function Home() {
    const [cameras, setCameras] = useState<Camera[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);

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
    }

    return (
        <SidebarProvider>
            <div className="h-screen w-screen flex flex-col bg-background">
                <Header 
                    cameraCount={filteredCameras.length}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
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
                    />
                </div>
            </div>
        </SidebarProvider>
    );
}
