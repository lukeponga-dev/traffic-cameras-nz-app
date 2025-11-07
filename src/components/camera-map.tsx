"use client";

import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import type { Camera } from "@/lib/types";

export default function CameraMap({ camera }: { camera: Camera }) {
    const position = { lat: camera.latitude, lng: camera.longitude };
    return (
        <div className="h-full w-full rounded-lg overflow-hidden shadow-lg border">
            <Map
                defaultCenter={position}
                defaultZoom={14}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={`map-${camera.id}`}
            >
                <AdvancedMarker position={position}>
                    <Pin />
                </AdvancedMarker>
            </Map>
        </div>
    );
}
