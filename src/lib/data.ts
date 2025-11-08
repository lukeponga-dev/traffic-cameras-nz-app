import type { Camera } from './types';
import camerasData from '../../cameras.json';

let cameraCache: Camera[] | null = null;

function processLocalCameraData(data: any): Camera[] {
    const cameras = data?.response?.camera;
    if (!cameras || !Array.isArray(cameras)) {
        return [];
    }

    return cameras.map((cam: any) => ({
        id: cam.id,
        name: cam.name,
        region: cam.region.name,
        latitude: cam.latitude,
        longitude: cam.longitude,
        direction: cam.direction,
        status: cam.underMaintenance === 'false' || cam.underMaintenance === false ? 'Active' : 'Under Maintenance',
        imageUrl: `https://trafficnz.info${cam.imageUrl}`,
        description: cam.description,
        highway: cam.highway,
        group: cam.group
    }));
}


export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }
  
  try {
    if (camerasData) {
        cameraCache = processLocalCameraData(camerasData);
        return cameraCache;
    } else {
        throw new Error("Local camera data could not be loaded.");
    }
  } catch (error) {
    console.error("Failed to process local camera data:", error);
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
