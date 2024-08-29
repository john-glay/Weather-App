import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import "../styles/components/Map.scss";

const API_KEY = process.env.REACT_APP_MAPTILER_API_KEY;

function Map({ center }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic/style.json?key=${API_KEY}`,
      center: center,
      zoom: 9.5,
      attributionControl: false,
      scrollZoom: false, // Disable scroll zoom
      dragPan: false, // Disable dragging
      doubleClickZoom: false, // Disable double click zoom
      touchZoomRotate: false, // Disable touch zoom and rotate
    });

    // Disable all keyboard interactions
    map.keyboard.disable();

    return () => map.remove();
  }, [center]);

  return (
    <div className="Map">
      <div ref={mapContainer} className="render-map" />
    </div>
  );
}

export default Map;
