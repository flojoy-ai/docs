import { CustomNodeProps } from "@site/src/types/node";
import React from "react";

const NodeWrapper = ({
  children,
}: {
  wrapperProps: CustomNodeProps;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="relative"
      data-testid="node-wrapper"
    >
      {children}
    </div>
  );
};

export default NodeWrapper;
