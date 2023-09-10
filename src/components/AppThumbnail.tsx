import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type AppThumbnailProps = {
  children: string;
};

export default function AppThumbnail({ children, path }: AppThumbnailProps) {
  const { colorMode } = useColorMode();

  return (
    <div className="p-4">
        <a href={`/nodes/${path}/`}>
            <figure className="app-example-thumbnail">
            <img src={`https://raw.githubusercontent.com/flojoy-ai/docs/main/docs/nodes/${path}/examples/EX1/output.jpeg`}/>
            <figcaption>{children}</figcaption>
            </figure>
        </a>
    </div>
  );
}
