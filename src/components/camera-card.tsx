
"use client";

import type { Camera } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FavoriteButton from './favorite-button';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Zap, CircleDot, Milestone, ChevronRight } from 'lucide-react';

export function CameraCard({ camera, isSelected }: { camera: Camera, isSelected: boolean }) {
    const [isLoading, setIsLoading] = useState(true);

    const statusVariant = camera.status === 'Active' 
        ? "border-green-600 text-green-400 bg-green-900/20"
        : "border-yellow-600 text-yellow-400 bg-yellow-900/20";

    return (
        <Card className={cn(
            "overflow-hidden transition-all duration-300 border-2",
            isSelected ? "border-primary shadow-lg" : "border-transparent hover:bg-muted/80"
        )}>
            <div className="flex items-center p-3">
                <div className="w-28 h-20 aspect-video relative bg-muted overflow-hidden rounded-md mr-4 shrink-0">
                    {isLoading && <Skeleton className="absolute inset-0" />}
                     <Image
                        src={camera.imageUrl}
                        alt={`Live feed from ${camera.name}`}
                        fill
                        className={cn('object-cover transition-opacity duration-300', isLoading ? 'opacity-0' : 'opacity-100')}
                        sizes="112px"
                        onLoad={() => setIsLoading(false)}
                        unoptimized
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm font-semibold leading-tight truncate">
                        {camera.name}
                    </CardTitle>
                    <CardDescription className="text-xs truncate">
                        {camera.region}
                    </CardDescription>
                     <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                         <div className="flex items-center gap-1.5">
                             <Zap className="h-3 w-3" />
                             <span className="truncate">{camera.direction}</span>
                        </div>
                        {camera.highway && (
                            <div className="flex items-center gap-1.5">
                                <Milestone className="h-3 w-3" />
                                <span>{camera.highway}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="ml-2 flex items-center">
                    <FavoriteButton id={camera.id} />
                    <Link href={`/cameras/${camera.id}`} passHref>
                        <ChevronRight className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                </div>
            </div>
        </Card>
    );
}
