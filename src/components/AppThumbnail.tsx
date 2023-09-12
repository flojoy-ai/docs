import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import NumpyNode from '@site/src/components/nodes/NumpyNode';
import ScipyNode from '@site/src/components/nodes/ScipyNode';

type AppThumbnailProps = {
  children: string;
  path: string;
  img: string;
  instrument: boolean;
};

export default function AppThumbnail({
  children,
  path,
  img,
  instrument,
}: AppThumbnailProps) {
  const { colorMode } = useColorMode();
  let thumbnailPath: string = 'examples/EX1/output.jpeg';
  let nodeLabel: string = path.split('/').pop();
  let nodeData = { label: nodeLabel };

  const imgSrc =
    typeof img === 'string'
      ? img
      : `https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/${path}/${thumbnailPath}`;

  const thumbnailClass = instrument
    ? 'instrument-thumbnail-figure'
    : 'app-thumbnail-figure';

  const pathRoot = instrument ? 'instruments-database' : 'nodes';

  if (path.toLowerCase().indexOf('numpy') >= 0) {
    return (
      <div className="p-4">
        <a href={`/nodes/${path}/`}>
          <NumpyNode nodeProps={{ data: nodeData }} />
        </a>
      </div>
    );
  }

  if (path.toLowerCase().indexOf('scipy') >= 0) {
    return (
      <div className="p-4">
        <a href={`/nodes/${path}/`}>
          <ScipyNode nodeProps={{ data: nodeData }} />
        </a>
      </div>
    );
  }

  return (
    <div className="p-4">
      <a href={`/${pathRoot}/${path}/`}>
        {
          <figure className={`category-page-thumbnail ${thumbnailClass}`}>
            <div class="thumbnail-image-container">
              <img alt={children} src={imgSrc} />
            </div>
            <figcaption>{children}</figcaption>
          </figure>
        }
      </a>
    </div>
  );
}
