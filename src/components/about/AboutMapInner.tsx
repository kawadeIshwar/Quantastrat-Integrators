"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const HUBS = [
  { name: "Bengaluru", coordinates: [77.6, 12.97] as [number, number] },
  { name: "Pune", coordinates: [73.86, 18.52] as [number, number] },
  { name: "Mumbai", coordinates: [72.88, 19.08] as [number, number] },
  { name: "Ahmedabad", coordinates: [72.57, 23.03] as [number, number] },
  { name: "Delhi NCR", coordinates: [77.1, 28.7] as [number, number] },
  { name: "Chennai", coordinates: [80.28, 13.08] as [number, number] },
  { name: "Hyderabad", coordinates: [78.48, 17.38] as [number, number] },
  { name: "Kolkata", coordinates: [88.36, 22.57] as [number, number] },
  { name: "Jamshedpur", coordinates: [86.19, 22.8] as [number, number] },
  { name: "Visakhapatnam", coordinates: [83.3, 17.7] as [number, number] },
  { name: "Ludhiana", coordinates: [75.86, 30.9] as [number, number] },
  { name: "Surat", coordinates: [72.84, 21.19] as [number, number] },
];

export default function AboutMapInner() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [82.5, 22], scale: 920 }}
      width={500}
      height={560}
      style={{ width: "100%", height: "auto" }}
    >
      <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isIndia = geo.id === "356";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isIndia ? "#fff3e8" : "#f3f4f6"}
                  stroke={isIndia ? "#f97316" : "#e5e7eb"}
                  strokeWidth={isIndia ? 0.8 : 0.4}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: isIndia ? "#ffe4c4" : "#f3f4f6" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {HUBS.map((hub) => {
          const isHovered = hovered === hub.name;
          return (
            <Marker
              key={hub.name}
              coordinates={hub.coordinates}
              onMouseEnter={() => setHovered(hub.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {isHovered && (
                <circle r={10} fill="#ff6b00" opacity={0.15}>
                  <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                r={isHovered ? 6 : 4.5}
                fill={isHovered ? "#ff6b00" : "#fff"}
                stroke="#ff6b00"
                strokeWidth={1.5}
                style={{ transition: "all 0.2s ease" }}
              />
              <circle
                r={2}
                fill={isHovered ? "#fff" : "#ff6b00"}
                style={{ transition: "all 0.2s ease" }}
              />
              <text
                textAnchor="middle"
                y={-10}
                fontSize={isHovered ? 7 : 6}
                fontWeight={isHovered ? 700 : 500}
                fill={isHovered ? "#ff6b00" : "#6b7280"}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  transition: "all 0.2s ease",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {hub.name}
              </text>
            </Marker>
          );
        })}
      </ZoomableGroup>
    </ComposableMap>
  );
}
