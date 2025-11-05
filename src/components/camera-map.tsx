"use client";

import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import type { Camera } from "@/lib/types";
import { darkMapStyle } from "@/lib/map-styles";

export default function CameraMap({ camera }: { camera: Camera }) {
    const position = { lat: camera.latitude, lng: camera.longitude };
    return (
        <div className="h-[300px] lg:h-full w-full rounded-lg overflow-hidden shadow-lg">
            <Map
                defaultCenter={position}
                defaultZoom={14}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={`map-${camera.id}`}
                styles={darkMapStyle}
            >
                <AdvancedMarker position={position}>
                    <Pin background={'hsl(var(--primary))'} borderColor={'hsl(var(--primary))'} glyphColor={'hsl(var(--primary-foreground))'} />
                </AdvancedMarker>
            </Map>
        </div>
    );
}
