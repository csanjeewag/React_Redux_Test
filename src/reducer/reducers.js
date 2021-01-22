  
// Reducers: combine all reducers of the app
import { combineReducers } from "redux";
import studentReducer from './studentReducer';

export default combineReducers({
    'allStudent':studentReducer
});

