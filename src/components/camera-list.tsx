
"use client";

import { useState, useMemo, Suspense } from 'react';
import type { Camera } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { CameraCard } from '@/components/camera-card';
import { Search, Star } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useFavorites } from '@/hooks/use-favorites';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SidebarContent, SidebarHeader } from './ui/sidebar';
import { Button } from './ui/button';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { Skeleton } from './ui/skeleton';

function CameraListSkeleton() {
    return (
        <div className="p-4 grid gap-3">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="cursor-pointer">
                    <div className="overflow-hidden transition-all duration-300 border-border/60 rounded-lg">
                        <Skeleton className="aspect-video w-full bg-muted" />
                        <div className="p-3">
                            <Skeleton className="h-4 w-3/4 mb-2" />
                            <Skeleton className="h-3 w-1/2" />
                        </div>
                         <div className="p-3 pt-0 flex items-center justify-between">
                            <Skeleton className="h-4 w-1/4" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function CameraList({ 
    cameras,
    onCameraSelect
}: { 
    cameras: Camera[];
    onCameraSelect: (camera: Camera) => void;
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const { favoriteIds, isLoaded: favoritesLoaded } = useFavorites();

    const filteredCameras = useMemo(() => {
        if (!cameras.length) return [];
        if (!searchTerm) return cameras;
        return cameras.filter(camera =>
            camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            camera.region.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [cameras, searchTerm]);

    const favoriteCameras = useMemo(() => {
        if (!favoritesLoaded) return [];
        const favs = filteredCameras.filter(c => favoriteIds.includes(c.id));
        return favs;
    }, [filteredCameras, favoriteIds, favoritesLoaded]);

    const renderCameraList = (cameraList: Camera[]) => (
        <div className="p-4 grid gap-3">
            {cameraList.map(camera => (
                <div key={camera.id} onClick={() => onCameraSelect(camera)} className="cursor-pointer">
                    <CameraCard camera={camera} />
                </div>
            ))}
            {cameras.length > 0 && cameraList.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                    <p>No cameras found.</p>
                </div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col h-full">
            <SidebarHeader>
                <h2 className="text-xl font-bold">Cameras</h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search cameras..."
                        className="pl-10 text-sm h-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                 <Button asChild variant="outline">
                    <Link href="/favorites">
                        <Star className="mr-2 h-4 w-4" />
                        View Favorites
                    </Link>
                </Button>
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                <Tabs defaultValue="all" className="flex flex-col flex-1">
                    <div className="p-2">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="all">All ({filteredCameras.length})</TabsTrigger>
                            <TabsTrigger value="favorites">Favorites ({favoriteCameras.length})</TabsTrigger>
                        </TabsList>
                    </div>
                    <ScrollArea className="flex-1">
                        {cameras.length === 0 ? <CameraListSkeleton /> : (
                            <>
                                <TabsContent value="all" className="m-0">
                                    {renderCameraList(filteredCameras)}
                                </TabsContent>
                                <TabsContent value="favorites" className="m-0">
                                    {favoritesLoaded ? renderCameraList(favoriteCameras) : <p className="p-4 text-muted-foreground">Loading favorites...</p>}
                                </TabsContent>
                            </>
                        )}
                    </ScrollArea>
                </Tabs>
            </SidebarContent>
        </div>
    );
}
