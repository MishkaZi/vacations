import { AuthActionType, AuthAction } from '../UsersModel';
const initialState = {};

export const authReducer = (state = initialState, action: AuthAction): any => {
  const { type, payload } = action;
  console.log("Payload reducers: "+payload);
  

  switch (type) {
    case AuthActionType.REGISTER:
      return {
        ...state,
        user: payload,
      };
    case AuthActionType.LOGIN:
      return {
        ...state,
        user: payload,
      };
    default:
      break;
  }
};
