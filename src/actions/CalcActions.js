import { 
	NUMERIC_PRESS, 
	CLEAR_PRESS, 
	EQUALS_PRESS,
	OPERATOR_PRESS,
	FUNCTION_PRESS,
	RESET_TOGGLE
} from './types';

export const numericPress = ({ display }) => {
	return {
		type: NUMERIC_PRESS,
		payload: display
	};
};

export const clearPress = () => {
	return {
		type: CLEAR_PRESS
	};
};

export const equalsPress = () => {
	return {
		type: EQUALS_PRESS
	};
};

export const operatorPress = ({ display, value }) => {
	return {
		type: OPERATOR_PRESS,
		payload: { display, value }
	};
};

export const functionPress = ({ display, value }) => {
	return {
		type: FUNCTION_PRESS,
		payload: { display, value }
	};
};
