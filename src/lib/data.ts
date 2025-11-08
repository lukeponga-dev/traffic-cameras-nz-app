
import type { Camera } from './types';
import camerasData from '../../cameras.json';

let cameraCache: Camera[] | null = null;

function processCameraData(data: any): Camera[] {
  if (!data || !data.response || !Array.isArray(data.response.camera)) {
    console.error("Invalid data structure in cameras.json");
    return [];
  }

  return data.response.camera.map((cam: any): Camera => {
    const isOffline = cam.offline === 'true' || cam.offline === true;
    const isUnderMaintenance = cam.underMaintenance === 'true' || cam.underMaintenance === true;

    return {
      id: cam.id,
      name: cam.name,
      region: cam.region.name,
      latitude: parseFloat(cam.latitude),
      longitude: parseFloat(cam.longitude),
      direction: cam.direction,
      status: isOffline || isUnderMaintenance ? 'Under Maintenance' : 'Active',
      imageUrl: `https://trafficnz.info${cam.imageUrl}`,
      description: cam.description,
      highway: cam.highway,
    };
  });
}

export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }
  
  try {
    cameraCache = processCameraData(camerasData);
    return cameraCache;
  } catch (error) {
    console.error("Failed to process local camera data, returning empty array:", error);
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
