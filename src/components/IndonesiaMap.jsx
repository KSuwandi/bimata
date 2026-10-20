
import { useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import indonesiaGeoJsonRaw from "./indonesia.geojson?raw";
import Icon from "./Icon";

const MAP_SIZE = {
  width: 720,
  height: 330,
};

const MAP_EXTENT = [
  [24, 30],
  [696, 300],
];

const ROUTES = [
  [
    [95.3, 5.5],
    [101.4, -2.5],
    [110.4, -7.2],
    [114.5, 0.5],
    [119.4, -3.5],
    [130.8, -4.5],
  ],
  [
    [105.8, -6.2],
    [112.7, -7.5],
    [120.0, -2.5],
    [128.2, -3.0],
    [135.5, -4.0],
  ],
  [
    [98.7, 1.3],
    [108.0, 1.0],
    [117.0, 0.0],
    [125.0, 1.0],
    [133.5, -2.0],
  ],
];

const NETWORK_POINTS = [
  [101.4, -2.5],
  [110.4, -7.2],
  [114.5, 0.5],
  [119.4, -3.5],
  [130.8, -4.5],
];

function parseGeoJson(rawData) {
  try {
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Gagal membaca data peta Indonesia:", error);
    return null;
  }
}

const indonesiaGeoJson = parseGeoJson(indonesiaGeoJsonRaw);

function getFeatures(geoJson) {
  if (!geoJson) return [];

  if (geoJson.type === "FeatureCollection") {
    return geoJson.features ?? [];
  }

  if (geoJson.type === "Feature") {
    return [geoJson];
  }

  return [];
}

function IndonesiaMap() {
  const map = useMemo(() => {
    const features = getFeatures(indonesiaGeoJson);

    if (features.length === 0) {
      console.error("GeoJSON tidak memiliki fitur peta yang valid.");
      return null;
    }

    const mapData =
      features.length === 1
        ? features[0]
        : {
            type: "FeatureCollection",
            features,
          };

    const projection = geoMercator().fitExtent(
      MAP_EXTENT,
      mapData
    );

    const pathGenerator = geoPath(projection);

    return {
      islandPath: pathGenerator(mapData),

      routePaths: ROUTES.map((coordinates) =>
        pathGenerator({
          type: "LineString",
          coordinates,
        })
      ),

      points: NETWORK_POINTS
        .map((coordinates) => projection(coordinates))
        .filter(Boolean),
    };
  }, []);

  return (
    <div className="indonesia-map-panel">
      <div className="map-top-label">
        <span>
          <i /> COVERAGE CHECK
        </span>
        <span>INDONESIA</span>
      </div>

      <div className="map-aurora" />

      <svg
        className="indonesia-map"
        viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Peta kepulauan Indonesia dengan ilustrasi jaringan BIMATA"
      >
        <defs>
          <linearGradient
            id="islandGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#72d5ff" />
            <stop offset="100%" stopColor="#2b75e8" />
          </linearGradient>

          <filter
            id="mapGlow"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {map && (
          <>
            <g
              className="map-islands"
              fill="url(#islandGradient)"
              filter="url(#mapGlow)"
            >
              <path d={map.islandPath} />
            </g>

            <g
              className="map-routes"
              fill="none"
              stroke="#9beaff"
              strokeWidth="1.2"
            >
              {map.routePaths.map((path, index) => (
                <path key={index} d={path} />
              ))}
            </g>

            <g className="map-points">
              {map.points.map(([x, y], index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3.5"
                />
              ))}
            </g>
          </>
        )}
      </svg>

      <div className="map-caption">
        <div className="map-caption-icon">
          <Icon name="pin" size={18} />
        </div>

        <span>
          <b>Di mana pun lokasi Anda</b>
          <small>
            Mulai dengan cek ketersediaan jaringan.
          </small>
        </span>
      </div>

      <span className="map-coordinate coord-one">
        06° 12′ S
      </span>

      <span className="map-coordinate coord-two">
        NUSANTARA / ID
      </span>
    </div>
  );
}

export default IndonesiaMap;
