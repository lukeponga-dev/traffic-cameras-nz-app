"use client";

import { useFavorites } from '@/hooks/use-favorites';
import type { Camera } from '@/lib/types';
import { useEffect, useState } from 'react';
import { CameraCard } from './camera-card';
import { Heart, Loader2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export default function FavoritesList({ allCameras }: { allCameras: Camera[] }) {
    const { favoriteIds, isLoaded } = useFavorites();
    const [favoriteCameras, setFavoriteCameras] = useState<Camera[]>([]);

    useEffect(() => {
        if (isLoaded) {
            setFavoriteCameras(allCameras.filter(c => favoriteIds.includes(c.id)));
        }
    }, [favoriteIds, allCameras, isLoaded]);

    if (!isLoaded) {
        return (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-64" />
                ))}
            </div>
        );
    }
    
    if (favoriteCameras.length === 0) {
        return (
            <div className="text-center py-20 bg-muted/50 rounded-lg">
                <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
                <h2 className="mt-4 text-xl font-semibold">No Favorites Yet</h2>
                <p className="mt-2 text-muted-foreground">Click the star icon on a camera to add it to your favorites.</p>
            </div>
        );
    }
    
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteCameras.map(camera => (
                <CameraCard key={camera.id} camera={camera} />
            ))}
        </div>
    );
}
