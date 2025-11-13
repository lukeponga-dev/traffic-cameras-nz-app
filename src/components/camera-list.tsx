
"use client";

import type { Camera } from '@/lib/types';
import { CameraCard } from '@/components/camera-card';
import { Skeleton } from './ui/skeleton';
import { ScrollArea } from './ui/scroll-area';
import { useRouter } from 'next/navigation';

function CameraListSkeleton() {
    return (
        <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
                 <div key={i} className="flex items-center p-3 border rounded-lg">
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
    selectedCameraId,
    onCameraClick,
}: { 
    cameras: Camera[];
    isLoading: boolean;
    onCameraSelect?: (camera: Camera | null) => void;
    selectedCameraId?: string | null;
    onCameraClick?: (camera: Camera) => void;
}) {
    const router = useRouter();

    const handleCardClick = (camera: Camera) => {
        if (onCameraClick) {
            onCameraClick(camera);
        } else if (onCameraSelect) {
            onCameraSelect(camera);
        } else {
            router.push(`/cameras/${camera.id}`);
        }
    }

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
                            onSelect={() => handleCardClick(camera)}
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
