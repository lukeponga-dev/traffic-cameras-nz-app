
"use client";

import { Input } from "./ui/input";
import { TrafficCone, Search, Loader2, Menu, Heart, X, LocateFixed } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import Link from "next/link";
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
    isTracking
}: { 
    cameraCount: number;
    searchTerm: string;
    onSearchChange: (term: string) => void;
    onMyLocationClick: () => void;
    isTracking: boolean;
}) {

  const { open } = useSidebar();

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
            
            <div className="flex items-center gap-2">
                 <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                       {open ? <X /> : <Menu />}
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                </SidebarTrigger>
                <div className="flex items-center gap-2">
                    <TrafficCone className="h-6 w-6 text-primary" />
                    <h1 className="text-xl font-bold tracking-tight hidden sm:block">
                        Kiwi Traffic Watch
                    </h1>
                </div>
            </div>
            
            <div className="flex items-center gap-4 flex-1 justify-center px-4 md:px-8">
                 <div className={cn("relative w-full max-w-lg")}>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search cameras by name, region, or highway..."
                        className="pl-9 h-10 text-base w-full bg-muted rounded-full border-transparent focus:border-primary focus:ring-primary"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex items-center gap-1.5">
                <div className="hidden sm:flex bg-secondary rounded-full border h-10 px-4 items-center gap-2.5 text-sm font-medium">
                    <span>{cameraCount > 0 ? cameraCount : <Loader2 className="h-4 w-4 animate-spin" />}</span>
                    <span className="text-muted-foreground">Cameras</span>
                </div>
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
                <Tooltip>
                <TooltipTrigger asChild>
                    <Button asChild variant="ghost" size="icon">
                        <Link href="/favorites">
                        <Heart className="h-5 w-5" />
                        <span className="sr-only">Favorite Cameras</span>
                        </Link>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Favorite Cameras</p>
                </TooltipContent>
                </Tooltip>
                 <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        <span className="sr-only">Toggle Camera List</span>
                    </Button>
                </SidebarTrigger>
            </div>
        </div>
      </div>
    </header>
  );
}
