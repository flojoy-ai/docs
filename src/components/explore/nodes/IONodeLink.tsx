import React from 'react';
import IOIcon from '../../icons/IOIcon';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const IONodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex flex-col items-center rounded-md px-2 py-2 text-accent4 duration-150 hover:bg-accent4/10">
        <IOIcon className="h-10 w-10" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
