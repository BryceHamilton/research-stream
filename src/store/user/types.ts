import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../constants/user';

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  user: User;
}
export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: User;
}
export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: Error;
}

export type UserActionType =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
