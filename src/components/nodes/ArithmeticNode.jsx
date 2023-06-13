import { MultiplySvg, AddSvg, SubSvg, AddBGTemplate } from './Svgs';
import HandleComponent from './HandleComponent';
import React, { memo } from 'react';
import styles from './nodes.modules.scss';
import clsx from 'clsx';

const ArithmeticNode = ({ data }) => {
	const params = data.inputs || [];

	let operatorIcon;
	switch (data.func) {
		case 'MULTIPLY':
			operatorIcon = <MultiplySvg className={styles.operatorIcon} />;
			break;
		case 'ADD':
			operatorIcon = <AddSvg className={styles.operatorIcon} />;
			break;
		case 'SUBTRACT':
			operatorIcon = <SubSvg className={styles.operatorIcon} />;
			break;
		default:
			operatorIcon = <Box />;
	}

	return (
		<div className={clsx(styles.nodeContainer, styles.arithmeticNode)}>
			<AddBGTemplate />
			{operatorIcon}
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

export default memo(ArithmeticNode);
