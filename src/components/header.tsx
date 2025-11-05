"use client";

import Link from "next/link";
import { Camera } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Kiwi Traffic Watch</span>
        </Link>
      </div>
    </header>
  );
}