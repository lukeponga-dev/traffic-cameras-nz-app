
# 🚦 Kiwi Traffic Watch: NZ Speed & Traffic Cameras

A modern, responsive web application for monitoring live traffic and speed cameras across New Zealand.

## ✨ Features

- **🗺️ Interactive Map:** Display camera locations across New Zealand on an interactive map.
- **📷 Live Camera Feeds:** Provide live images from traffic cameras via interactive list and map.
- **📍 Geolocation:** Allow users to find their location and identify nearby cameras using the Google Maps Platform.
- **🔍 Destination Search:** Enable destination search with driving directions using the Google Maps Platform.
- **❤️ Favorites:** Let users save their most-viewed cameras for quick access.
- **📊 Data Fetch and display:** Unified schema data fetching from trafficnz.info for camera information.

## 🛠️ Tech Stack

| Category      | Technology                                         |
|---------------|----------------------------------------------------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router)        |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)      |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/)             |
| **UI**        | [shadcn/ui](https://ui.shadcn.com/)                  |
| **Mapping**   | [Google Maps Platform](https://maps.google.com/)     |
| **Data**      | Live feed from [trafficnz.info](https://trafficnz.info/) |

## 📦 Camera Data Schema

The application uses a unified schema for camera data, processed from the live feed:

```json
{
  "id": "string",
  "name": "string",
  "region": "string",
  "latitude": "number",
  "longitude": "number",
  "direction": "string",
  "status": "'Active' | 'Under Maintenance'",
  "imageUrl": "string",
  "description": "string"
}
```

## 🧭 Project Roadmap

- **Phase 1 (Complete):** Core application with map view, camera list, live data integration, and favorites.
- **Phase 2 (Next):** Implement proximity alerts and push notifications for nearby cameras.
- **Phase 3 (Future):** Explore native mobile features and advanced filtering options.
