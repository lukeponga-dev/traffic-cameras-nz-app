# 🚦 Speed Cameras NZ – Location-Aware Safety App

**Speed Cameras NZ** is a progressive web app (PWA) that helps New Zealand drivers stay informed about nearby speed cameras. It uses geolocation, push notifications, and open data to promote safer driving and local awareness.

---

## 📍 Features

- 🗺️ Interactive map of NZ speed camera locations  
- 🚨 Proximity alerts when approaching a camera  
- 🔔 Push notifications for new or updated cameras  
- 📡 Offline-ready via PWA caching  
- 📱 Optional native wrapper for Android APK  

---

## 🛠️ Tech Stack

| Layer           | Tools & Libraries                          |
|----------------|---------------------------------------------|
| Frontend        | React, Leaflet, Tailwind CSS               |
| Backend         | Node.js + Express (optional), Firebase     |
| Data            | JSON/CSV from NZTA, OSM, community sources |
| Hosting         | Firebase Hosting, Render, or Vercel        |
| Notifications   | Firebase Cloud Messaging or OneSignal      |
| Native Wrapper  | Capacitor or Trusted Web Activity (TWA)    |

---

## 📦 Data Format

```json
{
  "lat": -36.8485,
  "lng": 174.7633,
  "type": "fixed|mobile|redlight|average",
  "direction": "northbound",
  "speed_limit": 50,
  "source": "NZTA",
  "last_updated": "2025-10-01"
}

```
🧭 Roadmap

✅ Phase 1: Data Acquisition & Validation
- 🔍 Collect camera data from:
  - NZTA (Waka Kotahi) CSVs or APIs
  - OpenStreetMap (highway=speed_camera tags)
  - Community GitHub datasets
  - Police PDF releases (OCR parsing if needed)
- 🧪 Normalize into unified JSON format

🚧 Phase 2: MVP Web App (React + Leaflet)
- 🗺️ Display camera markers on Leaflet map  
- 🧭 Center map on user location (Geolocation API)  
- 🔍 Filter by camera type and speed limit  
- 📋 Show camera details on marker click  
- 💾 Load data from local cameras.json or live API  

🚧 Phase 3: Proximity Alerts
- 📍 Track user location in real time  
- 🚨 Trigger alerts when within X meters of a camera  
- 🧭 Optional: direction-aware alerts  
- 🔕 Allow user to mute or snooze alerts  

🚧 Phase 4: Push Notifications
- 🔔 Use Firebase Cloud Messaging or OneSignal  
- 📬 Notify users of:
  - Nearby cameras  
  - New or updated camera entries  
  - Speed limit changes  
- ✅ Opt-in flow with permission handling  

🚧 Phase 5: Native Wrapper (Android)
- 📱 Wrap PWA using Capacitor or Trusted Web Activity (TWA)  
- 📡 Enable background location tracking  
- 🔋 Optimize for battery and data usage  
- 🛠️ Publish to Play Store with branded assets  

🌐 Phase 6: Hosting & Deployment
- 🚀 Deploy to Firebase Hosting, Render, or Vercel  
- 🧪 Add CI/CD for auto-deploy on commit  
- 📈 Track usage with analytics (optional)  

---
