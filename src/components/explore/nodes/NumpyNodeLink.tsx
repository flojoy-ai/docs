import React from 'react';
import NumpyIcon from '../../icons/NumpyIcon';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const NumpyNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="flex min-w-fit items-center justify-center rounded-md border border-solid border-blue-500 px-2 py-1 text-blue-500 duration-150 hover:bg-blue-500/10">
        <NumpyIcon className="mt-1 h-8 w-8" />
        <div className="px-1" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
