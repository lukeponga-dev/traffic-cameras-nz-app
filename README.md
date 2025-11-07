# 🚦 Kiwi Traffic Watch: NZ Speed & Traffic Cameras

A modern, responsive web application for monitoring live traffic and speed cameras across New Zealand.

## ✨ Features

- **🗺️ Interactive Map:** A full-screen map displaying all camera locations across New Zealand.
- **📷 Live Camera Feeds:** View real-time images from traffic cameras in an interactive list and on the map.
- **📍 Geolocation:** Find your current location on the map to see nearby cameras.
- **🔍 Destination Search:** Search for any destination and get driving directions routed on the map.
- **❤️ Favorites:** Save your most-viewed cameras for quick and easy access.
- **📱 Responsive Design:** A clean, user-friendly interface that works beautifully on desktop and mobile devices.

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
