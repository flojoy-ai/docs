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
  const data = partialUnflatten(nodeData, ' > ', 2, ['Transform']);

  return (
    <Layout title="Explore">
      <h1 style={{ margin: '20px', color: '#8C9699', textAlign: 'center' }}>
        ⎈ Nodes Explorer
      </h1>
      {Object.entries(data).map(([title, val], i) => {
        const variant = variantMap[title];
        const v = variants[variant];
        return (
          <div className="mx-4">
            <NodeCategory
              title={v.title}
              variant={variant}
              data={val}
              icon={v.icon}
              key={`${title}${i}`}
            />
          </div>
        );
      })}
    </Layout>
  );
}
