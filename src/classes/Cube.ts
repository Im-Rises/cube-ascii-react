import {MIN_ROTATION_SPEED, MAX_ROTATION_SPEED} from '../constants/cube-settings';

class Cube {
	rotationX;
	rotationY;
	rotationZ;
	speedRotationX;
	speedRotationY;
	speedRotationZ;
	cubeWidthHeight;
	horizontalOffset;
	verticalOffset;
	distanceFromCam;

	constructor() {
		this.rotationX = 0;
		this.rotationY = 0;
		this.rotationZ = 0;
		this.speedRotationX = generateRandomFloat(-0.05, 0.1);
		this.speedRotationY = generateRandomFloat(-0.1, 0.1);
		this.speedRotationZ = generateRandomFloat(-0.1, 0.1);
		this.cubeWidthHeight = 40;
		this.horizontalOffset = 0;
		this.verticalOffset = 0;
		this.distanceFromCam = 100;
	}
}

const generateRandomFloat = (min: number, max: number) => (Math.random() * (max - min)) + min;

const generateRandomRotation = () => generateRandomFloat(MIN_ROTATION_SPEED, MAX_ROTATION_SPEED);

export default Cube;
