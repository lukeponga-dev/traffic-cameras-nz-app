import { getAllCameras } from '@/lib/data';
import HomePageClient from '@/app/home-page-client';

export const metadata = {
  title: 'Map View | Kiwi Traffic Watch',
};

export default function Home() {
    const cameras = getAllCameras();
    return <HomePageClient cameras={cameras} />;
}
