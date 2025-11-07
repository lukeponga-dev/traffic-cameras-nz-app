import type { Camera } from './types';
import fallbackData from '../../cameras.json';

// This is a type guard to check if a camera is valid.
function isArcgisCamera(feature: any): boolean {
  const attrs = feature?.attributes;
  const geom = feature?.geometry;
  return (
    attrs &&
    attrs.Id &&
    attrs.Name &&
    attrs.ImageUrl &&
    geom &&
    typeof geom.y === 'number' &&
    typeof geom.x === 'number'
  );
}

// Keep a cache of the cameras to avoid fetching them on every request.
let cameraCache: Camera[] | null = null;
const NZTA_ARCGIS_URL = 'https://services.arcgis.com/CXc99WJCRc3rPDRG/arcgis/rest/services/LiveCamerasNZTA_Public_View/FeatureServer/0/query?f=json&where=1=1&outFields=*';
const API_BASE_URL = 'https://trafficnz.info';

function processArcgisCameraData(features: any[]): Camera[] {
    const activeCameras = features.filter(isArcgisCamera);
    return activeCameras.map((feature: any) => {
        const attrs = feature.attributes;
        const geom = feature.geometry;
        return {
            id: attrs.Id,
            name: attrs.Name,
            region: attrs.Region,
            latitude: geom.y,
            longitude: geom.x,
            status: attrs.Availability === 'Available' ? 'Active' : 'Under Maintenance',
            direction: attrs.Direction,
            imageUrl: attrs.ImageUrl,
            description: attrs.Description,
            group: attrs.RouteName,
        };
    });
}

function processFallbackCameraData(data: any[]): Camera[] {
    const activeCameras = data.filter((cam: any) => cam && cam.id && !cam.offline);
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
    }));
}

export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }

  try {
    const response = await fetch(NZTA_ARCGIS_URL, {
      headers: {
        'Accept': 'application/json'
      },
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch camera data: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data && Array.isArray(data.features)) {
        cameraCache = processArcgisCameraData(data.features);
        return cameraCache;
    }

    console.error("Invalid data structure from ArcGIS API. Received:", JSON.stringify(data, null, 2));
    throw new Error("Invalid data structure from ArcGIS API.");

  } catch (error) {
    console.warn("Error fetching live ArcGIS camera data, using fallback:", error);
    // @ts-ignore
    if (fallbackData?.response?.camera) {
        // @ts-ignore
        cameraCache = processFallbackCameraData(fallbackData.response.camera);
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
