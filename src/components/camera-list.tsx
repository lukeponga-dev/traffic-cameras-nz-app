
"use client";

import { useState, useMemo } from 'react';
import type { Camera } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { CameraCard } from '@/components/camera-card';
import { Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useFavorites } from '@/hooks/use-favorites';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SidebarContent, SidebarHeader } from './ui/sidebar';
import { Skeleton } from './ui/skeleton';

function CameraListSkeleton() {
    return (
        <div className="p-2 space-y-2">
            {[...Array(8)].map((_, i) => (
                 <div key={i} className="flex items-center p-3">
                    <Skeleton className="w-28 h-20 rounded-md mr-4 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                        <Skeleton className="h-3 w-1/4" />
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function CameraList({ 
    cameras,
    onCameraSelect,
    selectedCamera
}: { 
    cameras: Camera[];
    onCameraSelect: (camera: Camera) => void;
    selectedCamera: Camera | null;
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const { favoriteIds, isLoaded: favoritesLoaded } = useFavorites();

    const filteredCameras = useMemo(() => {
        if (!cameras.length) return [];
        const lowerCaseSearch = searchTerm.toLowerCase();
        return cameras.filter(camera =>
            camera.name.toLowerCase().includes(lowerCaseSearch) ||
            camera.region.toLowerCase().includes(lowerCaseSearch) ||
            camera.highway?.toLowerCase().includes(lowerCaseSearch)
        );
    }, [cameras, searchTerm]);

    const favoriteCameras = useMemo(() => {
        if (!favoritesLoaded) return [];
        return filteredCameras.filter(c => favoriteIds.includes(c.id));
    }, [filteredCameras, favoriteIds, favoritesLoaded]);

    const renderCameraList = (cameraList: Camera[]) => (
        <div className="p-2 space-y-1">
            {cameraList.map(camera => (
                <div key={camera.id} onClick={() => onCameraSelect(camera)} className="cursor-pointer">
                    <CameraCard camera={camera} isSelected={selectedCamera?.id === camera.id}/>
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
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search by name, region, highway..."
                        className="pl-10 text-sm h-10 bg-muted border-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </SidebarHeader>
            
            <SidebarContent className="pt-0">
                <Tabs defaultValue="all" className="flex flex-col flex-1">
                    <div className="px-4 pb-2">
                        <TabsList className="grid w-full grid-cols-2 h-10">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="favorites">Favorites</TabsTrigger>
                        </TabsList>
                    </div>
                    <ScrollArea className="flex-1">
                        {!cameras.length ? <CameraListSkeleton /> : (
                            <>
                                <TabsContent value="all" className="m-0">
                                    <div className="text-xs text-muted-foreground px-4 py-2 font-semibold">
                                        {filteredCameras.length} CAMERAS FOUND
                                    </div>
                                    {renderCameraList(filteredCameras)}
                                </TabsContent>
                                <TabsContent value="favorites" className="m-0">
                                     {favoritesLoaded ? (
                                        <>
                                        <div className="text-xs text-muted-foreground px-4 py-2 font-semibold">
                                            {favoriteCameras.length} FAVORITE CAMERAS
                                        </div>
                                        {renderCameraList(favoriteCameras)}
                                        </>
                                     ) : <CameraListSkeleton />}
                                </TabsContent>
                            </>
                        )}
                    </ScrollArea>
                </Tabs>
            </SidebarContent>
        </div>
    );
}
