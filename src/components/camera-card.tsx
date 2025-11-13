
"use client";

import type { Camera } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Milestone, Zap, ExternalLink } from 'lucide-react';
import FavoriteButton from './favorite-button';
import Link from 'next/link';
import LiveImage from './live-image';

export function CameraCard({ 
    camera, 
    isSelected, 
    onSelect
}: { 
    camera: Camera, 
    isSelected?: boolean, 
    onSelect?: (camera: Camera | null) => void
}) {
    const handleInteraction = () => {
        if (onSelect) {
            onSelect(camera);
        }
    };

    return (
        <Card 
            className={cn(
                "overflow-hidden transition-all duration-200 cursor-pointer hover:border-primary/60",
                isSelected ? "border-primary shadow-lg ring-2 ring-primary ring-offset-2 ring-offset-background" : "border-border"
            )}
            onClick={handleInteraction}
        >
             <CardContent className="p-0">
                 <div className="aspect-video relative bg-muted overflow-hidden">
                    <LiveImage
                        src={camera.imageUrl}
                        alt={`Live feed from ${camera.name}`}
                        sizes="400px"
                    />
                </div>
                <div className='p-3'>
                    <div className="flex justify-between items-start mb-2">
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
                     <Link href={`/cameras/${camera.id}`} className="text-xs text-primary hover:underline mt-2 inline-flex items-center gap-1">
                        More Details <ExternalLink className="h-3 w-3" />
                    </Link>
                </div>
             </CardContent>
        </Card>
    );
}
