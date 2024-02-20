import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";

useGeographic();

const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  view: new View({ center: [10, 59], zoom: 8 }),
});

const MapApplication = () => {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);
  return (
    <>
      <header>
        <h1></h1>
      </header>
      <nav></nav>
      <main>
        <div ref={mapRef}>
          <h1>her skal kartet være</h1>
        </div>
      </main>
    </>
  );
};
export default MapApplication;
