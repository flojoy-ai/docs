import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data }) => {
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
      <Handle
        type="source"
        position={Position.Right}
        id="b"
      />
    </>
  );
});