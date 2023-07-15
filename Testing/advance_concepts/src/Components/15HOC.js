import React from "react";
import { useState } from "react";

const WithLoader = (WrappedComponent) => {
  const [loading, setloading] = useState(true);
  return (props) => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
    return (
      <div>
        {loading ? <p>Loading...</p> : <WrappedComponent {...props} />}
      </div>
    );
  };
};
export default WithLoader;
