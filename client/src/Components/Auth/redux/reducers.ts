import { AuthActionType } from "../UsersModel";


export interface AuthAction {
  type: string;
  payload?: {
    token: string;
    isAdmin: boolean;
  };
}

interface defaultStateI {
  token?: string;
  isAdmin?: boolean;
}

const initialState: defaultStateI = {};

export const authReducer = (
  state = initialState,
  action: AuthAction
): defaultStateI => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return {
        token: action.payload?.token,
        isAdmin: action.payload?.isAdmin,
      };
    default:
      return {};
  }
};
