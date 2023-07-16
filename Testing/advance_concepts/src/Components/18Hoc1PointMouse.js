import React from "react";
import { useState, useEffect } from "react";
import MousePosition from "./19MousePosition";
const PointMouseLogger = () => {
    return (
      <MousePosition
        render={({ mousePosition }) => (
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
    );
  };

  export default PointMouseLogger;