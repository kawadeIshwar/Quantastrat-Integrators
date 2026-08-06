"use client";

/**
 * Accurate map of India rendered using @svg-maps/india path data.
 * Only mainland states are rendered (islands excluded) with a solid orange
 * fill (#FF6B00) to create a silhouette matching the brand reference image.
 * Major cities are overlaid with pulsing white dot markers and labels.
 */

import indiaMap from "@svg-maps/india";

/* ── IDs to exclude (islands that distort the mainland silhouette) ── */
const EXCLUDED_IDS = new Set(["an", "lk"]);

/* ── Major cities with coordinates mapped to the full viewBox ── */
/* Full viewBox: "0 0 612 696" — original @svg-maps/india coordinate space */
const CITIES: { name: string; x: number; y: number; align?: "left" | "right" }[] = [
  { name: "Delhi", x: 186, y: 210, align: "right" },
  { name: "Jaipur", x: 155, y: 248, align: "left" },
  { name: "Lucknow", x: 269, y: 249, align: "right" },
  { name: "Ahmedabad", x: 83, y: 335, align: "left" },
  { name: "Kolkata", x: 432, y: 345, align: "right" },
  { name: "Mumbai", x: 100, y: 411, align: "left" },
  { name: "Pune", x: 133, y: 440, align: "left" },
  { name: "Hyderabad", x: 214, y: 460, align: "right" },
  { name: "Bengaluru", x: 194, y: 559, align: "left" },
  { name: "Chennai", x: 254, y: 556, align: "right" },
  { name: "Chandigarh", x: 176, y: 163, align: "left" },
  { name: "Bhopal", x: 190, y: 329, align: "right" },
  { name: "Kochi", x: 165, y: 627, align: "left" },
];

export default function IndiaMap() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg
        viewBox="0 0 612 696"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto max-h-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Map of India showing major cities where Quantastrat operates"
      >
        <defs>
          <style>{`
            @keyframes map-pulse {
              0% { transform: scale(1); opacity: 0.7; }
              100% { transform: scale(3.5); opacity: 0; }
            }
            .map-pulse-ring {
              animation: map-pulse 2.2s ease-out infinite;
              transform-box: fill-box;
              transform-origin: center;
            }
          `}</style>
        </defs>

        {/* ── Mainland state paths rendered as solid orange silhouette ── */}
        {indiaMap.locations
          .filter(
            (loc: { id: string; name: string; path: string }) =>
              !EXCLUDED_IDS.has(loc.id)
          )
          .map((loc: { id: string; name: string; path: string }) => (
            <path
              key={loc.id}
              d={loc.path}
              fill="#FF6B00"
              stroke="#E85D04"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          ))}

        {/* ── City markers ── */}
        {CITIES.map((city) => (
          <g key={city.name}>
            {/* Pulse ring */}
            <circle
              cx={city.x}
              cy={city.y}
              r="4"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="1.5"
              className="map-pulse-ring"
            />
            {/* Outer dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r="4.5"
              fill="#fff"
              opacity="0.95"
            />
            {/* Inner dot */}
            <circle cx={city.x} cy={city.y} r="2.5" fill="#FF6B00" />
            {/* City label */}
            <text
              x={city.align === "right" ? city.x + 10 : city.x - 10}
              y={city.y + 4}
              textAnchor={city.align === "right" ? "start" : "end"}
              fill="#1a1a1a"
              style={{
                fontSize: "10px",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
