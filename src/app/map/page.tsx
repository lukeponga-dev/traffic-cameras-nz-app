
import { getAllCameras } from '@/lib/data';
import HomePageClient from '@/app/home-page-client';

export default function MapPage() {
    const cameras = getAllCameras();
    return <HomePageClient cameras={cameras} />;
}
