
"use client";

import { useRef, useEffect, useState } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

function AutocompleteInput({ onPlaceChange }: { onPlaceChange: (place: google.maps.places.PlaceResult | null) => void }) {
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
        <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                ref={inputRef}
                placeholder="Search for a destination..."
                className="pl-12 h-12 text-base w-full bg-background/80 backdrop-blur-sm rounded-lg border shadow-lg"
            />
        </div>
    )
}

export function Header({ onPlaceSelect }: { onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4">
      <div className="container mx-auto flex items-center justify-start gap-4">
        <AutocompleteInput onPlaceChange={onPlaceSelect} />
      </div>
    </header>
  );
}
