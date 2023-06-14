import { makeNode } from './makeNode';
import React, { memo } from 'react';
import { NumpySvg, ScipySvg } from './Svgs';
import styles from './nodes.modules.scss';

export default memo(
	makeNode({
		extraContentFunc: data => (
			<>
				<div className={styles.nodeLabel}>{data.label}</div>
				<NumpySvg className={styles.numpyLibIcon} />
			</>
		),
		styles: [styles.nodeContainer, styles.numpyNode],
	})
);
