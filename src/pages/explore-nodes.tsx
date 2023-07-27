import React from 'react';
import Layout from '@theme/Layout';
import nodeData from '../../nodeSidebar.json';
import NodeCategory from '../components/explore/NodeCategory';
import { partialUnflatten } from '../utils/partialUnflatten';
import DataIcon from '../components/icons/DataIcon';
import ETLIcon from '../components/icons/ETLIcon';
import IOIcon from '../components/icons/IOIcon';
import LogicIcon from '../components/icons/LogicIcon';
import NumpyIcon from '../components/icons/NumpyIcon';
import ScipyIcon from '../components/icons/ScipyIcon';

const variantMap = {
  Data: 'Data',
  ETL: 'ETL',
  'I/O': 'I/O',
  Flow: 'Logic',
  'NUMerical PYthon (NumPy)': 'numpy',
  'SCIentific PYthon (SciPy)': 'scipy',
};

const iconMap = {
  Data: <DataIcon width={64} height={64} />,
  ETL: <ETLIcon width={80} height={80} />,
  'I/O': <IOIcon width={48} height={48} />,
  Logic: <LogicIcon width={48} height={48} />,
  numpy: <NumpyIcon width={48} height={48} />,
  scipy: <ScipyIcon width={48} height={48} />,
};

export default function Explore() {
  const data = partialUnflatten(nodeData, ' > ', 2);
  console.log(data);

  return (
    <Layout
      title="Explore"
      description="Explore the nodes Flojoy has to offer."
    >
      {Object.entries(data).map(([title, val]) => {
        const variant = variantMap[title];
        return (
          <div className="mx-4">
            <NodeCategory
              title={variant}
              variant={variant}
              data={val}
              icon={iconMap[variant]}
            />
          </div>
        );
      })}
    </Layout>
  );
}
