import type { Camera } from './types';
import camerasData from '../../cameras.json';

let cameraCache: Camera[] | null = null;

function processLocalCameraData(localCameras: any[]): Camera[] {
    if (!localCameras || localCameras.length === 0) return [];
    
    return localCameras.map(cam => {
        return {
            id: String(cam.id),
            name: cam.name,
            region: cam.region.name,
            latitude: cam.latitude,
            longitude: cam.longitude,
            status: cam.underMaintenance ? 'Under Maintenance' : 'Active',
            direction: cam.direction,
            imageUrl: `https://trafficnz.info${cam.imageUrl}`,
            description: cam.description,
            group: cam.group,
            highway: cam.highway
        };
    });
}


export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }

  try {
    // Using local cameras.json as a stable data source
    const data = camerasData;

    if (data && data.response && data.response.camera) {
        cameraCache = processLocalCameraData(data.response.camera);
        return cameraCache;
    } else {
        console.error("Invalid data structure from local cameras.json. Received:", JSON.stringify(data, null, 2));
        throw new Error("Invalid data structure from local cameras.json.");
    }
  } catch (error) {
    console.error("Failed to fetch camera data from local file, returning empty array:", error);
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
