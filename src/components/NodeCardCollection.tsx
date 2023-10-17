import React from 'react';
import CardCollection from '../components/CardCollection';
import * as nodeSections from '@site/nodeSidebar.json';
import * as nodeDescriptions from '@site/src/components/flat_docstring_lookup.json';

type NodeCardCollectionProps = { category: String, manufacturer: String };


function NodeCardCollection({category, manufacturer}: NodeCardCollectionProps) {

    let sectionIDs : Array<String> = [];
    let sectionContentData : Object = {};

    if (category == 'OSCILLOSCOPES' && manufacturer == 'TEKTRONIX') {
            sectionIDs.push('I/O > Oscilloscopes > Tektronix');
    }

    sectionIDs.push(
        "I/O > Protocols > SCPI",
        "I/O > Protocols > GPIB",
    );

    sectionIDs.map(sectionID => {  
        let cardData = [];

        nodeSections[sectionID].map(nodePath => {
            let cd : Object = {};
            const nodeID = nodePath.split('/').slice(-1).toString();

            console.warn(nodePath, nodeID);

            let nodeHint = '';
            if (nodeID in nodeDescriptions) {
                nodeHint = nodeDescriptions[nodeID];
            }

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

            sectionContentData[sectionID] = cardData;
        });
    });

    let setID = [...new Set(sectionIDs)];

    return (
        <>
            {setID.map(sID => {
                return(
                    <>            
                        <h2 className='mt-10 mb-10'>{sID.replace('I/O > ', '')}</h2>
                        <div className='flex flex-col items-center'>
                            <CardCollection 
                                cardData ={sectionContentData[sID]} 
                                displayWide={true} 
                            />
                        </div>
                    </>
                )
            })}
        </>
    );
  }
  
  export default NodeCardCollection;
