import React, {useEffect, useState} from 'react';
import './App.scss';
import {CubeAscii} from './components/CubeAscii';

const App: React.FC = () => {
	const divRef = React.useRef<HTMLDivElement>(null);
	const preTagRef = React.useRef<HTMLPreElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [useColor, setUseColor] = useState(true);

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			console.log('Text copied to clipboard');
		} catch (err: unknown) {
			console.error('Failed to copy text: ', err);
		}
	};

	useEffect(() => {
		if (divRef.current) {
			setIsLoaded(true);
		}
	}, [divRef]);
	return (
		<div className={'App'} ref={divRef}>
			{
				isLoaded
					? (<>
						<button onClick={() => {
							setUseColor(!useColor);
						}}/>
						<button className={'Button-Copy-Clipboard'}
							onClick={async () => copyToClipboard(preTagRef.current!.innerText)}>Copy
						</button>
						<CubeAscii parentRef={divRef} useColor={useColor} preTagRef={preTagRef}/>
					</>
					)
					: (
						<p>Loading...</p>
					)
			}
		</div>
	);
};

export default App;
