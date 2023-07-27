import React from 'react';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const DataNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="border border-accent2 rounded-full min-w-fit flex items-center justify-center py-2 px-4 text-accent2">
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
