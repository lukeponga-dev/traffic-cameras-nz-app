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
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar>
            <CameraList cameras={cameras} />
          </Sidebar>
          <SidebarInset>
            <div className="flex-1 relative flex flex-col h-full">
              <Suspense
                fallback={<Skeleton className="h-full w-full bg-muted" />}
              >
                <MapDisplay cameras={cameras} />
              </Suspense>
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
