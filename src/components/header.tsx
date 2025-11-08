
"use client";

import { Input } from "./ui/input";
import { TrafficCone, Search, Loader2, Menu, Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function Header({ 
    cameraCount,
    searchTerm,
    onSearchChange,
}: { 
    cameraCount: number;
    searchTerm: string;
    onSearchChange: (term: string) => void;
}) {

  const { open, isMobile } = useSidebar();

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
                <TrafficCone className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold tracking-tight hidden sm:block">
                    Kiwi Traffic Watch
                </h1>
            </div>
            
            <div className="flex items-center gap-4 flex-1 justify-center">
                 <div className={cn("relative w-full max-w-lg")}>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search cameras..."
                        className="pl-9 h-9 text-base w-full bg-muted rounded-lg border-transparent"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <div className="bg-secondary rounded-lg border h-9 px-3 flex items-center gap-2 text-sm font-medium">
                    <span>{cameraCount > 0 ? cameraCount : <Loader2 className="h-4 w-4 animate-spin" />}</span>
                    <span className="text-muted-foreground hidden sm:inline-block">Cameras</span>
                </div>
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <Button asChild variant="ghost" size="icon">
                          <Link href="/favorites">
                            <Heart />
                            <span className="sr-only">Favorite Cameras</span>
                          </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Favorite Cameras</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                 <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                        {open ? <X /> : <Menu />}
                        <span className="sr-only">Toggle Camera List</span>
                    </Button>
                </SidebarTrigger>
            </div>
        </div>
      </div>
    </header>
  );
}
