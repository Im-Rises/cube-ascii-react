/*
* The code below is the multiplication of the rotations matrices by the a point (x, y, z)
* The rotation matrices are the following:
* Rx = [          1,            0,            0]
* 	   [          0,  cos(angleX), -sin(angleX)]
* 	   [          0,  sin(angleX),  cos(angleX)]
*
* Ry = [cos(angleY),            0,  sin(angleY)]
* 	   [0, 			            1,   		  0]
* 	   [-sin(angleY),           0,  cos(angleY)]
*
* Rz = [cos(angleZ), -sin(angleZ),            0]
* 	   [sin(angleZ),  cos(angleZ),            0]
* 	   [          0,     		0,            1]
*
* The multiplication of the matrices is the following:
* [x', y', z'] = [x, y, z] * Rx * Ry * Rz
*
* The result is the following:
*
* x' = (y * sin(angleX) * sin(angleY) * cos(angleZ)) - (z * cos(angleX) * sin(angleY) * cos(angleZ)) + (y * cos(angleX) * sin(angleZ)) + (z * sin(angleX) * sin(angleZ)) + (x * cos(angleY) * cos(angleZ))
* y' = (x * sin(angleY) * cos(angleZ)) + (x * cos(angleY) * sin(angleZ)) - (y * sin(angleX) * sin(angleY) * sin(angleZ)) + (z * cos(angleX) * sin(angleY) * sin(angleZ)) - (y * cos(angleX) * cos(angleZ)) - (z * sin(angleX) * cos(angleZ))
* z' = (x * cos(angleY) * sin(angleZ)) - (x * sin(angleY) * cos(angleZ)) + (y * sin(angleX) * cos(angleY)) - (y * cos(angleX) * sin(angleY)) + (z * cos(angleX) * cos(angleY))
*
*/

const angleX = 0;
const angleY = 0;
const angleZ = 0;

const calculateX = (x: number, y: number, z: number): number =>
	(y * Math.sin(angleX) * Math.sin(angleY) * Math.cos(angleZ))
    - (z * Math.cos(angleX) * Math.sin(angleY) * Math.cos(angleZ))
    + (y * Math.cos(angleX) * Math.sin(angleZ))
    + (z * Math.sin(angleX) * Math.sin(angleZ))
    + (x * Math.cos(angleY) * Math.cos(angleZ));

const calculateY = (x: number, y: number, z: number): number =>
	(x * Math.sin(angleY) * Math.cos(angleZ))
    + (x * Math.cos(angleY) * Math.sin(angleZ))
    - (y * Math.sin(angleX) * Math.sin(angleY) * Math.sin(angleZ))
    + (z * Math.cos(angleX) * Math.sin(angleY) * Math.sin(angleZ))
    - (y * Math.cos(angleX) * Math.cos(angleZ))
    - (z * Math.sin(angleX) * Math.cos(angleZ));

const calculateZ = (x: number, y: number, z: number): number =>
	(x * Math.cos(angleY) * Math.sin(angleZ))
    - (x * Math.sin(angleY) * Math.cos(angleZ))
    + (y * Math.sin(angleX) * Math.cos(angleY))
    - (y * Math.cos(angleX) * Math.sin(angleY))
    + (z * Math.cos(angleX) * Math.cos(angleY));

const setBackground = (array2D: string[][], char: string): string[][] => {
	// eslint-disable-next-line @typescript-eslint/prefer-for-of
	for (let i = 0; i < array2D.length; i++) {
		for (let j = 0; j < array2D[i].length; j++) {
			array2D[i][j] = char;
		}
	}

	return array2D;
};

export {setBackground, calculateX, calculateY, calculateZ};
