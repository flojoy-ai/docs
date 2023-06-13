import styles from './nodes.modules.scss';
import clsx from 'clsx';
import React, { memo } from 'react';
import HandleComponent from './HandleComponent';

const DefaultNode = ({ data }) => {
	const params = data.params ?? [];

	return (
		<div className={clsx(styles.nodeContainer, styles.defaultNode)}>
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

export default memo(DefaultNode);
