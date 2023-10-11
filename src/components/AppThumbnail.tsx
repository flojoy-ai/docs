import React from 'react';
import NumpyNode from '@site/src/components/nodes/NumpyNode';
import ScipyNode from '@site/src/components/nodes/ScipyNode';
import * as cloudinaryData from './cloudinary_thumbnail_lookup.json';

type AppThumbnailProps = {
  children: string;
  path: string;
  img: string;
  instrument: boolean;
  sectionSubRoot: string;
};

export default function AppThumbnail({
  children,
  path,
  img,
  instrument,
  displayPath,
}: AppThumbnailProps) {

  // Variables used in thumbnail display

  let thumbnailPath: string = 'examples/EX1/output.jpeg';               // Default thumbnail path is autogenerated app
  let nodeLabel: string = path.split('/').pop();                        // Caption beneath thumbnail
  let truncatedPath = path.split('/').splice(3,3);                      // Node path as array without 1st 2 elements, up to 3 elements
  const featuredSections = ['SIGNAL_PROCESSING', 'IMAGE_PROCESSING',    // Node category pages with custom, hand-picked thumbnails
                            'LOGIC_GATES', 'AI_ML', 'IO'];
  const featuredNode = featuredSections.some(v => path.includes(v));    // Whether the thumbnail belongs to a featured section
  const pathRoot = instrument ? 'instruments-database' : 'nodes';       // Whether the thumbnail is for a node or instrument page
  const isNumpyNode = path.toLowerCase().indexOf('numpy') >= 0;         // Whether the thumbnail is for a numpy node
  const isSciPyNode = path.toLowerCase().indexOf('scipy') >= 0;         // Whether the thumbnail is for a scipy node
  const DEFAULT_IMAGE_THUMBNAIL = 'https://res.cloudinary.com/dhopxs1y3/image/upload/w_300/q_auto/v1696619530/node_thumbnails/DEFAULT_THUMBNAIL_p2vqkw.jpg';

  let imgSrc =
    typeof img === 'string'
      ? img
      : `https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/${path}/${thumbnailPath}`;


  let thumbnailClass = instrument
    ? 'instrument-thumbnail'
    : 'app-thumbnail';

  if (featuredNode) {
    if (nodeLabel in cloudinaryData) {
      const cloudinaryImgSrc = cloudinaryData[nodeLabel];
      const optimizedImgSrc = cloudinaryImgSrc.replace('/upload/', '/upload/w_300/q_auto/');
      imgSrc = optimizedImgSrc;
      thumbnailClass += ' custom-thumbnail';
    }
  }

  // SciPy and Numpy nodes and displayed specially

  if (isNumpyNode || isSciPyNode) {
    const nodeData = { label: nodeLabel };
    return (
      <div className="thumbnail-wrapper">
        <a href={`/nodes/${path}/`}>
          {isNumpyNode ? <NumpyNode nodeProps={{ data: nodeData }} /> : <ScipyNode nodeProps={{ data: nodeData }} />}
        </a>
      </div>
    );
  }

  // Clean up the thumbnail caption and path prior to display
  nodeLabel = nodeLabel.replaceAll('_', ' ').replaceAll('-', ' ').toUpperCase();
  truncatedPath = [...new Set(truncatedPath)];

  return (
    <div className="thumbnail-wrapper">
        <a href={`/${pathRoot}/${path}/`}>
          <>
            <div className={`thumbnail-wrapper-figure ${thumbnailClass}`}>
              <img 
                alt={children} 
                src={imgSrc}
                onError={event => {
                  event.target.src = DEFAULT_IMAGE_THUMBNAIL
                  event.target.style.transform = 'scale(1)'
                  event.onerror = null
                }}
              />
            </div>
            <div className='figcaption'>{nodeLabel}</div>
            {displayPath &&
              <div className='thumbnail-path-container'>
                {truncatedPath.map(crumb => {
                  return(
                      <span className='thumbnail-path-crumb'>{crumb}</span>
                  )
                })}
              </div>
            }
          </>
        </a>
    </div>
  );
}
