
import React, { useLayoutEffect, useState } from "react";

function SyncedState() {
  const [color, setColor] = useState("blue");

  useLayoutEffect(() => {
    if (color === "red") {
      console.log("The color was just set to red!");
    }
  }, [color]);

  // Ensure state updates are applied before rendering to prevent visual glitches.

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: color,
        }}
      ></div>
      <button onClick={() => setColor("red")}>Make Red</button>
      <button onClick={() => setColor("blue")}>Make Blue</button>
    </div>
  );
}

export default SyncedState;
