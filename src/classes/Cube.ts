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
		this.speedRotationX = 0.04;
		this.speedRotationY = 0.05;
		this.speedRotationZ = 0.02;
		this.cubeWidthHeight = 40;
		this.horizontalOffset = 0;
		this.verticalOffset = 0;
		this.distanceFromCam = 100;
	}
}

export default Cube;
