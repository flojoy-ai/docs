import React from 'react';
import NumpyIcon from '../../icons/NumpyIcon';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const NumpyNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="border border-blue-500 rounded-md min-w-fit flex items-center justify-center py-1 px-2 text-blue-500">
        <NumpyIcon className="w-8 h-8 mt-1" />
        <div className="px-1" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
