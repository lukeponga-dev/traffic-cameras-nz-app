
"use client";

import type { Camera } from '@/lib/types';
import { CameraCard } from '@/components/camera-card';
import { Skeleton } from './ui/skeleton';

function CameraListSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
                 <div key={i} className="flex items-center p-3">
                    <Skeleton className="w-40 h-24 rounded-md mr-4 shrink-0" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-1/4" />
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function CameraList({ 
    cameras,
    isLoading,
}: { 
    cameras: Camera[];
    isLoading: boolean;
}) {
    const renderCameraList = (cameraList: Camera[]) => (
        <div className="space-y-4">
            {cameraList.map(camera => (
                <CameraCard key={camera.id} camera={camera} />
            ))}
            {cameras.length > 0 && cameraList.length === 0 && (
                <div className="text-center py-10 text-muted-foreground bg-card rounded-lg">
                    <p>No cameras found.</p>
                </div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col">
            {isLoading ? <CameraListSkeleton /> : (
                <>
                    {renderCameraList(cameras)}
                </>
            )}
        </div>
    );
}
