import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import RouterComponent from './Router';
// import ReduxThunk from 'redux-thunk'; 
// import firebase from 'firebase';
// import reducers from './reducers';
// import Router from './Router';

class App extends Component {
	render() {
		const store = createStore(() => {});
		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}

export default App;
