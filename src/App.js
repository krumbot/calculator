import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text } from 'react-native';
// import ReduxThunk from 'redux-thunk'; 
// import firebase from 'firebase';
// import reducers from './reducers';
// import Router from './Router';

class App extends Component {
	render() {
		const store = createStore(() => {});
		return (
			<Provider store={store}>
				<Text> Hi </Text>
			</Provider>
		);		
	}
}

export default App;
