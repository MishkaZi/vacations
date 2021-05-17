import Axios from 'axios';
import { AuthActionType, UsersModel } from '../UsersModel';

export const createAccount = async (data: UsersModel) => {
  try {
    console.log("Data actions: "+data);
    
    const result = await Axios.post('http://localhost:3001/users/', data);
    console.log("Result actions: "+ result);
    
    return { type: AuthActionType.REGISTER, payload: result.data };
  } catch (error) {
    console.log('Catched error: ' + JSON.stringify(error));
  }
};
