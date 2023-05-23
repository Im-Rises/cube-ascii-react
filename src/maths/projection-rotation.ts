import {
	BACKGROUND_CHARACTER,
	FACE_1_CHARACTER,
	FACE_2_CHARACTER,
	FACE_3_CHARACTER,
	FACE_4_CHARACTER, FACE_5_CHARACTER, FACE_6_CHARACTER,
} from '../constants/cube-settings';
import type Cube from '../classes/Cube';

// eslint-disable-next-line @typescript-eslint/naming-convention
const K1 = 40;

const calculateX = (x: number, y: number, z: number, cube: Cube): number =>
	(y * Math.sin(cube.rotationX) * Math.sin(cube.rotationY) * Math.cos(cube.rotationZ))
    - (z * Math.cos(cube.rotationX) * Math.sin(cube.rotationY) * Math.cos(cube.rotationZ))
    + (y * Math.cos(cube.rotationX) * Math.sin(cube.rotationZ))
    + (z * Math.sin(cube.rotationX) * Math.sin(cube.rotationZ))
    + (x * Math.cos(cube.rotationY) * Math.cos(cube.rotationZ));

const calculateY = (x: number, y: number, z: number, cube: Cube): number =>
	(x * Math.sin(cube.rotationY) * Math.cos(cube.rotationZ))
    + (x * Math.cos(cube.rotationY) * Math.sin(cube.rotationZ))
    - (y * Math.sin(cube.rotationX) * Math.sin(cube.rotationY) * Math.sin(cube.rotationZ))
    + (z * Math.cos(cube.rotationX) * Math.sin(cube.rotationY) * Math.sin(cube.rotationZ))
    - (y * Math.cos(cube.rotationX) * Math.cos(cube.rotationZ))
    - (z * Math.sin(cube.rotationX) * Math.cos(cube.rotationZ));

const calculateZ = (x: number, y: number, z: number, cube: Cube): number =>
	(x * Math.cos(cube.rotationY) * Math.sin(cube.rotationZ))
    - (x * Math.sin(cube.rotationY) * Math.cos(cube.rotationZ))
    + (y * Math.sin(cube.rotationX) * Math.cos(cube.rotationY))
    - (y * Math.cos(cube.rotationX) * Math.sin(cube.rotationY))
    + (z * Math.cos(cube.rotationX) * Math.cos(cube.rotationY));

const calculateForSurface = (cubeX: number, cubeY: number, cubeZ: number,
	cube: Cube, ch: string,
	zBuffer: number[], textBuffer: string[],
	screenWidth: number, screenHeight: number) => {
	const x = calculateX(cubeX, cubeY, cubeZ, cube);
	const y = calculateY(cubeX, cubeY, cubeZ, cube);
	const z = calculateZ(cubeX, cubeY, cubeZ, cube);

	const ooz = 1 / z;

	const xp = (screenWidth / 2) + (K1 * ooz * x * 2);
	const yp = (screenHeight / 2) + (K1 * ooz * y);

	const idx = xp + (yp * screenWidth);
	if (idx >= 0 && idx < screenWidth * screenHeight) {
		if (ooz > zBuffer[idx]) {
			zBuffer[idx] = ooz;
			textBuffer[idx] = ch;
		}
	}

	return textBuffer;
};

const updateBuffers = (cube: Cube, zBuffer: number[], textBuffer: string[], screenWidth: number, screenHeight: number) => {
	const halfCubeLength = cube.cubeWidthHeight / 2;

	for (let cubeX = -halfCubeLength; cubeX < halfCubeLength; cubeX++) {
		for (let cubeY = -halfCubeLength; cubeY < halfCubeLength; cubeY++) {
			calculateForSurface(cubeX, cubeY, -halfCubeLength, cube, FACE_1_CHARACTER, zBuffer, textBuffer, screenWidth, screenHeight);
			calculateForSurface(halfCubeLength, cubeY, cubeX, cube, FACE_2_CHARACTER, zBuffer, textBuffer, screenWidth, screenHeight);
			calculateForSurface(-halfCubeLength, cubeY, -cubeX, cube, FACE_3_CHARACTER, zBuffer, textBuffer, screenWidth, screenHeight);
			calculateForSurface(-cubeX, cubeY, halfCubeLength, cube, FACE_4_CHARACTER, zBuffer, textBuffer, screenWidth, screenHeight);
			calculateForSurface(cubeX, -halfCubeLength, -cubeY, cube, FACE_5_CHARACTER, zBuffer, textBuffer, screenWidth, screenHeight);
			calculateForSurface(cubeX, halfCubeLength, cubeY, cube, FACE_6_CHARACTER, zBuffer, textBuffer, screenWidth, screenHeight);
		}
	}
};

const refreshBuffers = (zBuffer: number[], textBuffer: string[], screenWidth: number, screenHeight: number) => {
	textBuffer.length = 0;
	zBuffer.length = 0;
	for (let i = 0; i < screenHeight; i++) {
		for (let j = 0; j < screenWidth; j++) {
			textBuffer.push(BACKGROUND_CHARACTER);
			zBuffer.push(0);
		}
	}
};

const generateTextFromBuffer = (textBuffer: string[], screenWidth: number, screenHeight: number) => {
	let text = '';
	for (let i = 0; i < screenHeight; i++) {
		for (let j = 0; j < screenWidth; j++) {
			text += textBuffer[(i * screenWidth) + j];
		}

		text += '\n';
	}

	return text;
};

const rotateCube = (cube: Cube) => {
	cube.rotationX += cube.speedRotationX;
	cube.rotationY += cube.speedRotationY;
	cube.rotationZ += cube.speedRotationZ;
};

export {refreshBuffers, updateBuffers, generateTextFromBuffer, rotateCube};
