import React from 'react';
import ScipyIcon from '../../icons/ScipyIcon';
import { NodeLinkProps, NodeLinkWrapper } from './NodeLink';

export const ScipyNodeLink = ({ children, ...props }: NodeLinkProps) => {
  return (
    <NodeLinkWrapper {...props}>
      <div className="border border-blue-500 rounded-md min-w-fit flex items-center justify-center py-1 px-2 text-blue-500">
        <ScipyIcon className="w-8 h-8" />
        <div className="px-1" />
        {children}
      </div>
    </NodeLinkWrapper>
  );
};
