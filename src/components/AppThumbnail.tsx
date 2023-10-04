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

  let imgSrc =
    typeof img === 'string'
      ? img
      : `https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/${path}/${thumbnailPath}`;

  const featuredSections = ['SIGNAL_PROCESSING', 'IMAGE_PROCESSING', 'LOGIC_GATES', 'AI_ML', 'IO'];
  const featuredNode = featuredSections.some(v => path.includes(v))
  
  let thumbnailClass = instrument
    ? 'instrument-thumbnail-figure'
    : 'app-thumbnail-figure';

  if (featuredNode) {
    imgSrc = `/node_thumbnails/${nodeLabel}.png`;
    thumbnailClass += ' custom-thumbnail';
  }

  const pathRoot = instrument ? 'instruments-database' : 'nodes';

  const isNumpyNode = path.toLowerCase().indexOf('numpy') >= 0;
  const isSciPyNode = path.toLowerCase().indexOf('scipy') >= 0;

  if (isNumpyNode || isSciPyNode) {
    return (
      <div className="thumbnail-wrapper">
        <a href={`/nodes/${path}/`}>
          {isNumpyNode ? <NumpyNode nodeProps={{ data: nodeData }} /> : <ScipyNode nodeProps={{ data: nodeData }} />}
        </a>
      </div>
    );
  }

  return (
    <div className="thumbnail-wrapper">
        <a href={`/${pathRoot}/${path}/`}>
          <>
            <div className={`thumbnail-wrapper-figure ${thumbnailClass}`}>
              <img 
                alt={children} 
                src={imgSrc}
                onError={event => {
                  event.target.src = "/node_thumbnails/DEFAULT_THUMBNAIL.png"
                  event.target.style.transform = 'scale(1)'
                  event.onerror = null
                }}
              />
            </div>
            <div className='figcaption'>{nodeLabel.replaceAll('_', ' ')}</div>
          </>
        </a>
    </div>
  );
}
