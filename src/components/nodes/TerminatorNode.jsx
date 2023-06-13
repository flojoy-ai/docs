import HandleComponent from './HandleComponent';
import clsx from 'clsx';
import styles from './nodes.modules.scss';
import React, { memo } from 'react';

const TerminatorNode = ({ data }) => {
	const params = data.inputs || [];

	return (
		<div
			className={clsx(
				styles.defaultNode,
				styles.nodeContainer,
				styles.terminatorNode
			)}
		>
			<div className={styles.nodeLabel}>{data.label}</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: params.length > 0 ? (params.length + 1) * 40 : 'fit-content',
				}}
			>
				<HandleComponent data={data} inputs={params} />
			</div>
		</div>
	);
};

export default memo(TerminatorNode);
