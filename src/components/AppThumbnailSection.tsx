import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import AppThumbnail from './AppThumbnail';

type AppThumbnailSectionProps = {
  children: string;
};

export default function AppThumbnailSection({
  children,
  sectionName,
  blockquote,
  sectionRoot,
  displayPath,
  nodes,
}: AppThumbnailSectionProps) {
  const { colorMode } = useColorMode();
  let nodePath: string;

  return (
    <div className="thumbnail-section">
      <h1>{sectionName}</h1>
      <blockquote>{blockquote}</blockquote>
      <p>
        {`Inspect the Python code for these ${sectionName} nodes `}
        <a href={`https://github.com/flojoy-ai/nodes/tree/main/${sectionRoot}`}>
          on GitHub
        </a>
        .
      </p>
      <div>
        {nodes.map(nodePath => {
          let caption = nodePath.replace('/', ' > ');
          return (
            <AppThumbnail key={nodePath} path={`${sectionRoot}/${nodePath}`} displayPath={displayPath}>
              {caption}
            </AppThumbnail>
          );
        })}
      </div>
    </div>
  );
}
