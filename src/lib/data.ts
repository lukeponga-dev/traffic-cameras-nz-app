
import type { Camera } from './types';

let cameraCache: Camera[] | null = null;
const API_BASE_URL = 'https://services2.arcgis.com/J3hEY3sE4y1t3vj3/arcgis/rest/services/CCTV_Cameras/FeatureServer/0';

// This function processes the data from the ArcGIS Feature Service
function processArcGisData(data: any): Camera[] {
  if (!data || !Array.isArray(data.features)) {
    return [];
  }

  return data.features.map((feature: any) => {
    const { attributes, geometry } = feature;
    return {
      id: attributes.OBJECTID.toString(),
      name: attributes.Location || 'Unknown Camera',
      region: attributes.Region || 'Unknown Region',
      latitude: geometry?.y || 0,
      longitude: geometry?.x || 0,
      direction: attributes.Direction || 'N/A',
      status: attributes.Status === 'Active' ? 'Active' : 'Under Maintenance',
      imageUrl: attributes.ImageURL || 'https://placehold.co/600x400/222/fff?text=No+Image',
      description: attributes.Location || '',
      highway: attributes.RoadName || 'N/A',
    };
  });
}


export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }
  
  const queryParams = `f=json&where=1=1&outFields=*`;
  const url = `${API_BASE_URL}/query?${queryParams}`;

  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`ArcGIS API request failed with status ${response.status}`);
    }
    const data = await response.json();
    
    if (data.error) {
        console.error("ArcGIS API returned an error:", data.error);
        return [];
    }

    if (data && data.features) {
        cameraCache = processArcGisData(data);
        return cameraCache;
    } else {
        console.error("Invalid data structure from ArcGIS API. Received:", JSON.stringify(data, null, 2));
        throw new Error("Invalid data structure from ArcGIS API.");
    }
  } catch (error) {
    console.error("Failed to fetch camera data from ArcGIS API, returning empty array:", error);
    return []; // Return empty array on fetch error
  }
}

export async function getCameraById(id: string): Promise<Camera | undefined> {
    const cameras = await getAllCameras();
    return cameras.find(camera => camera.id === id);
}
