import React, {useEffect, useState} from 'react';
import Cube from '../classes/Cube';
import {generateTextFromBuffer, refreshBuffers, rotateCube, updateBuffers} from '../maths/projection-rotation';

type Props = {
	screenWidth: number;
	screenHeight: number;
	cubeWidthHeight: number;
	distanceFromCamera: number;
};

const defaultProps: Props = {
	screenWidth: 70,
	screenHeight: 30,
	cubeWidthHeight: 40,
	distanceFromCamera: 100,
};

export const CubeAscii = (props: Props) => {
	const mergedProps = {...defaultProps, ...props};

	const [asciiCube, setAsciiCube] = useState<string>('');

	const zBuffer: number[] = [];
	const cubeTextBuffer: string[] = [];

	const cube = new Cube();

	useEffect(() => {
		refreshBuffers(zBuffer, cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight);

		// updateBuffers(cube, zBuffer, cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight);

		setAsciiCube(generateTextFromBuffer(cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight));

		// for (let i = 0; i < 100; i++) {
		// 	console.log(zBuffer[i], cubeTextBuffer[i]);
		// }

		rotateCube(cube);
	}, [mergedProps]);

	return (
		<div>
			<pre dangerouslySetInnerHTML={{__html: asciiCube}} style={{fontFamily: 'monospace'}}/>
		</div>
	);
};
