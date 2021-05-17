import { createStore, combineReducers } from 'redux';
import { authReducer } from '../Components/Auth/redux/reducers';

const allReducers = combineReducers({
  Auth: authReducer,
});

export const store = createStore(allReducers);
