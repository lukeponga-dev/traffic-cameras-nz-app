
"use client";

import type { Camera } from '@/lib/types';
import { CameraCard } from '@/components/camera-card';
import { Skeleton } from './ui/skeleton';
import { ScrollArea } from './ui/scroll-area';

function CameraListSkeleton() {
    return (
        <div className="space-y-4 px-4">
            {[...Array(8)].map((_, i) => (
                 <div key={i} className="flex items-center p-3">
                    <Skeleton className="w-28 h-20 rounded-md mr-4 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-full" />
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
    selectedCameraId,
}: { 
    cameras: Camera[];
    isLoading: boolean;
    onCameraSelect: (camera: Camera | null) => void;
    selectedCameraId?: string | null;
}) {
    const renderCameraList = (cameraList: Camera[]) => (
        <div className="space-y-2 p-2">
            {cameraList.map(camera => (
                <div key={camera.id} onClick={() => onCameraSelect(camera)}>
                    <CameraCard
                        camera={camera}
                        isSelected={selectedCameraId === camera.id}
                     />
                </div>
            ))}
            {cameras.length > 0 && cameraList.length === 0 && (
                <div className="text-center py-10 text-muted-foreground bg-card rounded-lg">
                    <p>No cameras found.</p>
                </div>
            )}
             {cameras.length === 0 && !isLoading && (
                <div className="text-center py-10 text-muted-foreground bg-card rounded-lg">
                    <p>No cameras available.</p>
                </div>
            )}
        </div>
    );

    return (
         <ScrollArea className="h-full">
            {isLoading ? <CameraListSkeleton /> : (
                <>
                    {renderCameraList(cameras)}
                </>
            )}
        </ScrollArea>
    );
}
