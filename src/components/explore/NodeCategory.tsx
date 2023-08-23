import React, { useState } from 'react';
import { GoTriangleUp } from 'react-icons/go';
import clsx from 'clsx';
import { Divider } from './Divider';
import { DataNodeLink } from './nodes/DataNodeLink';
import { variants } from './variants';

type NodeSectionProps = {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  icon?: JSX.Element;
  title: string;
  variant: keyof typeof variants;
};

function NodeSection({
  title,
  className,
  depth,
  icon,
  variant,
  children,
}: NodeSectionProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const v = variants[variant];

  return (
    <div className={className}>
      <div className="flex items-center gap-x-8 px-4 py-2">
        {icon && <div className="flex h-20 items-center">{icon}</div>}
        <div
          className={clsx(
            'font-mono',
            depth === 0 ? ' text-3xl' : 'text-lg',
            v.text
          )}
        >
          {title.concat(depth === 0 ? ' nodes' : '')}
        </div>
        <GoTriangleUp
          className={clsx(
            'cursor-pointer transition-all',
            v.fill,
            collapsed ? 'rotate-180' : 'rotate-0'
          )}
          onClick={toggleCollapse}
        />
      </div>
      {depth === 0 && <Divider className={clsx(v.bg, 'mb-6')} />}
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
  variant: keyof typeof variants;
};

export default function NodeCategory({
  data,
  depth = 0,
  icon,
  title,
  variant,
}: NodeCategoryProps) {
  const v = variants[variant];

  if (Array.isArray(data)) {
    return (
      <NodeSection
        title={title}
        variant={variant}
        depth={depth}
        icon={icon}
        className={depth === 0 ? 'mb-8' : ''}
      >
        <div className="flex flex-wrap gap-4">
          {data.map(page => {
            const LinkComponent = v.linkComponent ?? DataNodeLink;

            const parts = page.split('/');
            const name = parts[parts.length - 1];
            const to = '/' + parts.slice(0, -1).join('/');

            return (
              <LinkComponent to={to} key={name}>
                {name}
              </LinkComponent>
            );
          })}
        </div>
        <div className="py-2" />
        <Divider className={clsx(v.bg, 'my-4')} height={0.5} />
      </NodeSection>
    );
  }

  return (
    <NodeSection
      title={title}
      variant={variant}
      depth={depth}
      icon={icon}
      className={depth === 0 ? 'mb-8' : ''}
    >
      {Object.entries(data).map(([title, val], i) => (
        <NodeCategory
          title={title}
          variant={variant}
          data={val}
          depth={depth + 1}
          key={`${title}${i}`}
        />
      ))}
    </NodeSection>
  );
}
