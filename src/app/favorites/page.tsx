import { getAllCameras } from '@/lib/data';
import FavoritesList from '@/components/favorites-list';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'My Favorite Cameras',
};

export default async function FavoritesPage() {
    const cameras = await getAllCameras();
    return (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Map
              </Link>
            </Button>
            <div className="space-y-2 mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Favorite Cameras</h1>
                <p className="text-muted-foreground">Your saved cameras for quick access.</p>
            </div>
            <Separator className="mb-8" />
            <FavoritesList allCameras={cameras} />
        </div>
    );
}