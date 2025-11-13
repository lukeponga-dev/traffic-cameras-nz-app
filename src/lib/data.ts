
import type { Camera } from './types';
import camerasData from '../../LiveCamerasNZTA_Public_View_-6147078836172911308.json';

let cameraCache: Camera[] | null = null;

function processCameraData(data: any): Camera[] {
  if (!data || !Array.isArray(data.features)) {
    console.error("Invalid GeoJSON structure received:", data);
    return [];
  }

  return data.features.map((feature: any): Camera | null => {
    if (feature.type !== 'Feature' || !feature.properties || !feature.geometry) {
      return null;
    }
    
    const cam = feature.properties;
    const coords = feature.geometry.coordinates;

    // Ensure essential fields are present
    if (!cam.id || !cam.name || !cam.region || !coords || coords.length < 2) {
      return null;
    }

    const isOffline = cam.offline === 'true' || cam.offline === true;
    const isUnderMaintenance = cam.underMaintenance === 'true' || cam.underMaintenance === true;

    return {
      id: String(cam.id),
      name: cam.name,
      region: cam.region.name,
      latitude: coords[1],
      longitude: coords[0],
      direction: cam.direction || 'N/A',
      status: isOffline || isUnderMaintenance ? 'Under Maintenance' : 'Active',
      imageUrl: `https://trafficnz.info${cam.imageUrl}`,
      description: cam.description,
      highway: cam.highway,
    };
  }).filter((c): c is Camera => c !== null);
}

export function getAllCameras(): Camera[] {
  if (cameraCache) {
    return cameraCache;
  }
  
  try {
    cameraCache = processCameraData(camerasData);
    return cameraCache;
  } catch (error) {
    console.error("Failed to process local camera data:", error);
    return [];
  }
}

export function getCameraById(id: string): Camera | undefined {
    const cameras = getAllCameras();
    return cameras.find(camera => camera.id === id);
}
