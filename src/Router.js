import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Calculator from './components/Calculator';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }}>
			<Scene key="main" initial>
				<Scene 
					key="calculator"
					component={Calculator} 
					title="Calculator"
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
