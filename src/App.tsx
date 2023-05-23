import React, {useEffect, useState} from 'react';
import './App.scss';
import {CubeAscii} from './components/CubeAscii';

const App: React.FC = () => {
	const divRef = React.useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (divRef.current) {
			setIsLoaded(true);
			console.log('loaded');
		}
	}, [divRef]);
	return (
		<div className={'App'} ref={divRef}>
			{
				isLoaded
					? (
						<CubeAscii parentRef={divRef}/>
					)
					: (
						<p>Loading...</p>
					)
			}
		</div>
	);
};

export default App;
