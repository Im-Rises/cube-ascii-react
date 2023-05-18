import React, {useEffect, useState} from 'react';
import {setBackground} from '../maths/projection-rotation';

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

	// const [asciiCube, setAsciiCube] = useState<string[][]>([]);
	//
	// setAsciiCube(setBackground(asciiCube, '.'));

	// useEffect(() => {
	// 	const {width, height, cubeDimension} = mergedProps;
	//
	// 	const asciiCube: string[][] = [];
	//
	// 	for (let y = 0; y < height; y++) {
	// 		const row: string[] = [];
	//
	// 		for (let x = 0; x < width; x++) {
	// 			row.push(' ');
	// 		}
	//
	// 		asciiCube.push(row);
	// 	}
	//
	// 	setAsciiCube(asciiCube);
	// }, [mergedProps]);

	return (
		<div>
			<pre>
				{
					asciiCube
				}
				{/* { */}
				{/*	asciiCube.map((row, rowIndex) => ( */}
				{/*		<div key={rowIndex}> */}
				{/*			{ */}
				{/*				row.map((cell, cellIndex) => ( */}
				{/*					<span key={cellIndex}>{cell}</span> */}
				{/*				)) */}
				{/*			} */}
				{/*		</div> */}
				{/*	)) */}
				{/* } */}
			</pre>
		</div>
	);
};
