
"use client";

import Link from "next/link";
import { Camera, PanelLeft, Star, Crosshair, Search } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { useMap } from "@vis.gl/react-google-maps";
import { useRef, useEffect, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

function AutocompleteInput({ onPlaceChange }: { onPlaceChange: (place: google.maps.places.PlaceResult | null) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const ac = new places.Autocomplete(inputRef.current, {
            fields: ['geometry', 'name'],
            componentRestrictions: { country: 'nz' }
        });
        setAutocomplete(ac);

        ac.addListener('place_changed', () => {
            onPlaceChange(ac.getPlace());
        });

    }, [places, onPlaceChange]);

    return (
        <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                ref={inputRef}
                placeholder="Search for a destination..."
                className="pl-10 h-9 w-full bg-background/50"
            />
        </div>
    )
}

export function Header({ onPlaceSelect }: { onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void }) {
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
                    description: 'Your location has been updated.',
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
    <header className="absolute top-0 left-0 right-0 z-10 p-4">
      <div className="container mx-auto flex items-center justify-between gap-4 bg-background/80 backdrop-blur-sm rounded-lg p-2 border shadow-lg">
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">
            Kiwi Traffic Watch
          </span>
        </Link>
        <div className="flex-1 flex justify-center">
            <AutocompleteInput onPlaceChange={onPlaceSelect} />
        </div>
        <div className="flex items-center gap-1">
            <Button size="icon" variant="ghost" className="rounded-full" onClick={handleGeolocate}>
                <Crosshair />
            </Button>
            <Button asChild variant="ghost" className="hidden sm:flex">
                <Link href="/favorites">
                    <Star className="mr-2 h-4 w-4" />
                    Favorites
                </Link>
            </Button>
            <SidebarTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded-full">
                    <PanelLeft />
                </Button>
            </SidebarTrigger>
        </div>
      </div>
    </header>
  );
}
