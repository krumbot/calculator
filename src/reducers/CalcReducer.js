import { 
	NUMERIC_PRESS,
	CLEAR_PRESS,
	EQUALS_PRESS 
} from '../actions/types';

const initialState = {
	displayValue: '',
	calculatedValue: '',
	operator: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case NUMERIC_PRESS:
			return { 
				...state, 
				displayValue: state.displayValue + action.payload,
				calculatedValue: eval(state.displayValue + action.payload),
				operator: ''
			};
		case CLEAR_PRESS:
			return { ...initialState };
		case EQUALS_PRESS:
			console.log('equals press');
			return { 
				...state,
				displayValue: state.calculatedValue.toString(),
				operator: ''
			};
		default:
			return state;
	}
};

