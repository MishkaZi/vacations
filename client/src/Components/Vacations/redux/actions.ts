import Axios from 'axios';
import { VacationsActionType } from '../VacationModel';
import { Dispatch } from 'redux';
import { VacationAction } from './reducers';

export const getVacations =
  () => async (dispatch: Dispatch<VacationAction>) => {
    try {
      const vacations = await Axios.get('http://localhost:3001/vacations/');
      
      dispatch({
        type: VacationsActionType.GET_ALL_VACATIONS,
        payload: vacations.data,
      });
    } catch (error) {
      return new Error(error);
    }
  };
