import { Layout, PlotData } from 'plotly.js-dist-min';

export type NodeData = {
  id: string;
  label: string;
  func: string;
  type: string;
  ctrls: {
    [key: string]: {
      functionName: string;
      param: string;
      value: string | boolean | number | undefined | null;
    };
  };
  inputs?: Array<{ name: string; id: string; type: string }>;
};

export type OverridePlotData = Array<
  Partial<PlotData> & {
    header?: {
      values?: any;
      fill: {
        color: string;
      };
    };
    cells?: {
      values?: any;
      fill: { color: string };
    };
  }
>;

export type NodeProps = {
  data: NodeData;
};

export const ALL_DC_TYPE = [
  'grayscale',
  'matrix',
  'dataframe',
  'image',
  'ordered_pair',
  'ordered_triple',
  'scalar',
  'plotly',
] as const;

export type DataContainerType = (typeof ALL_DC_TYPE)[number];

export interface DataContainer {
  type: DataContainerType;
  x?: number[];
  y?: number[];
  z?: number[];
  t?: number[];
  m?: string;
  c?: number[];
  r?: number[];
  g?: number[];
  b?: number[];
  a?: number[];
  fig?: { data: OverridePlotData };
}

export type ResultIO = {
  cmd: string;
  id: string;
  result: Result;
};

export type Result = {
  default_fig: {
    data: OverridePlotData;
    layout?: Partial<Layout>;
  };
  data: DataContainer;
};

export interface ResultsType {
  io?: ResultIO[];
}
export type ResultNodeData = NodeData & {
  resultData?: ResultIO['result'];
};
