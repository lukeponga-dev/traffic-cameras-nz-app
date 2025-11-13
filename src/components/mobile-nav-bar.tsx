"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileNavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/map", label: "Map", icon: Map },
    { href: "/favorites", label: "Favorites", icon: Star },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background border-t border-border/80 shadow-t-lg z-50">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 text-xs w-full h-full"
            >
              <item.icon
                className={cn(
                  "h-6 w-6 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  "font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
