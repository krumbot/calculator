import { 
	NUMERIC_PRESS,
	CLEAR_PRESS,
	EQUALS_PRESS,
	OPERATOR_PRESS
} from '../actions/types';

const initialState = {
	displayValue: '',
	trueValue: '',
	calculatedValue: '',
	operator: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case NUMERIC_PRESS:
			return { 
				...state, 
				displayValue: state.displayValue + action.payload,
				trueValue: state.trueValue + action.payload,
				calculatedValue: eval(state.trueValue + action.payload),
				operator: ''
			};
		case CLEAR_PRESS:
			return { ...initialState };
		case EQUALS_PRESS:
			console.log('equals press');
			return { 
				...state,
				displayValue: state.calculatedValue.toString(),
				trueValue: state.calculatedValue.toString(),
				operator: ''
			};
		case OPERATOR_PRESS:
			return {
				...state,
				displayValue: state.displayValue + action.payload.display,
				trueValue: state.trueValue + action.payload.value,
				operator: action.payload
			};
		default:
			return state;
	}
};

