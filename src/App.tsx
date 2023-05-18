import React, {useEffect, useState} from 'react';
import './App.scss';
import {CubeAscii} from './components/CubeAscii';

const App: React.FC = () => (
	<div>
		<CubeAscii width={20} height={20} cubeDimension={10} rotationX={1} rotationY={1} rotationZ={1}/>
	</div>
);

export default App;
