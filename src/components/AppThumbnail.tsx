import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import NumpyNode from '@site/src/components/nodes/NumpyNode';
import ScipyNode from '@site/src/components/nodes/ScipyNode';

type AppThumbnailProps = {
  children: string;
};

export default function AppThumbnail({ children, path }: AppThumbnailProps) {
  const { colorMode } = useColorMode();
  let thumbnailPath = 'examples/EX1/output.jpeg';
  let nodeLabel = path.split('/').pop();
  let nodeData = {label: nodeLabel}

  if( path.toLowerCase().indexOf('numpy') >= 0 ) {
    return (
      <div className="p-4">
        <a href={`/nodes/${path}/`}>
          <NumpyNode nodeProps={{data: nodeData}}/>
        </a>
      </div>
    )
  }

  if( path.toLowerCase().indexOf('scipy') >= 0 ) {
    return (
      <div className="p-4">
        <a href={`/nodes/${path}/`}>
          <ScipyNode nodeProps={{data: nodeData}}/>
        </a>
      </div>
    )
  }

  return (
    <div className="p-4">
        <a href={`/nodes/${path}/`}>
            {
            <figure className="app-example-thumbnail">
            <img src={`https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/${path}/${thumbnailPath}`}/>
            <figcaption>{children}</figcaption>
            </figure>
            }
        </a>
    </div>
  );
}
