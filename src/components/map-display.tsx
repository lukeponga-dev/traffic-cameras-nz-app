"use client";

import { useState } from 'react';
import type { Camera } from '@/lib/types';
import { Map, AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { darkMapStyle } from '@/lib/map-styles';

const NZ_CENTER = { lat: -41.28664, lng: 174.77557 };

export default function MapDisplay({ cameras }: { cameras: Camera[] }) {
    const [selectedCameraId, setSelectedCameraId] = useState<string | null>(null);

    const selectedCamera = cameras.find(c => c.id === selectedCameraId);

    return (
        <div className="w-full h-full bg-muted">
            <Map
                defaultCenter={NZ_CENTER}
                defaultZoom={5}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId="kiwi-traffic-map"
                styles={darkMapStyle}
            >
                {cameras.map((camera) => (
                    <AdvancedMarker
                        key={camera.id}
                        position={{ lat: camera.latitude, lng: camera.longitude }}
                        onClick={() => setSelectedCameraId(camera.id)}
                    >
                         <Pin background={'hsl(var(--primary))'} borderColor={'hsl(var(--primary))'} glyphColor={'hsl(var(--primary-foreground))'} />
                    </AdvancedMarker>
                ))}

                {selectedCamera && (
                    <InfoWindow
                        position={{ lat: selectedCamera.latitude, lng: selectedCamera.longitude }}
                        onCloseClick={() => setSelectedCameraId(null)}
                        minWidth={250}
                    >
                        <div className="p-1 max-w-xs">
                            <h3 className="font-bold text-md mb-2">{selectedCamera.name}</h3>
                             <div className="aspect-video relative mb-2 rounded-md overflow-hidden bg-muted">
                                <Skeleton className="absolute inset-0" />
                                <Image
                                    src={selectedCamera.imageUrl}
                                    alt={`Live feed from ${selectedCamera.name}`}
                                    fill
                                    className="object-cover"
                                    sizes="250px"
                                    unoptimized
                                />
                            </div>
                             <p className="text-sm text-muted-foreground mb-3">{selectedCamera.region}</p>
                            <Button asChild size="sm" className="w-full">
                                <Link href={`/cameras/${selectedCamera.id}`}>
                                    View Details
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </InfoWindow>
                )}
            </Map>
        </div>
    );
}
