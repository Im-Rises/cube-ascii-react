import React, {useEffect, useState} from 'react';
import './App.scss';

const App: React.FC = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const divRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (divRef.current) {
			setIsLoaded(true);
		}
	}, [divRef]);

	return (
		<div className='App'>
			<div ref={divRef}>
				{isLoaded ? (
					<div className={'particle-sim-canvas'}>
					</div>
				) : (
					<p className={'wait-sim-canvas'}>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default App;
