export interface UsersModel {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

export const AuthActionType = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
};