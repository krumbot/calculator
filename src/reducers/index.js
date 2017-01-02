import { combineReducers } from 'redux';
import CalcReducer from './CalcReducer';

export default combineReducers({
	calculator: CalcReducer
});
