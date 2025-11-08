import type { Camera } from './types';

let cameraCache: Camera[] | null = null;

function processCameraData(apiCameras: any[]): Camera[] {
    if (!apiCameras || apiCameras.length === 0) return [];
    
    return apiCameras.map(cam => {
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
    const response = await fetch('https://trafficnz.info/service/traffic/rest/4/cameras/all');
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    if (data && data.response && data.response.camera) {
        cameraCache = processCameraData(data.response.camera);
        return cameraCache;
    } else {
        console.error("Invalid data structure from API. Received:", JSON.stringify(data, null, 2));
        throw new Error("Invalid data structure from API.");
    }
  } catch (error) {
    console.error("Failed to fetch camera data from API, returning empty array:", error);
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
