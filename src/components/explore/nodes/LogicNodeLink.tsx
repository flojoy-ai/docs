import React from 'react';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const LogicNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex items-center rounded-md px-2 py-2 text-accent3 duration-150 hover:bg-accent3/10">
        <div className="h-6 w-6 rotate-45 rounded-md border-2 border-solid border-accent3" />
        <div className="px-1.5" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
