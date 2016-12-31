import { DISPLAY_VALUE_CHANGED } from '../actions/types';

const initialState = {
	currentValue: '',
	storedValue: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case DISPLAY_VALUE_CHANGED:
		console.log(action.payload);
		console.log(state);
			return { ...state, currentValue: state.currentValue + action.payload };
		default:
			return state;
	}
};
