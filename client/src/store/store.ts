import { createStore, combineReducers} from 'redux';
import { authReducer } from '../Components/Auth/redux/reducers';
import { deleteVacationIdReducer, vacationsReducer } from '../Components/Vacations/redux/reducers';

const allReducers = combineReducers({
  Auth: authReducer,
  Vacations: vacationsReducer,
  DeleteId: deleteVacationIdReducer,
});

export type RootStore = ReturnType<typeof allReducers>;

export const store = createStore(allReducers);
