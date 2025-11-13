
import { getAllCameras } from '@/lib/data';
import FavoritesList from '@/components/favorites-list';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';

export const metadata = {
  title: 'My Favorite Cameras',
};

export default function FavoritesPage() {
    const cameras = getAllCameras();
    return (
        <div className="h-screen w-screen flex flex-col bg-background">
             <Header showSearch={false} cameraCount={cameras.length} />
            <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-20 md:pt-24 mb-20">
                <div className="space-y-2 mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Favorite Cameras</h1>
                    <p className="text-muted-foreground">Your saved cameras for quick access.</p>
                </div>
                <Separator className="mb-8" />
                <FavoritesList allCameras={cameras} />
            </main>
        </div>
    );
}
