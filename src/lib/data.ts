import type { Camera } from './types';

// This is a type guard to check if a camera is valid.
function isCamera(camera: any): camera is any {
  return (
    camera &&
    camera.id &&
    camera.name &&
    camera.latitude &&
    camera.longitude &&
    camera.imageUrl &&
    !camera.offline
  );
}

// Keep a cache of the cameras to avoid fetching them on every request.
let cameraCache: Camera[] | null = null;
const API_BASE_URL = 'https://trafficnz.info';

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
      console.error('Failed to fetch camera data:', response.statusText);
      return [];
    }
    const data = await response.json();
    
    if (data && data.response && Array.isArray(data.response.camera)) {
        const activeCameras = data.response.camera.filter(isCamera);
        cameraCache = activeCameras.map((cam: any) => ({
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
        }));
        return cameraCache;
    }

    console.error("Invalid data structure from API. Received:", JSON.stringify(data, null, 2));
    return [];
  } catch (error) {
    console.error("Error fetching or processing camera data:", error);
    // In case of an error, return an empty array to prevent the app from crashing.
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
