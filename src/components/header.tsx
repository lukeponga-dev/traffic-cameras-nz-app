
"use client";

import { TrafficCone, LocateFixed, PanelLeftOpen, PanelLeftClose, Search, List, Star, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";

export function Header({ 
    onMyLocationClick,
    isTracking,
    cameraCount,
    searchTerm,
    onSearchChange,
    showSearch = true,
}: { 
    onMyLocationClick?: () => void;
    isTracking?: boolean;
    cameraCount?: number;
    searchTerm?: string;
    onSearchChange?: (term: string) => void;
    showSearch?: boolean;
}) {
  const { open } = useSidebar();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <TrafficCone className="h-6 w-6 text-primary" />
                    <h1 className="text-xl font-bold tracking-tight hidden sm:block">
                        Kiwi Traffic Watch
                    </h1>
                </Link>
            </div>

            {showSearch && (
              <div className="relative w-full max-w-md hidden md:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                      type="search"
                      placeholder={`Search ${cameraCount || ''} cameras...`}
                      className="pl-9 w-full bg-background/50"
                      value={searchTerm}
                      onChange={(e) => onSearchChange?.(e.target.value)}
                  />
              </div>
            )}
            
            <div className="flex items-center gap-1.5">
                 {pathname === '/map' && (
                  <>
                  <SidebarTrigger asChild>
                      <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                          {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                          <span className="sr-only">Toggle Sidebar</span>
                      </Button>
                  </SidebarTrigger>

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
                  </>
                )}
            </div>
        </div>
      </div>
    </header>
  );
}
