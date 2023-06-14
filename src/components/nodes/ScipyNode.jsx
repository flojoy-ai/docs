import { makeNode } from './makeNode';
import React, { memo } from 'react';
import { ScipySvg } from './Svgs';
import styles from './nodes.modules.scss';

export default memo(
	makeNode({
		extraContentFunc: data => (
			<>
				<div className={styles.nodeLabel}>{data.label}</div>
				<ScipySvg className={styles.scipyLibIcon} />
			</>
		),
		styles: [styles.nodeContainer, styles.scipyNode],
	})
);
