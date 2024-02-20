import React, { useState } from "react";

const KommuneLayerCheckbox = () => {
  const [checked, setChecked] = useState(false);
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
