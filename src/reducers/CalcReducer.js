import { 
	NUMERIC_PRESS,
	CLEAR_PRESS,
	EQUALS_PRESS,
	OPERATOR_PRESS,
	FUNCTION_PRESS,
	RESET_TOGGLE
} from '../actions/types';

const initialState = {
	displayValue: '',
	trueValue: '',
	calculatedValue: '',
	calculatedChange: false,
	operator: '',
	reset: true
};


const calculate = expression => {
	let expr = expression;
	const missingStack = missingParenthesis(expr);
	if (missingStack.length > 0) {
		missingStack.forEach(() => {
			expr += ')';
		});
	} 
	try {
		return eval(expr);
	}
	catch (e) {
		return 'BAD_EXPRESSION';
	}
};

const missingParenthesis = string => {
	const stack = [];
	string.split('').forEach(character => {
		if (character === '(') {
			stack.push('(');
		}
		if (character === ')') {
			stack.pop();
		}
	});
	return stack;
};

export default (state = initialState, action) => {
	console.log(state);
	console.log(action);
	switch (action.type) {
		case NUMERIC_PRESS:
			if (state.reset || state.calculatedValue === 'BAD_EXPRESSION') {
				return {
					...state,
					displayValue: action.payload,
					trueValue: action.payload,
					calculatedValue: calculate(action.payload),
					calculatedChange: true,
					operator: '',
					reset: false
				};
			}

			if (state.operator && action.payload === '.') {
				return {
					...state,
					displayValue: state.displayValue + action.payload,
					trueValue: state.trueValue + '0' + action.payload,
					calculatedValue: calculate(state.trueValue + '0' + action.payload),
					calculatedChange: false,
					operator: '',
					reset: false
				};
			}

			return { 
				...state, 
				displayValue: state.displayValue + action.payload,
				trueValue: state.trueValue + action.payload,
				calculatedValue: calculate(state.trueValue + action.payload),
				calculatedChange: true,
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
				calculatedChange: false,
				reset: true
			};
		case OPERATOR_PRESS:
			if (state.operator) {
				return {
					...state,
					displayValue: state.displayValue.slice(0, -1) + action.payload.display,
					trueValue: state.trueValue.slice(0, -1) + action.payload.value,
					operator: action.payload,
					calculatedChange: false,
					reset: false
				};				
			}
			return {
				...state,
				displayValue: state.displayValue + action.payload.display,
				trueValue: state.trueValue + action.payload.value,
				operator: action.payload,
				calculatedChange: false,
				reset: false
			};
		case FUNCTION_PRESS:
			if (!state.operator && action.payload.value !== ')' 
				&&	state.trueValue.substring(state.trueValue.length - 1) !== '(' 
				&& state.displayValue !== '') {
				return {
					...state,
					displayValue: state.displayValue + action.payload.display,
					trueValue: state.trueValue + '*' + action.payload.value,
					reset: false,
					calculatedChange: false
				};
			}
			return {
				...state,
				displayValue: state.displayValue + action.payload.display,
				trueValue: state.trueValue + action.payload.value,
				reset: false,
				operator: '',
				calculatedChange: false
			};
		default:
			return state;
	}
};

