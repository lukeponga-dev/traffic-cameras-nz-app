'use client';

import { useState, useMemo } from 'react';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { Header } from '@/components/header';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function CameraListPage({ cameras: initialCameras }: { cameras: Camera[] }) {
    const [cameras, setCameras] = useState<Camera[]>(initialCameras);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    
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


    return (
        <div className="h-screen w-screen flex flex-col bg-background">
            <Header 
                cameraCount={filteredCameras.length}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <div className="flex-1 flex flex-col p-4 overflow-hidden">
                 <div className="grid w-full items-center gap-1.5 mb-4">
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
               <CameraList 
                    cameras={filteredCameras} 
                    isLoading={loading}
                />
            </div>
        </div>
    );
}
