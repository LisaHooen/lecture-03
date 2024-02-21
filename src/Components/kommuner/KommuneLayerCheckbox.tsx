import Layer from "ol/layer/Layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GeoJSON } from "ol/format";

const kommuneLayer = new VectorLayer({
  source: new VectorSource({
    url: "/lecture-03/kommuner.json",
    format: new GeoJSON(),
  }),
});

const KommuneLayerCheckbox = ({
  setLayers,
}: {
  setLayers: Dispatch<SetStateAction<Layer[]>>;
}) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (checked) {
      setLayers((old) => [...old, kommuneLayer]);
    }
    return () => setLayers((old) => old.filter((l) => l !== kommuneLayer));
  }, [checked]);
  return (
    <>
      <div>
        <label>
          <input
            type={"checkbox"}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          {checked ? "Hide " : "Show "}Kommune layer
        </label>
      </div>
    </>
  );
};
export default KommuneLayerCheckbox;
