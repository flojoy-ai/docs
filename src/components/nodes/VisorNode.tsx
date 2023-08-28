import { CustomNodeProps } from '@site/src/types/node';
import React, { memo } from 'react';
import Scatter3D from './assets/nodes/3DScatter';
import Surface3D from './assets/nodes/3DSurface';
import ArrayView from './assets/nodes/ArrayView';
import Bar from './assets/nodes/Bar';
import BigNumber from './assets/nodes/BigNumber';
import BoxPlot from './assets/nodes/BoxPlot';
import CompositePlot from './assets/nodes/CompositePlot';
import Histogram from './assets/nodes/Histogram';
import Image from './assets/nodes/Image';
import LineChart from './assets/nodes/LineChart';
import MatrixView from './assets/nodes/MatrixView';
import ProphetComponents from './assets/nodes/ProphetComponents';
import ProphetPlot from './assets/nodes/ProphetPlot';
import Scatter from './assets/nodes/Scatter';
import Table from './assets/nodes/Table';
import HandleComponent from './components/HandleComponent';
import NodeWrapper from './components/NodeWrapper';
import PeakFinder from './assets/nodes/PeakFinder';
import RegionInspector from './assets/nodes/RegionInspector';
import Heatmap from './assets/nodes/Heatmap';

const chartElemMap: { [func: string]: React.JSX.Element } = {
  SCATTER: <Scatter />,
  HISTOGRAM: <Histogram />,
  LINE: <LineChart />,
  SURFACE3D: <Surface3D />,
  SCATTER3D: <Scatter3D />,
  BAR: <Bar />,
  TABLE: <Table />,
  IMAGE: <Image />,
  BOX: <BoxPlot />,
  BIG_NUMBER: <BigNumber />,
  MATRIX_VIEW: <MatrixView />,
  ARRAY_VIEW: <ArrayView />,
  PROPHET_PLOT: <ProphetPlot />,
  PROPHET_COMPONENTS: <ProphetComponents />,
  COMPOSITE: <CompositePlot />,
  TEXT_VIEW: <Table />,
  EXTREMA_DETERMINATION: <PeakFinder />,
  REGION_PROPERTIES: <RegionInspector />,
  HEATMAP: <Heatmap />,
};

const VisorNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data },
  } = props;

  return (
    <NodeWrapper wrapperProps={props}>
      <div className="rounded-2xl bg-transparent">
        {chartElemMap[data.func]}
        <HandleComponent data={data} variant="accent1" />
      </div>
    </NodeWrapper>
  );
};

export default memo(VisorNode);
