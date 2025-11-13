
import { getAllCameras } from '@/lib/data';
import HomePageClient from './home-page-client';

export default async function Home() {
    const cameras = await getAllCameras();

    return <HomePageClient cameras={cameras} />;
}
