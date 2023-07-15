import React from 'react';
import { Handle, Position } from 'reactflow';
import styles from './nodes.module.scss';

const HandleComponent = ({ data }) => {
  const outputs = data.outputs ?? [];
  const inputs = data.inputs ?? [];

  return (
    <>
      <div className={styles.handleWrapper} style={{ left: -6 }}>
        {inputs.map(param => (
          <div
            key={`input-${data.id}-${param.name}`}
            className={styles.flex}
            style={{
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Handle
              position={Position.Left}
              type="target"
              id={param.id}
              // Needs to be inline style for it to actually override the default react flow styles...
              style={{
                border: '1px solid lightgray',
                width: 12,
                height: 12,
                borderRadius: 0,
                left: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: -110,
                bottom: -10,
		fontSize: '12px',
		fontFamily: 'Monaco',
		color: 'white'
              }}
            >
              {param.name !== 'default' ? param.name : ''}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.handleWrapper} style={{ right: -10 }}>
        {outputs.map(param => (
          <div
            className={styles.flex}
            key={`input-${data.id}-${param.name}`}
            style={{
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: 20,
              }}
            >
              {param.name !== 'default' ? param.name : ''}
            </div>
            <Handle
              position={Position.Right}
              type="source"
              id={param.id}
              // Needs to be inline style for it to actually override the default react flow styles...
              style={{
                border: '1px solid lightgray',
                width: 12,
                height: 12,
                borderRadius: 0,
                right: 4,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HandleComponent;
