"use client";

import { Star, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

export default function FavoriteButton({ id }: { id: string }) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const isFav = isFavorite(id);

  if (!isLoaded) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Loader2 className="h-5 w-5 animate-spin" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(id);
      }}
      aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <Star
        className={cn(
          "h-5 w-5 transition-all duration-300",
          isFav
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground hover:text-yellow-400"
        )}
      />
    </Button>
  );
}
