import { getCameraById } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FavoriteButton from "@/components/favorite-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, CheckCircle2, Waypoints, MapPin, Milestone } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import CameraMap from "@/components/camera-map";

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props) {
    const camera = await getCameraById(params.id);
    if (!camera) {
        return { title: 'Camera Not Found' };
    }
    return {
        title: `${camera.name} | Kiwi Traffic Watch`,
        description: `Live traffic camera at ${camera.name}`,
    };
}

export default async function CameraPage({ params }: Props) {
    const camera = await getCameraById(params.id);

    if (!camera) {
        notFound();
    }
    
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${camera.latitude},${camera.longitude}`;

    return (
        <div className="container mx-auto max-w-5xl py-8 px-4">
            <Button asChild variant="ghost" className="mb-6">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to all cameras
                </Link>
            </Button>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="aspect-video w-full relative overflow-hidden rounded-lg shadow-lg">
                         <Skeleton className="absolute inset-0" />
                        <Image 
                            src={camera.imageUrl} 
                            alt={`Live feed from ${camera.name}`} 
                            fill
                            className="object-cover transition-opacity duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            unoptimized
                        />
                    </div>
                    <Card>
                        <CardHeader className="flex-row items-start justify-between">
                             <div className="space-y-2">
                                <CardTitle className="text-2xl">{camera.name}</CardTitle>
                                <CardDescription>{camera.region}</CardDescription>
                            </div>
                            <FavoriteButton id={camera.id} />
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 gap-4 text-sm">
                            {camera.description && <p className="text-muted-foreground">{camera.description}</p>}
                            <div className="flex items-center gap-2 p-3 bg-green-100/10 text-green-400 border border-green-500/20 rounded-lg">
                                <CheckCircle2 className="h-4 w-4" />
                                <span className="font-semibold">{camera.status}</span>
                            </div>
                             <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                                <Zap className="h-4 w-4" />
                                <span className="font-semibold">{camera.direction} Direction</span>
                            </div>
                             {camera.highway && <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                                <Milestone className="h-4 w-4" />
                                <span className="font-semibold">{camera.highway}</span>
                            </div>}
                            <Button asChild>
                                <Link href={directionsUrl} target="_blank" rel="noopener noreferrer">
                                    <Waypoints className="mr-2 h-4 w-4" />
                                    Get Directions
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="min-h-[300px] md:min-h-full">
                  <CameraMap camera={camera} />
                </div>
            </div>
        </div>
    );
}
