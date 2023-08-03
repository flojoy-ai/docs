import React from 'react';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const ETLNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex min-w-fit items-center justify-center rounded-md border border-solid border-accent1 px-4 py-2 text-accent1 duration-150 hover:bg-accent1/10">
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
