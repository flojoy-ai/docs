import HandleComponent from './HandleComponent';
import React, { memo } from 'react';
import Scatter from './VisorNodeSvgs/Scatter';
import Histogram from './VisorNodeSvgs/Histogram';
import LineChart from './VisorNodeSvgs/LineChart';
import Scatter3D from './VisorNodeSvgs/Scatter3D';
import Surface3D from './VisorNodeSvgs/Surface3D';
import BarChart from './VisorNodeSvgs/BarChart';
import PlotlyTable from './VisorNodeSvgs/Table';
import BoxPlot from './VisorNodeSvgs/BoxPlot';
import PlotlyImage from './VisorNodeSvgs/Image';
import BigNumber from './VisorNodeSvgs/BigNumber';
import clsx from 'clsx';
import styles from './nodes.modules.scss';

const chartElemMap = {
	SCATTER: <Scatter />,
	HISTOGRAM: <Histogram />,
	LINE: <LineChart />,
	SURFACE3D: <Surface3D />,
	SCATTER3D: <Scatter3D />,
	BAR: <BarChart />,
	TABLE: <PlotlyTable />,
	IMAGE: <PlotlyImage />,
	BOX: <BoxPlot />,
	BIG_NUMBER: <BigNumber />,
	MATRIX_VIEW: <PlotlyTable />,
	ARRAY_VIEW: <PlotlyTable />,
};

const VisorNode = ({ data }) => {
	const params = data.inputs ?? [];

	return (
		<div className={clsx(styles.visorNode, styles.nodeContainer)}>
			{chartElemMap[data.func]}
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

export default memo(VisorNode);
