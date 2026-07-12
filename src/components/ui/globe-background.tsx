import { lazy, Suspense } from "react";

const World = lazy(() =>
  import("@/components/ui/globe").then((m) => ({ default: m.World }))
);

const globeConfig = {
  pointSize: 4,
  globeColor: "#0f5132",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.1,
  emissive: "#0f5132",
  emissiveIntensity: 0.15,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.5)",
  ambientLight: "#f5e6c8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1500,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: -0.5, lng: 34.5 },
  autoRotate: true,
  autoRotateSpeed: 0.4,
};

const colors = ["#10b981", "#f97316", "#f59e0b"];
const sampleArcs = [
  { order: 1, startLat: -1.2921, startLng: 36.8219, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[0] },
  { order: 1, startLat: -0.5273, startLng: 34.4571, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: colors[1] },
  { order: 2, startLat: -1.2921, startLng: 36.8219, endLat: 28.6139, endLng: 77.209, arcAlt: 0.4, color: colors[2] },
  { order: 2, startLat: -0.5273, startLng: 34.4571, endLat: -33.9249, endLng: 18.4241, arcAlt: 0.3, color: colors[0] },
  { order: 3, startLat: -1.2921, startLng: 36.8219, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.5, color: colors[1] },
  { order: 3, startLat: -0.5273, startLng: 34.4571, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.5, color: colors[2] },
  { order: 4, startLat: -1.2921, startLng: 36.8219, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.3, color: colors[0] },
  { order: 4, startLat: 9.145, startLng: 40.4897, endLat: -0.5273, endLng: 34.4571, arcAlt: 0.2, color: colors[1] },
  { order: 5, startLat: -0.5273, startLng: 34.4571, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.5, color: colors[2] },
  { order: 5, startLat: -1.2921, startLng: 36.8219, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.7, color: colors[0] },
  { order: 6, startLat: 30.0444, startLng: 31.2357, endLat: -1.2921, endLng: 36.8219, arcAlt: 0.3, color: colors[1] },
  { order: 6, startLat: -0.5273, startLng: 34.4571, endLat: 55.7558, endLng: 37.6173, arcAlt: 0.4, color: colors[2] },
];

const GlobeBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Suspense fallback={null}>
        <World globeConfig={globeConfig} data={sampleArcs} />
      </Suspense>
    </div>
  );
};

export default GlobeBackground;
