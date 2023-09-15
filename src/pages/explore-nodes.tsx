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
  NumPy: 'numpy',
  SciPy: 'scipy',
};

export default function Explore() {
  const data = partialUnflatten(nodeData, ' > ', 2, ['Transform']);
  const liteGradient =
    'bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600';

  return (
    <Layout title="Explore">
      <h1
        className={`explore-nodes-h1 text-5xl font-extrabold text-transparent ${liteGradient}`}
      >
        <div>explore</div>
        <div>nodes</div>
      </h1>

      <h2 className="explore-nodes-h2">
        Nodes are the drag-&-drop building blocks of Flojoy Studio.
        <br></br>
      </h2>

      <div className="explore-nodes-preamble">
        <p>Here's what to know about nodes:</p>
        <ul>
          <li>Nodes are just Python or C scripts under-the-hood.</li>
          <li>
            You can create your own nodes by following{' '}
            <a href="/custom-nodes/creating-custom-node/">this guide</a>.
          </li>
          <li>
            All nodes are open-source and can be inspected{' '}
            <a href="https://github.com/flojoy-ai/nodes">on GitHub</a>.
          </li>
        </ul>
      </div>

      {/* ToC */}

      <div className="node-explorer-toc">
        <h3>Node types</h3>

        {Object.entries(data).map(([title, val], i) => {
          const variant = variantMap[title];
          const v = variants[variant];

          title = title.indexOf('NumPy') >= 0 ? 'numpy' : title;
          title = title.indexOf('SciPy') >= 0 ? 'scipy' : title;

          return (
            <>
              {title != 'Flow' && (
                <>
                  <a href={`#${title}`}>{title}</a>
                  <blockquote style={{ margin: '0' }}>
                    <ul style={{ listStyleType: 'none' }}>
                      {Object.keys(val).map(k => {
                        let hashString = k.indexOf('AI') >= 0 ? 'AI_ML' : k;
                        hashString = hashString.toUpperCase().replace(' ', '_');
                        return (
                          <li>
                            <a href={`#${hashString}`}>{k}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </blockquote>
                </>
              )}
            </>
          );
        })}
      </div>

      <hr style={{ margin: '40px 20px' }}></hr>

      {/* Content */}

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
