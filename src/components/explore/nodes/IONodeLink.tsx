import React from 'react';
import IOIcon from '../../icons/IOIcon';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const IONodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex flex-col items-center text-accent4 py-2 px-2">
        <IOIcon className="w-10 h-10" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
