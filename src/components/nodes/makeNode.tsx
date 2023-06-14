import classes from './nodes.module.scss';
import React from 'react';
import clsx from 'clsx';
import HandleComponent from './HandleComponent';

// extraContentFunc is a function (data) => JSX.Element
// By default this just returns the label
export const makeNode = ({ extraContentFunc = undefined, styles }) => {
  return ({ data }) => {
    const params = data.params ?? [];

    return (
      <div className={clsx(...styles)}>
        {extraContentFunc ? (
          extraContentFunc(data)
        ) : (
          <div className={classes.nodeLabel}>{data.label}</div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height:
              params.length > 0 ? (params.length + 1) * 40 : 'fit-content',
          }}
        >
          <HandleComponent data={data} inputs={params} />
        </div>
      </div>
    );
  };
};
