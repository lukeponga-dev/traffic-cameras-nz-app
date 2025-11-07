"use client";

import Link from "next/link";
import { Camera, PanelLeft, Star } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4">
      <div className="container flex items-center justify-between gap-4 bg-background/80 backdrop-blur-sm rounded-lg p-2 border shadow-lg">
        <SidebarTrigger asChild>
          <Button size="icon" variant="ghost" className="rounded-full">
            <PanelLeft />
          </Button>
        </SidebarTrigger>
        <Link href="/" className="flex items-center gap-2 mr-auto pl-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">
            Kiwi Traffic Watch
          </span>
        </Link>
        <Button asChild variant="ghost">
          <Link href="/favorites">
            <Star className="mr-2 h-4 w-4" />
            Favorites
          </Link>
        </Button>
      </div>
    </header>
  );
}
