
"use client";

import type { Camera } from '@/lib/types';
import { CameraCard } from '@/components/camera-card';
import { Skeleton } from './ui/skeleton';
import { ScrollArea } from './ui/scroll-area';

function CameraListSkeleton() {
    return (
        <div className="space-y-3 p-2">
            {[...Array(8)].map((_, i) => (
                 <div key={i} className="flex items-center p-3">
                    <Skeleton className="w-32 h-20 rounded-md mr-4 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function CameraList({ 
    cameras,
    isLoading,
    onCameraSelect,
    onCameraClick,
    selectedCameraId,
}: { 
    cameras: Camera[];
    isLoading: boolean;
    onCameraSelect?: (camera: Camera | null) => void;
    onCameraClick?: (camera: Camera) => void;
    selectedCameraId?: string | null;
}) {
    return (
         <ScrollArea className="h-full">
            <div className="space-y-3 p-4">
            {isLoading ? <CameraListSkeleton /> : 
                <>
                    {cameras.map(camera => (
                        <CameraCard
                            key={camera.id}
                            camera={camera}
                            isSelected={selectedCameraId === camera.id}
                            onSelect={onCameraSelect}
                            onClick={onCameraClick}
                         />
                    ))}
                    {cameras.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground bg-card rounded-lg">
                            <p>No cameras found.</p>
                        </div>
                    )}
                </>
            }
            </div>
        </ScrollArea>
    );
}
