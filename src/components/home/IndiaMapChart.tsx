"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

// World atlas TopoJSON — India is feature with numeric ISO 356
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Hub {
  id: string;
  name: string;
  role: string;
  coordinates: [number, number];
  industries: string[];
}

interface Props {
  hubs: Hub[];
  activeId: string;
  onSelect: (hub: Hub) => void;
}

export default function IndiaMapChart({ hubs, activeId, onSelect }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [82.5, 22],   // center of India
          scale: 920,
        }}
        width={500}
        height={560}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
          {/* Render all countries but style India distinctly */}
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
                      hover:   { outline: "none", fill: isIndia ? "#ffe4c4" : "#f3f4f6" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Hub markers */}
          {hubs.map((hub) => {
            const isActive = hub.id === activeId;
            const isHovered = hub.id === hoveredId;
            const highlight = isActive || isHovered;

            return (
              <Marker
                key={hub.id}
                coordinates={hub.coordinates}
                onClick={() => onSelect(hub)}
                onMouseEnter={() => setHoveredId(hub.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Pulse ring for active */}
                {highlight && (
                  <circle r={10} fill="#ff6b00" opacity={0.15}>
                    <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Outer circle */}
                <circle
                  r={highlight ? 6 : 4.5}
                  fill={highlight ? "#ff6b00" : "#fff"}
                  stroke="#ff6b00"
                  strokeWidth={1.5}
                  style={{ transition: "all 0.2s ease" }}
                />

                {/* Inner dot */}
                <circle
                  r={2}
                  fill={highlight ? "#fff" : "#ff6b00"}
                  style={{ transition: "all 0.2s ease" }}
                />

                {/* City label */}
                <text
                  textAnchor="middle"
                  y={-10}
                  fontSize={highlight ? 7 : 6}
                  fontWeight={highlight ? 700 : 500}
                  fill={highlight ? "#ff6b00" : "#6b7280"}
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
    </div>
  );
}
