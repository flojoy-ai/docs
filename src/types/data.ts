export type NodeData = {
  id: string;
  label: string;
  func: string;
  type: string;
  running?: boolean;
  failed?: boolean;
  ctrls: {
    [key: string]: {
      functionName: string;
      param: string;
      value: string | boolean | number | undefined | null;
    };
  };
  inputs?: Array<{ name: string; id: string; type: string }>;
  selects?: any;
  selected?: boolean;
  handleRemove?: (nodeId: string, nodeLabel: string) => void;
};

export type NodeProps = {
  data: NodeData;
};
