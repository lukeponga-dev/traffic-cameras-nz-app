
"use client";

import type { Camera } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from './ui/skeleton';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Milestone, Zap } from 'lucide-react';
import FavoriteButton from './favorite-button';

export function CameraCard({ 
    camera, 
    isSelected, 
    onSelect, 
    onClick
}: { 
    camera: Camera, 
    isSelected?: boolean, 
    onSelect?: (camera: Camera | null) => void,
    onClick?: (camera: Camera) => void
}) {
    const [isImageLoading, setIsImageLoading] = useState(true);

    const handleInteraction = () => {
        if (onClick) {
            onClick(camera);
        } else if (onSelect) {
            onSelect(camera);
        }
    };

    return (
        <Card 
            className={cn(
                "overflow-hidden transition-all duration-200 cursor-pointer hover:border-primary/60",
                isSelected ? "border-primary shadow-md ring-2 ring-primary" : "border-border"
            )}
            onClick={handleInteraction}
        >
             <CardContent className="p-3">
                <div className="flex items-start gap-4">
                    <div className="w-32 h-20 aspect-video relative bg-muted overflow-hidden rounded-md shrink-0">
                        {isImageLoading && <Skeleton className="absolute inset-0" />}
                         <Image
                            src={camera.imageUrl}
                            alt={`Live feed from ${camera.name}`}
                            fill
                            className={cn('object-cover transition-opacity duration-300', isImageLoading ? 'opacity-0' : 'opacity-100')}
                            sizes="128px"
                            onLoad={() => setIsImageLoading(false)}
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-start">
                             <p className="text-sm font-semibold leading-tight pr-2 flex-1">
                                {camera.name}
                            </p>
                            <FavoriteButton id={camera.id} />
                         </div>
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                           {camera.region}
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground font-medium">
                           <div className="flex items-center gap-1.5">
                               <Zap className="h-3.5 w-3.5" />
                               <span>{camera.direction}</span>
                           </div>
                           {camera.highway && (
                                <div className="flex items-center gap-1.5">
                                    <Milestone className="h-3.5 w-3.5" />
                                    <span>{camera.highway}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
