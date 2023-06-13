import { MultiplySvg, AddSvg, SubSvg, AddBGTemplate } from './Svgs';
import React, { memo } from 'react';
import styles from './nodes.modules.scss';
import { makeNode } from './makeNode';

const getOperatorIcon = data => {
	switch (data.func) {
		case 'MULTIPLY':
			return <MultiplySvg className={styles.operatorIcon} />;
		case 'ADD':
			return <AddSvg className={styles.operatorIcon} />;
		case 'SUBTRACT':
			return <SubSvg className={styles.operatorIcon} />;
		default:
			return <Box />;
	}
};

export default memo(
	makeNode({
		extraContentFunc: data => (
			<>
				<AddBGTemplate />
				{getOperatorIcon(data)}
			</>
		),
		styles: [styles.nodeContainer, styles.arithmeticNode],
	})
);
