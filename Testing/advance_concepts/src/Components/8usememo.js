import React from "react";

import React, { useMemo } from 'react';

const MyComponent = () => {
  // Example expensive computation
  const expensiveComputation = () => {
    // ... perform some heavy calculations
    return result;
  };

  const memoizedValue = useMemo(() => expensiveComputation(), []);

  return (
    <div>
      <p>Computed Value: {memoizedValue}</p>
    </div>
  );
};

export default MyComponent;
