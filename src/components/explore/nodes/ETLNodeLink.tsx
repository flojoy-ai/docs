import React from 'react';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const ETLNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="border border-accent1 rounded-md min-w-fit flex items-center justify-center py-2 px-4 text-accent1">
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
