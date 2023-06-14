import { makeNode } from './makeNode';
import React, { memo } from 'react';
import { NumpySvg } from './Svgs';
import styles from './nodes.module.scss';
import { NodeData } from '@site/src/types/data';

export default memo(
	makeNode({
		extraContentFunc: (data: NodeData) => (
			<>
				<div className={styles.nodeLabel}>{data.label}</div>
				<NumpySvg className={styles.numpyLibIcon} />
			</>
		),
		styles: [styles.nodeContainer, styles.numpyNode],
	})
);
