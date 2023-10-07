import React from 'react';
import CardCollection from '../components/CardCollection';
import * as nodeSections from '@site/nodeSidebar.json';
import * as nodeDescriptions from '@site/src/components/flat_docstring_lookup.json';

type NodeCardCollectionProps = { sectionID: string; };

function NodeCardCollection({sectionID}: NodeCardCollectionProps) {

    let cardData = [];

    nodeSections[sectionID].map(nodePath => {
        let cd = {};
        const nodeID = nodePath.split('/').slice(-1).toString();
        let nodeHint = nodeDescriptions[nodeID];
        let nodePageLink = nodePath.split('/'); nodePageLink.pop();
        nodePageLink = '/' + nodePageLink.join('/');

        if (nodeHint.indexOf(' node ') > 0) {
            nodeHint = nodeHint.split(' node '); nodeHint.shift();
            nodeHint = nodeHint[0];
            nodeHint = nodeHint.charAt(0).toUpperCase() + nodeHint.slice(1);
        }
        else if (nodeHint.trim().length == 0) {
            nodeHint = '❗ This node has no docstring description yet.';
        }

        cd['cardContent'] = nodeHint;
        cd['cardHeader'] = nodeID.replaceAll('_', ' ');
        cd['cardLink'] = nodePageLink;
        cd['cardEmoji'] = '📻';

        if (nodePath.includes('PROTOCOLS')) {
            cd['cardEmoji'] = '📄';
        }
        else if (nodePath.includes('MOTION')) {
            cd['cardEmoji'] = '🛞';
        }
        else if (nodePath.includes('OSCILLOSCOPES')) {
            cd['cardEmoji'] = '📟';
        }

        cardData.push(cd);
    });

    return (
        <>            
            <h2 className='mt-10 mb-10'>{sectionID}</h2>
            <div className='flex flex-col items-center'>
                <CardCollection 
                    cardData ={cardData} 
                    displayWide={true} 
                />
            </div>
        </>
    );
  }
  
  export default NodeCardCollection;
