import React, { memo } from 'react';
import Scatter from './VisorNodeSvgs/Scatter';
import Histogram from './VisorNodeSvgs/Histogram';
import LineChart from './VisorNodeSvgs/LineChart';
import Scatter3D from './VisorNodeSvgs/Scatter3D';
import Surface3D from './VisorNodeSvgs/Surface3D';
import BarChart from './VisorNodeSvgs/BarChart';
import PlotlyTable from './VisorNodeSvgs/Table';
import BoxPlot from './VisorNodeSvgs/BoxPlot';
import PlotlyImage from './VisorNodeSvgs/Image';
import BigNumber from './VisorNodeSvgs/BigNumber';
import styles from './nodes.module.scss';
import { makeNode } from './makeNode';

const chartElemMap = {
  SCATTER: <Scatter />,
  HISTOGRAM: <Histogram />,
  LINE: <LineChart />,
  SURFACE3D: <Surface3D />,
  SCATTER3D: <Scatter3D />,
  BAR: <BarChart />,
  TABLE: <PlotlyTable />,
  IMAGE: <PlotlyImage />,
  BOX: <BoxPlot />,
  BIG_NUMBER: <BigNumber />,
  MATRIX_VIEW: <PlotlyTable />,
  ARRAY_VIEW: <PlotlyTable />,
};

export default memo(
  makeNode({
    extraContentFunc: data => chartElemMap[data.func],
    styles: [styles.visorNode, styles.nodeContainer],
  })
);
