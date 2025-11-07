import { getAllCameras } from '@/lib/data';
import MapDisplay from '@/components/map-display';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { Header } from '@/components/header';
import CameraList from '@/components/camera-list';

export default async function Home() {
  const cameras = await getAllCameras();

  return (
    <SidebarProvider>
      <div className="relative h-screen w-screen">
        <Sidebar>
          <CameraList cameras={cameras} />
        </Sidebar>

        <div className="h-full w-full">
          <Suspense fallback={<Skeleton className="h-full w-full bg-muted" />}>
            <MapDisplay cameras={cameras} />
          </Suspense>
        </div>
        
        <Header />
      </div>
    </SidebarProvider>
  );
}
