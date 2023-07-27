import React from 'react';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const LogicNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex items-center text-accent3 py-2 px-2">
        <div className="w-6 h-6 border-2 border-accent3 rounded-md rotate-45" />
        <div className="px-1" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
