
import { getAllCameras } from '@/lib/data';
import HomePageClient from './home-page-client';

export default function Home() {
    const cameras = getAllCameras();

    return <HomePageClient cameras={cameras} />;
}
