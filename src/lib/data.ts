
import type { Camera } from './types';

const API_BASE_URL = 'https://services2.arcgis.com/CXtoV5cIIN0kCm3u/arcgis/rest/services/Public_Traffic_Cameras/FeatureServer/0';

const NZTA_ARCGIS_URL = `${API_BASE_URL}/query?f=json&where=1=1&outFields=*&returnGeometry=true`;

let cameraCache: Camera[] | null = null;

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
    const response = await fetch(NZTA_ARCGIS_URL, { next: { revalidate: 300 } }); // Revalidate every 5 mins
    if (!response.ok) {
        throw new Error(`Failed to fetch from ArcGIS API: ${response.statusText}`);
    }
    
    const data = await response.json();

    if (data && data.features) {
        cameraCache = processApiCameraData(data.features);
        return cameraCache;
    } else {
        console.error("Invalid data structure from ArcGIS API. Received:", JSON.stringify(data, null, 2));
        throw new Error("Invalid data structure from ArcGIS API.");
    }
  } catch (error) {
    console.error("Failed to fetch camera data from ArcGIS, returning empty array:", error);
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
