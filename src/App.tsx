import React, {useEffect, useState} from 'react';
import './App.scss';
import {CubeAscii} from './components/CubeAscii';

const App: React.FC = () => (
	<div>
		<CubeAscii screenWidth={70} screenHeight={30} cubeWidthHeight={10} distanceFromCamera={100}/>
	</div>
);

export default App;
