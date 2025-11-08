import type { Camera } from './types';
import fallbackData from '../../cameras.json';

let cameraCache: Camera[] | null = null;
const API_BASE_URL = 'https://services.arcgis.com/CXc2Ea2s6LHmJg1s/arcgis/rest/services/Live_Cameras_NZTA_Public/FeatureServer/0';

const NZTA_ARCGIS_URL = `${API_BASE_URL}/query?f=json&where=1=1&outFields=*&returnGeometry=true`;

function processApiCameraData(arcgisFeatures: any[]): Camera[] {
    if (!arcgisFeatures || arcgisFeatures.length === 0) return [];
    
    return arcgisFeatures.map(feature => {
        const attr = feature.attributes;
        const geom = feature.geometry;

        return {
            id: String(attr.id),
            name: attr.name,
            region: attr.region,
            latitude: geom.y,
            longitude: geom.x,
            status: attr.underMaintenance === 'false' ? 'Active' : 'Under Maintenance',
            direction: attr.direction,
            imageUrl: attr.imageUrl,
            description: attr.description,
            group: attr.group,
            highway: attr.highway
        };
    });
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
    
    if (data && data.features) {
        cameraCache = processApiCameraData(data.features);
        return cameraCache;
    }

    console.error("Invalid data structure from ArcGIS API. Received:", JSON.stringify(data, null, 2));
    throw new Error("Invalid data structure from ArcGIS API.");

  } catch (error) {
    console.warn("Error fetching live camera data from ArcGIS, using fallback:", error);
    // @ts-ignore
    if (fallbackData?.response?.camera) {
        const oldApiCameras = fallbackData.response.camera;
        cameraCache = oldApiCameras.map((cam: any) => ({
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
        }));
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
