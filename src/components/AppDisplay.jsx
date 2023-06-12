import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactFlow, { Background, MiniMap, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import StaticDisplayNode from './StaticDisplayNode';
import { VictoryChart, VictoryScatter, VictoryAxis } from 'victory';

import { JSONTree } from 'react-json-tree';
import { GitHubNodeRepo } from '../utils/helper';
import { useColorMode } from '@docusaurus/theme-common';
import DefaultNode from './nodes/DefaultNode';
import SimulationNode from './nodes/SimulationNode';
import ArithmeticNode from './nodes/ArithmeticNode';
import ConditionalNode from './nodes/ConditionalNode';
import VisorNode from './nodes/VisorNode';
import TerminatorNode from './nodes/TerminatorNode';

const axesStyle = {
	tickLabels: { fontSize: 8, fill: '#BCC2C4' },
	label: { fontSize: 8, fill: '#BCC2C4' },
};

const nodeTypes = {
	default: DefaultNode,
	SIMULATION: SimulationNode,
	ARITHMETIC: ArithmeticNode,
	CONDITIONAL: ConditionalNode,
	LOOP: ConditionalNode,
	TIMER: ConditionalNode,
	PLOTLY_VISOR: VisorNode,
	VISOR: VisorNode,
	TERMINATOR: TerminatorNode,
};

export default function AppDisplay({ children, data, GLink }) {
	const { colorMode } = useColorMode();
	const NOEXAMPLEFOUND =
		'No examples have been written for this node yet. You can add some ';
	if (!children) {
		return (
			<>
				<blockquote>
					{NOEXAMPLEFOUND}
					<a href={`${GitHubNodeRepo}/${GLink}`} target="_blank">
						here
					</a>
				</blockquote>
				<br /> <br />
			</>
		);
	}

	const appObject = JSON.parse(children)['rfInstance'];
	const HEIGHT = '20em';

	const handleDownload = () => {
		const jsonData = JSON.stringify(appObject, null, 2);
		const blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'example.txt';
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div>
			<Tabs>
				<TabItem value="app" label="App" default>
					<ReactFlowProvider>
						<div style={{ height: HEIGHT }}>
							<ReactFlow
								nodes={appObject['nodes']}
								nodeTypes={nodeTypes}
								edges={appObject['edges']}
								fitView
								proOptions={{ hideAttribution: true }}
							>
								<MiniMap
									style={{
										backgroundColor:
											colorMode === 'light'
												? 'rgba(0, 0, 0, 0.1)'
												: 'rgba(255, 255, 255, 0.1)',
										height: 80,
										width: 150,
									}}
									nodeColor={
										colorMode === 'light'
											? 'rgba(0, 0, 0, 0.25)'
											: 'rgba(255, 255, 255, 0.25)'
									}
									maskColor={
										colorMode === 'light'
											? 'rgba(0, 0, 0, 0.05)'
											: 'rgba(255, 255, 255, 0.05)'
									}
									zoomable
									pannable
								/>
								<Background />
							</ReactFlow>
						</div>
					</ReactFlowProvider>
				</TabItem>
				<TabItem value="output" label="Output">
					<div style={{ minHeight: HEIGHT }}>
						<VictoryChart>
							<VictoryAxis label="x" style={axesStyle} />
							<VictoryAxis dependentAxis label="y" style={axesStyle} />
							<VictoryScatter
								style={{ data: { fill: '#7B61FF' } }}
								size={1}
								data={data}
							/>
						</VictoryChart>
					</div>
				</TabItem>
				<TabItem value="spec" label="Download App">
					<button
						className="button button--primary button--lg button--round"
						style={{ padding: '12px 16px', fontSize: 16 }}
					>
						Download
					</button>
					<div style={{ minHeight: HEIGHT }}>
						<JSONTree data={appObject} />
					</div>
				</TabItem>
			</Tabs>
		</div>
	);
}
