import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {useColorMode} from '@docusaurus/theme-common';

import { VictoryChart, VictoryScatter, VictoryAxis} from 'victory';

import ReactJson from 'react-json-view'
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

import StaticDisplayNode from './StaticDisplayNode';

const nodeTypes = {
    default: StaticDisplayNode,
  };


const axesStyle = { tickLabels: { fontSize: 8, fill: '#BCC2C4' }, label: { fontSize: 8, fill: '#BCC2C4' }};

export default function AppDisplay({children, title, data}) {

    let appObject = JSON.parse(children)['rfInstance'];
    const HEIGHT = '20em';
    const {colorMode} = useColorMode();

    return (<div>
        <h2>{`Example: ${title}`}</h2>
        <Tabs>
            <TabItem value="app" label="App" default>
                <div style={{ height: HEIGHT }}>
                    <ReactFlow 
                        nodes={appObject['nodes']}
                        nodeTypes={nodeTypes}
                        edges={appObject['edges']}
                        preventScrolling
                        fitView
                        panOnDrag={false}
                        proOptions = {{hideAttribution: true}}
                    >
                        <Background />
                    </ReactFlow>
                </div>
            </TabItem>
            <TabItem value="output" label="Output">
                <div style={{ minHeight: HEIGHT }}>
                    <VictoryChart>
                        <VictoryAxis label='x' style={axesStyle} />
                        <VictoryAxis dependentAxis label='y' style={axesStyle} />
                        <VictoryScatter 
                            style={{ data: { fill: "#7B61FF" } }}
                            size={1}
                            data={JSON.parse(data)}
                        />
                    </VictoryChart>
                </div>
            </TabItem>
            <TabItem value="spec" label="App JSON spec">  
                <div style={{ minHeight: HEIGHT }}>             
                    <ReactJson 
                        src={appObject} 
                        theme={colorMode === 'dark' ? 'monokai' : ''}
                        collapsed={true}
                    />
                </div>
            </TabItem>
        </Tabs>
    </div>);
}
