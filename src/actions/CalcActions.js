import { NUMERIC_PRESS, CLEAR_PRESS } from './types';

export const numericPress = ({ value }) => {
	return {
		type: NUMERIC_PRESS,
		payload: value
	};
};

export const clearPress = () => {
	return {
		type: CLEAR_PRESS
	};
};
