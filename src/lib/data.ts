
import type { Camera } from './types';
import fallbackData from '../../cameras.json';

let cameraCache: Camera[] | null = null;
const API_BASE_URL = 'https://www.waka.kotahi.govt.nz/arcgis/rest/services/Traffic_and_Travel/MapServer/6';

const NZTA_ARCGIS_URL = `${API_BASE_URL}/query?f=json&where=1=1&outFields=*&returnGeometry=true`;

function processApiCameraData(arcgisFeatures: any[]): Camera[] {
    if (!arcgisFeatures || arcgisFeatures.length === 0) return [];
    
    return arcgisFeatures.map(feature => {
        const attr = feature.attributes;
        const geom = feature.geometry;

        return {
            id: String(attr.Id),
            name: attr.Name,
            region: attr.Region,
            latitude: geom.y,
            longitude: geom.x,
            status: attr.Under_Maintenance === 'false' ? 'Active' : 'Under Maintenance',
            direction: attr.Direction,
            imageUrl: attr.Image_URL,
            description: attr.Description,
            group: attr.Group,
            highway: attr.Highway
        };
    });
}

export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }

  try {
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
    throw new Error("Fallback data is invalid.");
  } catch (error) {
    console.error("Could not load camera data, using empty array:", error);
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
