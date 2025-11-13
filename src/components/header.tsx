"use client";

import { TrafficCone, LocateFixed, PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

export function Header({ 
    onMyLocationClick,
    isTracking,
}: { 
    onMyLocationClick?: () => void;
    isTracking?: boolean;
}) {
  const { open } = useSidebar();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16">
            <div className="flex items-center gap-2">
                <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                       {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                    </Button>
                </SidebarTrigger>
                <Link href="/" className="flex items-center gap-2">
                    <TrafficCone className="h-6 w-6 text-primary" />
                    <h1 className="text-xl font-bold tracking-tight hidden sm:block">
                        Kiwi Traffic Watch
                    </h1>
                </Link>
            </div>
            
            <div className="flex items-center gap-1.5">
                <SidebarTrigger asChild>
                    <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                        {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                        <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                </SidebarTrigger>
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