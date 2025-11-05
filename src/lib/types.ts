export type Camera = {
  id: string;
  name: string;
  region: string;
  latitude: number;
  longitude: number;
  direction: string;
  status: 'Active' | 'Under Maintenance' | 'Proposed' | 'Inactive';
  imageUrl: string;
  description?: string;
  group?: string;
};
