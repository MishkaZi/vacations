import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from '../Components/Auth/redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  Auth: authReducer,
});

export type RootStore = ReturnType<typeof allReducers>;

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
