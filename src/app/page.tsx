import { getAllCameras } from '@/lib/data';
import MapDisplay from '@/components/map-display';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Sidebar, SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Header } from '@/components/header';
import CameraList from '@/components/camera-list';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

export default async function Home() {
  const cameras = await getAllCameras();

  return (
    <SidebarProvider>
      <Sidebar>
        <div className="flex flex-col h-full">
          <Header />
          <CameraList cameras={cameras} />
        </div>
      </Sidebar>
      <SidebarInset>
        <div className="flex-1 relative flex flex-col">
          <div className="absolute top-4 left-4 z-10">
            <SidebarTrigger asChild>
              <Button size="icon" variant="outline" className="rounded-full shadow-lg">
                <PanelLeft />
              </Button>
            </SidebarTrigger>
          </div>
          <Suspense fallback={<Skeleton className="h-full w-full bg-muted" />}>
            <MapDisplay cameras={cameras} />
          </Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
