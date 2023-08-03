import React from 'react';
import ScipyIcon from '../../icons/ScipyIcon';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const ScipyNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex min-w-fit items-center justify-center rounded-md border border-solid border-blue-500 px-2 py-1 text-blue-500 duration-150 hover:bg-blue-500/10">
        <ScipyIcon className="h-8 w-8" />
        <div className="px-1" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
