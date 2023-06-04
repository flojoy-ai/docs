import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactFlow, { Background } from 'reactflow';
import 'reactflow/dist/style.css';
import StaticDisplayNode from './StaticDisplayNode';
const nodeTypes = { default: StaticDisplayNode };
import { VictoryChart, VictoryScatter, VictoryAxis } from 'victory';

import { JSONTree } from 'react-json-tree';
import { GitHubNodeRepo } from '../utils/helper';

const axesStyle = {
	tickLabels: { fontSize: 8, fill: '#BCC2C4' },
	label: { fontSize: 8, fill: '#BCC2C4' },
};

export default function AppDisplay({ children, data, GLink }) {
	const NOEXAMPLEFOUND =
		'No examples have been written for this node yet. You can add some ';
	if (!children) {
		return (
			<>
				<blockquote>{NOEXAMPLEFOUND}
                <a href={`${GitHubNodeRepo}/${GLink}`} target='_blank'>here</a>
                </blockquote>
				<br /> <br />
			</>
		);
	}

	let appObject = JSON.parse(children)['rfInstance'];
	const HEIGHT = '20em';

	return (
		<div>
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
							proOptions={{ hideAttribution: true }}
						>
							<Background />
						</ReactFlow>
					</div>
				</TabItem>
				<TabItem value="output" label="Output">
					<div style={{ minHeight: HEIGHT }}>
						<VictoryChart>
							<VictoryAxis label="x" style={axesStyle} />
							<VictoryAxis dependentAxis label="y" style={axesStyle} />
							<VictoryScatter
								style={{ data: { fill: '#7B61FF' } }}
								size={1}
								data={JSON.parse(data ?? "")}
							/>
						</VictoryChart>
					</div>
				</TabItem>
				<TabItem value="spec" label="App JSON spec">
					<div style={{ minHeight: HEIGHT }}>
						<JSONTree data={appObject} />
					</div>
				</TabItem>
			</Tabs>
		</div>
	);
}
