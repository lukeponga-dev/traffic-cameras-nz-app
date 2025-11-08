
"use client";

import type { Camera } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from './ui/skeleton';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Milestone } from 'lucide-react';

export function CameraCard({ camera }: { camera: Camera }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/50">
             <CardContent className="p-3">
                <div className="flex items-start gap-4">
                    <div className="w-40 h-24 aspect-video relative bg-muted overflow-hidden rounded-md shrink-0">
                        {isLoading && <Skeleton className="absolute inset-0" />}
                         <Image
                            src={camera.imageUrl}
                            alt={`Live feed from ${camera.name}`}
                            fill
                            className={cn('object-cover transition-opacity duration-300', isLoading ? 'opacity-0' : 'opacity-100')}
                            sizes="160px"
                            onLoad={() => setIsLoading(false)}
                            unoptimized
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                         <p className="text-base font-semibold leading-tight">
                            {camera.region}: <span className="font-normal">{camera.name}</span>
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                            {camera.description}
                        </p>
                        {camera.highway && (
                            <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground font-medium">
                                <Milestone className="h-3 w-3" />
                                <span>{camera.highway}</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
