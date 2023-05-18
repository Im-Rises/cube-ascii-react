import React from 'react';

type Props = {
	width: number;
	height: number;
	cubeDimension: number;
	rotationX: number;
	rotationY: number;
	rotationZ: number;
};

const defaultProps: Props = {
	width: 0,
	height: 0,
	cubeDimension: 0,
	rotationX: 0.05,
	rotationY: 0.05,
	rotationZ: 0.05,
};

export const CubeAscii = (props: Props) => {
	const mergedProps = {...defaultProps, ...props};
	return (
		<div>
			<pre>
				{
				}
			</pre>
		</div>
	);
};
