import React, { useEffect } from 'react';
import { useNodesInitialized, useReactFlow } from 'reactflow';

export const ViewFitter = () => {
  const rfInstance = useReactFlow();
  const nodesInitialized = useNodesInitialized();

  useEffect(() => {
    // fixes the issue that app is not centered in the viewport
    if (nodesInitialized) {
      rfInstance.fitView();
    }
  }, [nodesInitialized]);

  return <div />;
};
