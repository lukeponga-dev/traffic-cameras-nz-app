
import type { Camera } from './types';

let cameraCache: Camera[] | null = null;
const API_BASE_URL = 'https://trafficnz.info';

function processCameraData(data: any): Camera[] {
  if (!data || !Array.isArray(data.response.camera)) {
    return [];
  }

  return data.response.camera.map((cam: any) => ({
    id: cam.id,
    name: cam.name,
    region: cam.region.name,
    latitude: cam.latitude,
    longitude: cam.longitude,
    direction: cam.direction,
    status: cam.underMaintenance ? 'Under Maintenance' : 'Active',
    imageUrl: `${API_BASE_URL}${cam.imageUrl}`,
    description: cam.description,
    highway: cam.highway,
  }));
}

export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }
  
  const url = `${API_BASE_URL}/service/traffic/rest/4/cameras/all`;

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`trafficnz.info API request failed with status ${response.status}`);
    }
    const data = await response.json();
    
    if (data.error) {
        console.error("trafficnz.info API returned an error:", data.error);
        return [];
    }

    if (data && data.response && data.response.camera) {
        cameraCache = processCameraData(data);
        return cameraCache;
    } else {
        console.error("Invalid data structure from trafficnz.info API. Received:", JSON.stringify(data, null, 2));
        throw new Error("Invalid data structure from trafficnz.info API.");
    }
  } catch (error) {
    console.error("Failed to fetch camera data from trafficnz.info API, returning empty array:", error);
    return []; // Return empty array on fetch error
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
