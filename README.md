
# 🚦 Kiwi Traffic Watch: NZ Speed & Traffic Cameras

A modern, responsive web application for monitoring live traffic and speed cameras across New Zealand, built with Next.js and the Google Maps Platform.

## ✨ Features

- **🗺️ Interactive Map & Sidebar:** A unified, responsive interface with a main map view and a collapsible sidebar for camera searching and filtering.
- **📷 Live Camera Feeds:** Live images from traffic cameras that automatically refresh, providing up-to-date visuals.
- **📍 Real-Time Geolocation:** Find your current location on the map and see nearby cameras with a single click.
- **❤️ Favorites System:** Save your most-viewed cameras for quick and easy access from a dedicated favorites page.
- **🔍 Powerful Search & Filtering:** Instantly search for cameras by name, highway, or description, and filter by region.
- **📱 Mobile-First Design:** A native-like experience on mobile with a dedicated bottom navigation bar and a responsive layout for all screen sizes.
- **🚗 Driving Directions:** Get instant driving directions to any camera location via Google Maps.

## 🛠️ Tech Stack

| Category      | Technology                                         |
|---------------|----------------------------------------------------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router)        |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)      |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/)             |
| **UI**        | [shadcn/ui](https://ui.shadcn.com/)                  |
| **Mapping**   | [Google Maps Platform](https://maps.google.com/)     |
| **Data**      | Live feed from [trafficnz.info](https://trafficnz.info/) |

## 🚀 Getting Started

To get the project running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/kiwi-traffic-watch.git
    cd kiwi-traffic-watch
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project and add your Google Maps API key:
    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
    ```
    You can obtain an API key from the [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/overview).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running at `http://localhost:9002`.

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
  "description": "string",
  "highway": "string"
}
```

## 🧭 Project Roadmap

- **Phase 1 (Complete):** Core application with map view, camera list, live data integration, and favorites.
- **Phase 2 (Next):** Implement proximity alerts and push notifications for nearby cameras.
- **Phase 3 (Future):** Explore native mobile features and advanced filtering options.
