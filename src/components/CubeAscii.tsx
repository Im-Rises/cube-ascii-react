import React, {useEffect, useRef, useState} from 'react';
import Cube from '../classes/Cube';
import {
	generateTextFromBuffer,
	generateTextFromBufferWithColor,
	refreshBuffers,
	rotateCube,
	updateBuffers,
} from '../maths/cube-maths';
import {calculateAndSetFontSize} from '../font-handler/font-handler';

type Props = {
	parentRef: React.RefObject<HTMLElement>;
	screenWidth?: number;
	screenHeight?: number;
	cubeWidthHeight?: number;
	distanceFromCamera?: number;
	frameRate?: number;
	useColor?: boolean;
};

const defaultProps = {
	screenWidth: 70,
	screenHeight: 30,
	cubeWidthHeight: 40,
	distanceFromCamera: 100,
	frameRate: 60,
	useColor: true,
};

export const CubeAscii = (props: Props) => {
	const mergedProps = {...defaultProps, ...props};

	const preTagRef = useRef<HTMLPreElement>(null);

	const [asciiCube, setAsciiCube] = useState<string>('');

	const zBuffer: number[] = [];
	const cubeTextBuffer: string[] = [];

	const cube = new Cube();

	useEffect(() => {
		calculateAndSetFontSize(preTagRef.current!, mergedProps.screenWidth, mergedProps.screenHeight, mergedProps.parentRef.current!.clientWidth, mergedProps.parentRef.current!.clientHeight);

		const resizeObserver = new ResizeObserver(entries => {
			const {width, height} = entries[0].contentRect;
			calculateAndSetFontSize(preTagRef.current!, mergedProps.screenWidth, mergedProps.screenHeight, width, height);
		});
		if (mergedProps.parentRef.current) {
			resizeObserver.observe(mergedProps.parentRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, [mergedProps.parentRef, mergedProps.screenWidth, mergedProps.screenHeight]);

	useEffect(() => {
		const updateCube = () => {
			refreshBuffers(zBuffer, cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight);

			updateBuffers(cube, zBuffer, cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight);

			if (mergedProps.useColor) {
				setAsciiCube(generateTextFromBufferWithColor(cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight));
			} else {
				setAsciiCube(generateTextFromBuffer(cubeTextBuffer, mergedProps.screenWidth, mergedProps.screenHeight));
			}

			rotateCube(cube);
		};

		const interval = setInterval(updateCube, 1000 / mergedProps.frameRate);

		return () => {
			clearInterval(interval);
		};
	}, [mergedProps.screenWidth, mergedProps.screenHeight, mergedProps.frameRate, mergedProps.useColor, mergedProps.parentRef]);

	return (
		<pre ref={preTagRef} dangerouslySetInnerHTML={{__html: asciiCube}} style={{fontFamily: 'monospace'}}/>
	);
};
