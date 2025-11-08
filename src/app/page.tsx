
"use client";

import { useEffect, useState, useMemo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import CameraList from '@/components/camera-list';
import type { Camera } from '@/lib/types';
import { getAllCameras } from '@/lib/data';
import { Header } from '@/components/header';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
    const [cameras, setCameras] = useState<Camera[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCameras = async () => {
            setLoading(true);
            const cams = await getAllCameras();
            setCameras(cams);
            setLoading(false);
        };
        fetchCameras();
    }, []);

    const filteredCameras = useMemo(() => {
        if (!cameras.length) return [];
        const lowerCaseSearch = searchTerm.toLowerCase();
        return cameras.filter(camera =>
            camera.name.toLowerCase().includes(lowerCaseSearch) ||
            camera.region.toLowerCase().includes(lowerCaseSearch) ||
            camera.highway?.toLowerCase().includes(lowerCaseSearch) ||
            camera.description?.toLowerCase().includes(lowerCaseSearch)
        );
    }, [cameras, searchTerm]);

    const featuredCamera = useMemo(() => {
        if (filteredCameras.length > 0) return filteredCameras[0];
        return null;
    }, [filteredCameras]);

  return (
      <div className="min-h-screen w-full bg-secondary">
        <Header 
            cameraCount={cameras.length}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
        />

        <main className="container mx-auto px-4 py-8">
            <div className='max-w-5xl mx-auto'>
                {loading && (
                    <Card className="mb-8">
                        <CardContent className="p-4">
                            <Skeleton className="aspect-video w-full" />
                            <Skeleton className="h-6 w-3/4 mt-4" />
                            <Skeleton className="h-4 w-1/2 mt-2" />
                        </CardContent>
                    </Card>
                )}

                {!loading && featuredCamera && (
                     <Card className="mb-8 overflow-hidden shadow-lg border-2 border-primary">
                        <CardContent className="p-0">
                            <div className="aspect-video w-full relative">
                                <Image 
                                    src={featuredCamera.imageUrl} 
                                    alt={`Live feed from ${featuredCamera.name}`} 
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>
                            <div className='p-4 bg-background'>
                                <h2 className="text-lg font-bold">{featuredCamera.name}</h2>
                                <p className="text-sm text-muted-foreground">{featuredCamera.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                )}
                
                <h2 className="text-xl font-bold mb-4">Available Cameras ({filteredCameras.length})</h2>
                <CameraList 
                    cameras={filteredCameras} 
                    isLoading={loading}
                />
            </div>
        </main>
      </div>
  );
}
