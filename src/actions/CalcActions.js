import { DISPLAY_VALUE_CHANGED } from './types';

export const numericPress = ({ value }) => {
	return {
		type: DISPLAY_VALUE_CHANGED,
		payload: value
	};
};
