import HandleComponent from './HandleComponent';
import React, { memo } from 'react';
import clsx from 'clsx';
import styles from './nodes.module.scss';
import { NodeProps } from 'reactflow';

const ConditionalNode = ({ data }: NodeProps) => {
  const params = data.inputs || [];

  const current_iteration = 0;
  const total_iteration = 0;

  const labelMargin = data.func !== 'GOTO' ? 25 : 0;

  return (
    <div
      className={clsx(styles.nodeContainer, styles.defaultNode)}
      style={{
        ...(params.length > 0 && { padding: '0px 0px 8px 0px' }),
      }}
    >
      <div>
        <div className={styles.nodeLabel} style={{ marginTop: labelMargin }}>
          {data.label}
        </div>
        <div>
          {data.func === 'CONDITIONAL' && (
            <>
              {params.length !== 0 && (
                <div
                  style={{
                    marginTop: 20,
                    textAlign: 'center',
                  }}
                >
                  x {data['ctrls']['operator_type']['value']} y
                </div>
              )}
            </>
          )}
          {data.func === 'TIMER' && (
            <div style={{ textAlign: 'center' }}>
              {data['ctrls']['sleep_time']['value']}s
            </div>
          )}
          {data.func === 'LOOP' && (
            <div>
              <p>{`${current_iteration}/${total_iteration}`}</p>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: params.length > 0 ? (params.length + 1) * 32 : 'fit-content',
        }}
      >
        <HandleComponent data={data} inputs={params} />
      </div>
    </div>
  );
};

export default memo(ConditionalNode);
