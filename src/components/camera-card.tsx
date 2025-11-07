
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
import { Zap, CircleDot, Milestone } from 'lucide-react';

export function CameraCard({ camera }: { camera: Camera }) {
    const [isLoading, setIsLoading] = useState(true);

    const statusVariant = camera.status === 'Active' 
        ? "border-green-600 text-green-400 bg-green-900/20"
        : "border-yellow-600 text-yellow-400 bg-yellow-900/20";

    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50 border-border/60 bg-muted/30">
            <div className="group">
                <div className="aspect-video relative bg-muted overflow-hidden">
                    {isLoading && <Skeleton className="absolute inset-0" />}
                     <Image
                        src={camera.imageUrl}
                        alt={`Live feed from ${camera.name}`}
                        fill
                        className={cn('object-cover transition-opacity duration-300 group-hover:scale-105', isLoading ? 'opacity-0' : 'opacity-100')}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={() => setIsLoading(false)}
                        unoptimized
                    />
                    <div className="absolute top-2 right-2 z-10">
                        <FavoriteButton id={camera.id} />
                    </div>
                </div>
                <CardHeader className="p-3">
                    <Link href={`/cameras/${camera.id}`} className="block group">
                        <CardTitle className="text-sm font-semibold leading-tight group-hover:text-primary">
                            {camera.name}
                        </CardTitle>
                    </Link>
                    <CardDescription className="text-xs">
                        {camera.region}
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                         <Zap className="h-3 w-3" />
                         <span>{camera.direction}</span>
                    </div>
                    
                    {camera.highway && (
                        <div className="flex items-center gap-2">
                            <Milestone className="h-3 w-3" />
                            <span>{camera.highway}</span>
                        </div>
                    )}
                    
                    <Badge variant="outline" className={cn("text-xs font-mono", statusVariant)}>
                        <CircleDot className="mr-1.5 h-2.5 w-2.5" />
                       {camera.status}
                    </Badge>
                </CardContent>
            </div>
        </Card>
    );
}
