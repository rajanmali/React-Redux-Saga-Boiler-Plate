import { combineReducers } from 'redux';
import homeReducer from '../containers/Home/reducer';

const rootReducer = combineReducers({ homeData: homeReducer });

export default rootReducer;
