import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

test('Render ASCII React', () => {
	render(<App/>);
	const canvasElement = screen.getByTestId('react-p5');
	expect(canvasElement).toBeInTheDocument();
});

