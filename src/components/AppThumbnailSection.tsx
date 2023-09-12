import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import AppThumbnail from './AppThumbnail';

type AppThumbnailSectionProps = {
  children: string;
};

export default function AppThumbnailSection({ children, sectionName, blockquote, sectionRoot, nodes }: AppThumbnailSectionProps) {
    const { colorMode } = useColorMode();
    let nodePath:string;

    return (
        <div className='thumbnail-section'>
            <h3>{sectionName}</h3>
            <blockquote>{blockquote}</blockquote>
            <p>{`Inspect the Python code for these ${sectionName} nodes `}<a href={`https://github.com/flojoy-ai/nodes/tree/main/${sectionRoot}`}>on GitHub</a>.</p>
            <div className="flex flex-wrap" >
                {nodes.map(nodePath => {
                    let caption = nodePath.replace('/', ' > ');
                    return(
                        <AppThumbnail key={nodePath} path={`${sectionRoot}/${nodePath}`}>{caption}</AppThumbnail>
                    );
                })}
            </div>
        </div>
    );
}
