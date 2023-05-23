import React, {useEffect, useState} from 'react';
import Cube from '../classes/Cube';
import {generateTextFromBuffer, refreshBuffers, rotateCube, updateBuffers} from '../maths/projection-rotation';

type Props = {
	screenWidth?: number;
	screenHeight?: number;
	cubeWidthHeight?: number;
	distanceFromCamera?: number;
	frameRate?: number;
};

const defaultProps = {
	screenWidth: 70,
	screenHeight: 30,
	cubeWidthHeight: 40,
	distanceFromCamera: 100,
	frameRate: 60,
};

export const CubeAscii = (props: Props) => {
	const mergedProps = {...defaultProps, ...props};

	const [asciiCube, setAsciiCube] = useState<string>('');

	const zBuffer: number[] = [];
	const cubeTextBuffer: string[] = [];

	const cube = new Cube();

	useEffect(() => {
		const updateCube = () => {
			refreshBuffers(zBuffer, cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight);

			updateBuffers(cube, zBuffer, cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight);

			setAsciiCube(generateTextFromBuffer(cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight));

			rotateCube(cube);
		};

		const interval = setInterval(updateCube, 1000 / mergedProps.frameRate);

		return () => {
			clearInterval(interval);
		};
	}, [mergedProps.screenWidth, mergedProps.screenHeight, mergedProps.frameRate]);

	return (
		<div>
			{/* <pre dangerouslySetInnerHTML={{__html: asciiCube}} style={{fontFamily: 'monospace'}}/> */}
			<pre style={{fontFamily: 'monospace'}}>
				{asciiCube}
			</pre>
		</div>
	);
};
