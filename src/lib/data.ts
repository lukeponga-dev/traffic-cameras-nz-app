
import type { Camera } from './types';

let cameraCache: Camera[] | null = null;
const ARCGIS_URL = 'https://services2.arcgis.com/CXto30y3o056yP4g/ArcGIS/rest/services/wz_traffic_camera_poc_v3/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&resultOffset=0&resultRecordCount=2000';


function processArcGisData(data: any): Camera[] {
  if (!data || !Array.isArray(data.features)) {
    return [];
  }

  return data.features.map((feature: any) => {
    const attrs = feature.attributes;
    const geom = feature.geometry;

    return {
      id: String(attrs.CameraID) || String(attrs.OBJECTID),
      name: attrs.Name || 'Unknown Camera',
      region: attrs.Region || 'Unknown Region',
      latitude: geom?.y,
      longitude: geom?.x,
      direction: attrs.Direction || 'N/A',
      status: attrs.Operational === 'Yes' ? 'Active' : 'Under Maintenance',
      imageUrl: attrs.ImageURL,
      description: attrs.Description || '',
      highway: attrs.RoadName || '',
    };
  });
}

export async function getAllCameras(): Promise<Camera[]> {
  if (cameraCache) {
    return cameraCache;
  }
  
  try {
    const response = await fetch(ARCGIS_URL, { cache: 'no-store' });
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
