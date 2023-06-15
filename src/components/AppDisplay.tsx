import React, { useCallback, useMemo } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactFlow, {
  Background,
  MiniMap,
  ReactFlowProvider,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { JSONTree } from 'react-json-tree';
import { GitHubNodeRepo } from '../utils/helper';
import { useColorMode } from '@docusaurus/theme-common';
import DefaultNode from './nodes/DefaultNode';
import SimulationNode from './nodes/SimulationNode';
import ArithmeticNode from './nodes/ArithmeticNode';
import ConditionalNode from './nodes/ConditionalNode';
import VisorNode from './nodes/VisorNode';
import TerminatorNode from './nodes/TerminatorNode';
import { NodeData } from '../types/data';
import ResultNode from './nodes/ResultNode';

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

const resultNodeTypes = {
  default: ResultNode,
};

const FlowMinimap = () => {
  const { colorMode } = useColorMode();
  return (
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
  );
};

type AppDisplayProps = {
  children: string | null;
  nodeLabel?: string;
  data: string | null;
  GLink: string;
};

export default function AppDisplay({ children, data, GLink }: AppDisplayProps) {
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
  const results = data && JSON.parse(data)['io'];

  const nodes: Node<NodeData>[] = appObject['nodes'];
  const edges: Edge[] = appObject['edges'];

  const resultNodes = useMemo(() => {
    if (results) {
      return nodes.map((node: Node<NodeData>) => {
        const nodeResult = results.find(
          (result: Node<NodeData>) => result.id === node.id
        );
        return {
          ...node,
          type: 'default',
          position: { x: node.position.x * 2, y: node.position.y * 2 },
          data: {
            ...node.data,
            resultData: nodeResult?.result,
          },
        };
      });
    } else {
      return [];
    }
  }, [results]);

  const handleDownload = useCallback(() => {
    const jsonData = JSON.stringify(appObject, null, 2);
    const blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'example.txt';
    link.click();
    URL.revokeObjectURL(url);
  }, [appObject]);

  const HEIGHT = 320;

  return (
    <div>
      <Tabs>
        <TabItem value="app" label="App" default>
          <ReactFlowProvider>
            <div style={{ height: HEIGHT }}>
              <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                edges={edges}
                fitView
                proOptions={{ hideAttribution: true }}
              >
                <FlowMinimap />
                <Background />
              </ReactFlow>
            </div>
          </ReactFlowProvider>
        </TabItem>
        <TabItem value="output" label="Output">
          {results ? (
            <ReactFlowProvider>
              <div style={{ height: HEIGHT }}>
                <ReactFlow
                  nodes={resultNodes}
                  nodeTypes={resultNodeTypes}
                  edges={edges}
                  fitView
                  proOptions={{ hideAttribution: true }}
                >
                  <FlowMinimap />
                  <Background />
                </ReactFlow>
              </div>
            </ReactFlowProvider>
          ) : (
            <blockquote>No outputs found for this example.</blockquote>
          )}
        </TabItem>
        <TabItem value="spec" label="Download App">
          <button
            className="button button--primary button--lg button--round"
            style={{ padding: '12px 16px', fontSize: 16 }}
            onClick={handleDownload}
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
