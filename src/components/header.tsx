
"use client";

import { Input } from "./ui/input";
import { TrafficCone, Search, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header({ 
    cameraCount,
    searchTerm,
    onSearchChange,
}: { 
    cameraCount: number;
    searchTerm: string;
    onSearchChange: (term: string) => void;
}) {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-20">
            <div className="flex items-center gap-3">
                <TrafficCone className="h-7 w-7 text-primary" />
                <h1 className="text-2xl font-bold tracking-tight hidden sm:block">
                    NZ Traffic Cameras
                </h1>
            </div>
            
            <div className="flex items-center gap-4 flex-1 max-w-2xl">
                 <div className={cn("relative w-full")}>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search by name, region, highway, or description..."
                        className="pl-9 h-10 text-base w-full bg-secondary rounded-lg border-transparent shadow-sm"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="bg-secondary rounded-lg border h-10 px-4 flex items-center gap-2 text-sm font-medium">
                    <span>{cameraCount > 0 ? cameraCount : <Loader2 className="h-4 w-4 animate-spin" />}</span>
                    <span className="text-muted-foreground hidden sm:inline-block">Cameras</span>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}
