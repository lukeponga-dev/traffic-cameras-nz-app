
import type { Camera } from './types';
import camerasData from '../../cameras.json';

let cameraCache: Camera[] | null = null;

function processLocalCameraData(data: any): Camera[] {
  if (!data || !data.response || !Array.isArray(data.response.camera)) {
    return [];
  }

  return data.response.camera.map((cam: any): Camera => {
    return {
      id: cam.id,
      name: cam.name,
      region: cam.region.name,
      latitude: cam.latitude,
      longitude: cam.longitude,
      direction: cam.direction,
      status: cam.offline === 'true' || cam.underMaintenance === 'true' || cam.offline === true || cam.underMaintenance === true ? 'Under Maintenance' : 'Active',
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
    // Using the local cameras.json file as the data source
    cameraCache = processLocalCameraData(camerasData);
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
