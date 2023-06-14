import { MultiplySvg, AddSvg, SubSvg, AddBGTemplate } from './Svgs';
import React, { memo } from 'react';
import styles from './nodes.module.scss';
import { makeNode } from './makeNode';
import { NodeData } from '../../types/data';

const getOperatorIcon = (data: NodeData) => {
	switch (data.func) {
		case 'MULTIPLY':
			return <MultiplySvg className={styles.operatorIcon} />;
		case 'ADD':
			return <AddSvg className={styles.operatorIcon} />;
		case 'SUBTRACT':
			return <SubSvg className={styles.operatorIcon} />;
		default:
			return <div />;
	}
};

export default memo(
	makeNode({
		extraContentFunc: (data: NodeData) => (
			<>
				<AddBGTemplate />
				{getOperatorIcon(data)}
			</>
		),
		styles: [styles.nodeContainer, styles.arithmeticNode],
	})
);
