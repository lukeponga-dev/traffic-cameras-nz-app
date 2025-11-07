"use client";

import { useState, useMemo } from 'react';
import type { Camera } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { CameraCard } from '@/components/camera-card';
import { Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useFavorites } from '@/hooks/use-favorites';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SidebarContent } from './ui/sidebar';

export default function CameraList({ cameras }: { cameras: Camera[] }) {
    const [searchTerm, setSearchTerm] = useState('');
    const { favoriteIds, isLoaded: favoritesLoaded } = useFavorites();

    const filteredCameras = useMemo(() => {
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
        <div className="p-2 grid gap-2">
            {cameraList.map(camera => (
                <CameraCard key={camera.id} camera={camera} />
            ))}
            {cameraList.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                    <p>No cameras found.</p>
                </div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col h-full">
            <div className="p-2 border-b border-border sticky top-0 bg-background/95 z-10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search cameras..."
                        className="pl-10 text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <SidebarContent>
                <Tabs defaultValue="all" className="flex flex-col flex-1">
                    <div className="p-2">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="favorites">Favorites</TabsTrigger>
                        </TabsList>
                    </div>
                    <ScrollArea className="flex-1">
                        <TabsContent value="all" className="m-0">
                            {renderCameraList(filteredCameras)}
                        </TabsContent>
                        <TabsContent value="favorites" className="m-0">
                            {favoritesLoaded ? renderCameraList(favoriteCameras) : <p>Loading favorites...</p>}
                        </TabsContent>
                    </ScrollArea>
                </Tabs>
            </SidebarContent>
        </div>
    );
}
