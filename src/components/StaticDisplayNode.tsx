import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export default memo(({ data }: NodeProps) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
      />
      <div>
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} id="b" />
    </>
  );
});
