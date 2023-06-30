import { memo } from 'react';
import styles from './nodes.module.scss';
import { makeNode } from './makeNode';

export default memo(
  makeNode({
    styles: [styles.nodeContainer, styles.defaultNode],
  })
);
