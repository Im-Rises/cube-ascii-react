/* eslint-disable max-params */
const incrementFontValue = 0.1; // The value to increment the font size with
const initFontSize = 1.0;// Init font size for calculation (a value to small will make the text not visible on some devices)

const calculateAndSetFontSize = (pretag: HTMLPreElement, charsPerLine: number, charsPerColumn: number, parentWidth: number, parentHeight: number) => {
	// Create one string with, one line of text filled with W
	const filledStringLine = String('W').repeat(charsPerLine);

	// Set init font size
	let fontSize = initFontSize;

	// Create a pre element to calculate the height of the text
	const preElementBuffer = document.createElement('pre');
	preElementBuffer.style.fontSize = `${fontSize}px`;
	preElementBuffer.style.fontFamily = 'monospace';

	preElementBuffer.style.position = 'absolute';

	// Filled the pre element with `filledStringLine` for each line
	for (let i = 0; i < charsPerColumn; i++) {
		preElementBuffer.append(filledStringLine);
		preElementBuffer.append('\n');
	}

	// Append the pre element to the DOM to calculate the width and height
	document.body.appendChild(preElementBuffer);

	// Calculate width and height of the pre element
	// let preWidth = preElementBuffer.offsetWidth;
	let preWidth = preElementBuffer.getBoundingClientRect().width;
	// let preHeight = preElementBuffer.offsetHeight;
	let preHeight = preElementBuffer.getBoundingClientRect().height;

	// Increase the font size until the text is wider than the screen in width or height
	while ((preWidth < parentWidth) && (preHeight < parentHeight)) {
		fontSize += incrementFontValue;
		preElementBuffer.style.fontSize = `${fontSize}px`;
		preWidth = preElementBuffer.getBoundingClientRect().width;
		preHeight = preElementBuffer.getBoundingClientRect().height;
	}

	// Remove the pre tag buffer
	preElementBuffer.remove();

	// Decrease the font size by one to get the correct size
	fontSize -= incrementFontValue;

	// Set the font size
	pretag.style.fontSize = `${fontSize}px`;

	// Debug
	console.log('calculateAndSetFontSize');
	console.log(`Setting font size to ${fontSize}`);
	console.log(`parentHeight: ${parentHeight}, preHeight: ${preHeight}`);
	console.log(`parentWidth: ${parentWidth}, preWidth: ${preWidth}`);
};

export {calculateAndSetFontSize};
