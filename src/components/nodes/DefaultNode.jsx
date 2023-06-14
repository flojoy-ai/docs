import { memo } from 'react';
import styles from './nodes.modules.scss';
import { makeNode } from './makeNode';

export default memo(
	makeNode({
		styles: [styles.nodeContainer, styles.defaultNode],
	})
);
