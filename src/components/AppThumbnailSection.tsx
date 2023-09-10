import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import AppThumbnail from './AppThumbnail';

type AppThumbnailSectionProps = {
  children: string;
};

export default function AppThumbnailSection({ children, sectionName, blockquote, sectionRoot, nodes }: AppThumbnailSectionProps) {
    const { colorMode } = useColorMode();
    let each:string;

    return (
        <div className='app-thumbnail-section'>
            <h3>{sectionName}</h3>
            <blockQuote>{blockquote}</blockQuote>
            <p>{`Inspect the Python code for these ${sectionName} nodes `}<a href={`https://github.com/flojoy-ai/nodes/tree/main/${sectionRoot}`}>on GitHub</a>.</p>
            <div className="flex flex-wrap" >
                {nodes.map(each => {
                    let caption = each.replace('/', ' > ');
                    return(
                        <AppThumbnail path={`${sectionRoot}/${each}`}><code>{caption}</code></AppThumbnail>
                    );
                })}
            </div>
        </div>
    );
}
