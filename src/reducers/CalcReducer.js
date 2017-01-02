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
	operator: '',
	reset: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case NUMERIC_PRESS:
			if (state.reset) {
				return {
					...state,
					displayValue: action.payload,
					trueValue: action.payload,
					calculatedValue: eval(action.payload),
					operator: '',
					reset: false
				};
			}
			return { 
				...state, 
				displayValue: state.displayValue + action.payload,
				trueValue: state.trueValue + action.payload,
				calculatedValue: eval(state.trueValue + action.payload),
				operator: '',
				reset: false
			};
		case CLEAR_PRESS:
			return { ...initialState };
		case EQUALS_PRESS:
			return { 
				...state,
				displayValue: state.calculatedValue.toString(),
				trueValue: state.calculatedValue.toString(),
				operator: '',
				reset: true
			};
		case OPERATOR_PRESS:
			return {
				...state,
				displayValue: state.displayValue + action.payload.display,
				trueValue: state.trueValue + action.payload.value,
				operator: action.payload,
				reset: false
			};
		default:
			return state;
	}
};

