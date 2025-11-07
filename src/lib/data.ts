import type { Camera } from './types';
import fallbackData from '../../cameras.json';

let cameraCache: Camera[] | null = null;
const API_BASE_URL = 'https://trafficnz.info';

function processApiCameraData(apiCameras: any[]): Camera[] {
    const activeCameras = apiCameras.filter((cam: any) => cam && cam.id && !cam.offline);
    return activeCameras.map((cam: any) => ({
        id: String(cam.id),
        name: cam.name,
        region: cam.region.name,
        latitude: cam.latitude,
        longitude: cam.longitude,
        status: cam.underMaintenance ? 'Under Maintenance' : 'Active',
        direction: cam.direction,
        imageUrl: `${API_BASE_URL}${cam.imageUrl}`,
        description: cam.description,
        group: cam.group,
        highway: cam.highway
    }));
}

export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/service/traffic/rest/4/cameras/all`, {
      headers: {
        'Accept': 'application/json'
      },
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch camera data: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data && data.response && Array.isArray(data.response.camera)) {
        cameraCache = processApiCameraData(data.response.camera);
        return cameraCache;
    }

    console.error("Invalid data structure from API. Received:", JSON.stringify(data, null, 2));
    throw new Error("Invalid data structure from API.");

  } catch (error) {
    console.warn("Error fetching live camera data, using fallback:", error);
    // @ts-ignore
    if (fallbackData?.response?.camera) {
        // @ts-ignore
        cameraCache = processApiCameraData(fallbackData.response.camera);
        return cameraCache;
    }
    console.error("Fallback data is also invalid.");
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
