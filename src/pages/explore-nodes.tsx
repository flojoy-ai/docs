import React from 'react';
import Layout from '@theme/Layout';
import nodeData from '../../nodeSidebar.json';
import NodeCategory from '../components/explore/NodeCategory';
import { partialUnflatten } from '../utils/partialUnflatten';
import { variants } from '../components/explore/variants';

const variantMap = {
  Data: 'data',
  ETL: 'etl',
  'I/O': 'io',
  Flow: 'logic',
  'NUMerical PYthon (NumPy)': 'numpy',
  'SCIentific PYthon (SciPy)': 'scipy',
};

export default function Explore() {
  const data = partialUnflatten(nodeData, ' > ', 2);

  return (
    <Layout title="Explore">
      {Object.entries(data).map(([title, val]) => {
        const variant = variantMap[title];
        const v = variants[variant];
        return (
          <div className="mx-4">
            <NodeCategory
              title={v.title}
              variant={variant}
              data={val}
              icon={v.icon}
            />
          </div>
        );
      })}
    </Layout>
  );
}
