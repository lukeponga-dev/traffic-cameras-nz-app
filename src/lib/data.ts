
import type { Camera } from './types';

let cameraCache: Camera[] | null = null;

const API_BASE_URL = 'https://services2.arcgis.com/CXbL202i351v1Y8I/arcgis/rest/services/Camera/FeatureServer/0';

function processArcGisCameraData(features: any[]): Camera[] {
    if (!features || features.length === 0) return [];
    
    return features.map(feature => {
        const attrs = feature.attributes;
        const geom = feature.geometry;

        return {
            id: String(attrs.Id),
            name: attrs.Name,
            region: attrs.Region,
            latitude: geom.y,
            longitude: geom.x,
            status: attrs.UnderMaintenance === 'false' ? 'Active' : 'Under Maintenance',
            direction: attrs.Direction,
            imageUrl: attrs.ImageURL,
            description: attrs.Description,
            group: attrs.Group,
            highway: attrs.Highway
        };
    });
}


export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }
  
  const queryParams = new URLSearchParams({
      f: 'json',
      where: '1=1',
      outFields: '*',
      returnGeometry: 'true'
  }).toString();
  
  const fullUrl = `${API_BASE_URL}/query?${queryParams}`;

  try {
    const response = await fetch(fullUrl, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    if (data.error) {
        console.error("ArcGIS API returned an error:", data.error);
        return [];
    }

    if (data && data.features) {
        cameraCache = processArcGisCameraData(data.features);
        return cameraCache;
    } else {
        console.error("Invalid data structure from ArcGIS API. Received:", JSON.stringify(data, null, 2));
        throw new Error("Invalid data structure from ArcGIS API.");
    }
  } catch (error) {
    console.error("Failed to fetch camera data from ArcGIS API, returning empty array:", error);
    return [];
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
