/* eslint @typescript-eslint/no-explicit-any: 0 */
import { Layout } from 'plotly.js';
import React from 'react';
import { useEffect } from 'react';
import Plot, { PlotParams } from 'react-plotly.js';
import { OverridePlotData } from '../types/data';

const defaultLayout: Partial<Layout> = {
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: '#FFF',
  autosize: true,
  font: { color: '#FFF' },
  margin: { t: 40, r: 40, b: 40, l: 40 },
  xaxis: { zeroline: false, type: '-' },
  template: {},
};

const matrixSize = {
  width: 240,
  height: 260,
};

type PlotProps = {
  id: string;
  data: OverridePlotData;
  isThumbnail?: boolean;
  layout: any;
} & Omit<PlotParams, 'data'>;

const PlotlyComponent = (props: PlotProps) => {
  const { data, layout, useResizeHandler, style, id, isThumbnail } = props;
  const isMatrix = data[0]?.header?.values.length === 0;

  useEffect(() => {
    if (!window) {
      return;
    }
    (window as any).plotlyOutput = {
      ...(window as any).plotlyOutput,
      [id]: { data },
    };
  }, [data, id]);

  return (
    <Plot
      data={data}
      layout={{
        ...layout,
        ...defaultLayout,
        showlegend: !isThumbnail,
        ...(isThumbnail && isMatrix && matrixSize),
      }}
      useResizeHandler={useResizeHandler}
      config={{ displayModeBar: false, staticPlot: isThumbnail }}
      style={isMatrix && isThumbnail ? matrixSize : style}
    />
  );
};

export default PlotlyComponent;
