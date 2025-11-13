
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

interface LiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  refreshInterval?: number;
}

export default function LiveImage({ 
    src, 
    alt, 
    priority = false, 
    sizes = "100vw",
    className,
    refreshInterval = 5000 
}: LiveImageProps) {
  const [imageUrl, setImageUrl] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateImage = () => {
      // Remove any existing timestamp and add a new one to break cache
      const baseUrl = src.split('?')[0];
      setImageUrl(`${baseUrl}?t=${new Date().getTime()}`);
    };
    
    updateImage(); // Initial load

    const intervalId = setInterval(updateImage, refreshInterval);

    return () => clearInterval(intervalId);
  }, [src, refreshInterval]);
  
  // Reset loading state when src changes
  useEffect(() => {
      setIsLoading(true);
  }, [src]);

  return (
    <>
      {isLoading && <Skeleton className="absolute inset-0" />}
      <Image
        key={imageUrl} // Key ensures React creates a new component, re-triggering onLoad
        src={imageUrl}
        alt={alt}
        fill
        className={cn('object-cover transition-opacity duration-300', isLoading ? 'opacity-0' : 'opacity-100', className)}
        sizes={sizes}
        priority={priority}
        unoptimized
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} // Also handle errors
      />
    </>
  );
}
