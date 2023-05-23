import React, {useEffect, useState} from 'react';
import './App.scss';
import {CubeAscii} from './components/CubeAscii';

const App: React.FC = () => (
	<div className={'App'}>
		<CubeAscii/>
	</div>
);

export default App;
