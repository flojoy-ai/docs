import React from 'react';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const DataNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex min-w-fit items-center justify-center rounded-full border border-solid border-accent2 px-4 py-2 text-accent2 duration-150 hover:bg-accent2/10">
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
