import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../constants/user';

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: User;
}
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: Error;
}
export interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserActionType =
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;
