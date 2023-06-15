/* eslint @typescript-eslint/no-explicit-any: 0 */
import { Layout } from 'plotly.js';
import React, { useMemo } from 'react';
import { useEffect } from 'react';
import Plot, { PlotParams } from 'react-plotly.js';
import { OverridePlotData } from '../types/data';
import { useColorMode } from '@docusaurus/theme-common';
import { getThemeColor } from '../utils/themeColors';

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
  const { colorMode } = useColorMode();
  const accentColor = getThemeColor('accent1', 'dark');

  const defaultLayout: Partial<Layout> = useMemo(
    () => ({
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: colorMode === 'dark' ? '#2c2e33' : '#ffffff',
      autosize: true,
      font: { color: accentColor },
      margin: { t: 40, r: 40, b: 40, l: 40 },
      xaxis: { zeroline: false, type: '-' },
      template: {},
    }),
    [colorMode]
  );

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
