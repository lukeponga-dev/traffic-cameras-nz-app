
"use client";

import { Input } from "./ui/input";
import { TrafficCone, Search, Loader2, Menu, Heart, X, LocateFixed, Map, List, Sidebar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function Header({ 
    cameraCount,
    searchTerm,
    onSearchChange,
    onMyLocationClick,
    isTracking,
    showSearch = true,
}: { 
    cameraCount?: number;
    searchTerm?: string;
    onSearchChange?: (term: string) => void;
    onMyLocationClick?: () => void;
    isTracking?: boolean;
    showSearch?: boolean;
}) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
            
            <Link href="/" className="flex items-center gap-2">
                <TrafficCone className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold tracking-tight hidden sm:block">
                    Kiwi Traffic Watch
                </h1>
            </Link>
            
            {showSearch && (
                <div className="flex-1 flex justify-center px-4 md:px-8">
                     <div className="relative w-full max-w-lg">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search cameras..."
                            className="pl-9 h-10 text-base w-full bg-muted rounded-full border-transparent focus:border-primary focus:ring-primary"
                            value={searchTerm}
                            onChange={(e) => onSearchChange?.(e.target.value)}
                        />
                    </div>
                </div>
            )}

            <div className="flex items-center gap-1.5 ml-auto">
                {onMyLocationClick && (
                  <Tooltip>
                      <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" onClick={onMyLocationClick}>
                              <LocateFixed className={cn("h-5 w-5", isTracking && "text-primary")} />
                              <span className="sr-only">{isTracking ? "Disable live location" : "Enable live location"}</span>
                          </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                          <p>{isTracking ? "Disable live location" : "Enable live location"}</p>
                      </TooltipContent>
                  </Tooltip>
                )}
            </div>
        </div>
      </div>
    </header>
  );
}
