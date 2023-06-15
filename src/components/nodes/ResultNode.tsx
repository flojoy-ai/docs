import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { Handle, Position } from 'reactflow';
import PlotlyComponent from '../PlotlyComponent';
import { makePlotlyData } from '@site/src/utils/makePlotlyData';
import { ResultNodeData } from '@site/src/types/data';

type ResultNode = {
  data: ResultNodeData;
};

const ResultNode = ({ data }: ResultNode) => {
  const { colorMode } = useColorMode();

  return (
    <div style={{ position: 'relative' }}>
      <>
        <Handle
          type="target"
          position={Position.Left}
          style={{ borderRadius: 0 }}
        />
        <Handle
          type="source"
          position={Position.Right}
          style={{ borderRadius: 0 }}
        />
      </>

      {data.resultData ? (
        <PlotlyComponent
          id={data.id}
          data={makePlotlyData(
            data.resultData.default_fig.data,
            colorMode,
            true
          )}
          layout={{
            ...data.resultData.default_fig.layout,
            title: data.resultData.default_fig.layout?.title || data.label,
          }}
          useResizeHandler
          style={{
            height: 293,
            width: 380,
          }}
          isThumbnail
        />
      ) : (
        <p>No Result</p>
      )}
    </div>
  );
};

export default ResultNode;
