import Link from '@docusaurus/Link';
import React from 'react';

export type NodeLinkProps = {
  to: string;
  children: React.ReactNode;
};

export const NodeLinkWrapper = ({ to, children }: NodeLinkProps) => {
  return (
    <Link href={to} className="hover:no-underline font-bold tracking-wider">
      {children}
    </Link>
  );
};
