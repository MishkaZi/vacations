import Axios from 'axios';
import { AuthActionType, UsersModel } from '../UsersModel';
import { Dispatch } from 'redux';
import { AuthAction } from './reducers';

export const loginUser =
  (user: UsersModel) => async (dispatch: Dispatch<AuthAction>) => {
    try {
      const userData = await Axios.post(
        'http://localhost:3001/users/login',
        user
      );

      let token = 'Bearer ' + userData.data.token;
      //Relevant if we refresh  the page, yet still want to stay logged in
      localStorage.setItem('userToken', token);
      Axios.defaults.headers.common['Authorization'] = token;

      const isAdmin = userData.data.isAdmin;

      dispatch({
        type: AuthActionType.LOGIN,
        payload: { token, isAdmin },
      });
      
    } catch (error) {
      console.log(error);
      alert('Error failed');
    }
  };
