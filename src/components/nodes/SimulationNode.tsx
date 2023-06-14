import styles from './nodes.modules.scss';
import React, { memo } from 'react';
import { makeNode } from './makeNode';

export default memo(
	makeNode({ styles: [styles.nodeContainer, styles.simulationNode] })
);
