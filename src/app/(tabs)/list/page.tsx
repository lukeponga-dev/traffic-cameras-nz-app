
'use client';

import { useState, useMemo } from 'react';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { Header } from '@/components/header';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { getAllCameras } from '@/lib/data';
import { useRouter } from 'next/navigation';

export default function ListPage() {
    const initialCameras = useMemo(() => getAllCameras(), []);
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    
    const regions = useMemo(() => {
        if (!initialCameras.length) return [];
        const uniqueRegions = [...new Set(initialCameras.map(c => c.region).filter(Boolean))];
        return ['All', ...uniqueRegions.sort()];
    }, [initialCameras]);

    const filteredCameras = useMemo(() => {
        if (!initialCameras.length) return [];
        
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
    
    const handleCameraClick = (camera: Camera) => {
        router.push(`/cameras/${camera.id}`);
    };

    return (
        <div className="h-screen w-screen flex flex-col bg-background">
            <Header 
                cameraCount={filteredCameras.length}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <main className="flex-1 flex flex-col p-4 overflow-hidden pt-20 md:pt-24 mb-20">
                 <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="region-filter">Filter by Region</Label>
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
                    isLoading={false}
                    onCameraClick={handleCameraClick}
                />
            </main>
        </div>
    );
}
