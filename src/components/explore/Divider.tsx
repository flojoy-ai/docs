import React from 'react';
import clsx from 'clsx';

type DividerProps = {
  className?: string;
  height?: number;
};

export function Divider({ className, height = 1 }: DividerProps) {
  return (
    <div
      className={clsx('w-full', className ?? 'bg-accent1')}
      style={{
        height,
      }}
    />
  );
}
