
"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Star, TrafficCone, Search, PanelLeft, Crosshair, Loader2 } from "lucide-react";
import { useSidebar } from "./ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { cn } from "@/lib/utils";

function AutocompleteInput({ onPlaceChange, className }: { onPlaceChange: (place: google.maps.places.PlaceResult | null) => void, className?: string }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const ac = new places.Autocomplete(inputRef.current, {
            fields: ['geometry', 'name', 'formatted_address'],
            componentRestrictions: { country: 'nz' }
        });
        setAutocomplete(ac);

        const listener = ac.addListener('place_changed', () => {
            onPlaceChange(ac.getPlace());
        });

        return () => {
            if (listener) {
              listener.remove();
            }
        };

    }, [places, onPlaceChange]);

    return (
        <div className={cn("relative w-full", className)}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                ref={inputRef}
                placeholder="Search for a destination..."
                className="pl-9 h-11 text-base w-full bg-background/80 backdrop-blur-sm rounded-lg border-border/80 shadow-md"
            />
        </div>
    )
}

export function Header({ 
    onPlaceSelect,
    cameraCount
}: { 
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void,
    cameraCount: number
}) {
  const { open, setOpen } = useSidebar();
  const map = useMap();
  const { toast } = useToast();

  const handleGeolocate = () => {
        if (!navigator.geolocation) {
            toast({
                variant: 'destructive',
                title: 'Geolocation not supported',
                description: "Your browser doesn't support geolocation.",
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const newPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map?.moveCamera({ center: newPos, zoom: 14 });
                toast({
                    title: 'Location found',
                    description: 'Your location has been centered on the map.',
                });
            },
            () => {
                toast({
                    variant: 'destructive',
                    title: 'Geolocation failed',
                    description: 'Could not get your location. Please ensure you have granted permission.',
                });
            }
        );
    };


  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
            <Button size="icon" variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-lg border-border/80 shadow-md h-11 w-11" onClick={() => setOpen(!open)} aria-label="Toggle Camera List">
                <PanelLeft className="h-5 w-5"/>
            </Button>
            <AutocompleteInput onPlaceChange={onPlaceSelect} className="max-w-md" />
        </div>
        <div className="flex items-center gap-3">
             <Button size="icon" variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-lg border-border/80 shadow-md h-11 w-11" onClick={handleGeolocate} aria-label="Geolocate">
                <Crosshair className="h-5 w-5"/>
            </Button>
            <Button asChild variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-lg border-border/80 shadow-md h-11 hidden sm:inline-flex">
                <Link href="/favorites">
                    <Star className="h-5 w-5 mr-2" />
                    Favorites
                </Link>
            </Button>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg border-border/80 shadow-md h-11 px-4 hidden sm:flex items-center gap-2 text-sm font-medium">
                <TrafficCone className="h-5 w-5 text-primary" />
                <span>{cameraCount > 0 ? cameraCount : <Loader2 className="h-4 w-4 animate-spin" />}</span>
                <span className="text-muted-foreground">Live Cameras</span>
            </div>
        </div>
      </div>
    </header>
  );
}
