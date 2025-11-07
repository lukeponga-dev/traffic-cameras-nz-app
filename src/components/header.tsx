"use client";

import Link from "next/link";
import { Camera, PanelLeft } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background flex-shrink-0">
      <div className="container flex h-16 items-center gap-4 px-4">
        <div className="lg:hidden">
          <SidebarTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
            >
              <PanelLeft />
            </Button>
          </SidebarTrigger>
        </div>
        <Link href="/" className="flex items-center gap-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Kiwi Traffic Watch</span>
        </Link>
      </div>
    </header>
  );
}
