import React, { useState } from 'react';
import { GoTriangleUp } from 'react-icons/go';
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
    fill: {
      Data: ['fill-accent2'],
      ETL: ['fill-accent1'],
      'I/O': ['fill-accent4'],
      Logic: ['fill-accent3'],
      numpy: ['fill-blue-500'],
      scipy: ['fill-blue-500'],
    },
  },
});

const linkMap = {
  Data: DataNodeLink,
  ETL: ETLNodeLink,
  Logic: LogicNodeLink,
  'I/O': IONodeLink,
  numpy: NumpyNodeLink,
  scipy: ScipyNodeLink,
};

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
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div className="flex items-center gap-x-8 px-4 py-2">
        {icon && <div className="flex h-20 items-center">{icon}</div>}
        <div
          className={clsx(
            'font-mono',
            depth === 0 ? 'text-3xl' : 'text-lg',
            category({ variant })
          )}
        >
          {title}
        </div>
        <GoTriangleUp
          className={clsx(
            'cursor-pointer transition-all',
            category({ fill: variant }),
            collapsed ? 'rotate-180' : 'rotate-0'
          )}
          onClick={toggleCollapse}
        />
      </div>
      {depth === 0 && (
        <Divider className={clsx(category({ bg: variant }), 'mb-6')} />
      )}
      <div
        className={clsx(
          'grid transition-all duration-300',
          collapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

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
      <NodeSection title={title} variant={variant} depth={depth}>
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
      </NodeSection>
    );
  }

  return (
    <NodeSection title={title} variant={variant} depth={depth} icon={icon}>
      {Object.entries(data).map(([title, val]) => (
        <NodeCategory
          title={title}
          variant={variant}
          data={val}
          depth={depth + 1}
        />
      ))}
    </NodeSection>
  );
}
