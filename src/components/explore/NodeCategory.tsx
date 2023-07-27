import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { Divider } from './Divider';
import { DataNodeLink } from './nodes/DataNodeLink';
import { ETLNodeLink } from './nodes/ETLNodeLink';
import { LogicNodeLink } from './nodes/LogicNodeLink';
import { IONodeLink } from './nodes/IONodeLink';
import { NumpyNodeLink } from './nodes/NumpyNodeLink';
import { ScipyNodeLink } from './nodes/ScipyNodeLink';

const category = cva(undefined, {
  variants: {
    variant: {
      Data: ['text-accent2'],
      ETL: ['text-accent1'],
      'I/O': ['text-accent4'],
      Logic: ['text-accent3'],
      numpy: ['text-blue-500'],
      scipy: ['text-blue-500'],
    },
    bg: {
      Data: ['bg-accent2'],
      ETL: ['bg-accent1'],
      'I/O': ['bg-accent4'],
      Logic: ['bg-accent3'],
      numpy: ['bg-blue-500'],
      scipy: ['bg-blue-500'],
    },
    font: {
      0: ['text-3xl'],
      1: ['text-lg'],
    },
  },
});

type NodeSectionProps = {
  children: React.ReactNode;
  depth?: number;
  icon?: JSX.Element;
  title: string;
} & VariantProps<typeof category>;

function NodeSection({
  title,
  depth,
  icon,
  variant,
  children,
}: NodeSectionProps) {
  return (
    <div>
      <div className="flex gap-x-8 items-center px-4 py-2">
        {icon && <div className="h-20 flex items-center">{icon}</div>}
        <div
          className={clsx(
            'font-mono',
            category({ variant, font: depth as 0 | 1 })
          )}
        >
          {title}
        </div>
      </div>
      {depth === 0 && (
        <Divider className={clsx(category({ bg: variant }), 'mb-2')} />
      )}
      {children}
    </div>
  );
}

const linkMap = {
  Data: DataNodeLink,
  ETL: ETLNodeLink,
  Logic: LogicNodeLink,
  'I/O': IONodeLink,
  numpy: NumpyNodeLink,
  scipy: ScipyNodeLink,
};

type CategoryNode =
  | {
      [key: string]: CategoryNode;
    }
  | string[];

type NodeCategoryProps = {
  children?: React.ReactNode;
  data: CategoryNode;
  depth?: number;
  icon?: JSX.Element;
  title: string;
} & VariantProps<typeof category>;

export default function NodeCategory({
  data,
  depth = 0,
  icon,
  title,
  variant,
}: NodeCategoryProps) {
  if (Array.isArray(data)) {
    return (
      <>
        <div className="flex flex-wrap gap-4">
          {data.map(page => {
            const LinkComponent = linkMap[variant] ?? DataNodeLink;

            const parts = page.split('/');
            const name = parts[parts.length - 1];
            const to = '/' + parts.slice(0, -1).join('/');

            return <LinkComponent to={to}>{name}</LinkComponent>;
          })}
        </div>
        <div className="py-2" />
        <Divider
          className={clsx(category({ bg: variant }), 'my-4')}
          height={0.5}
        />
      </>
    );
  }

  return (
    <NodeSection title={title} variant={variant} depth={depth} icon={icon}>
      {Object.entries(data).map(([title, val]) => (
        <NodeSection title={title} variant={variant} depth={depth + 1}>
          <NodeCategory
            title={title}
            variant={variant}
            data={val}
            depth={depth + 1}
          />
        </NodeSection>
      ))}
    </NodeSection>
  );
}
