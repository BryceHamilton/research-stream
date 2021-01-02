import userService from '../../services/user-service';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../constants/user';
import {
  LoginFailureAction,
  LoginSuccessAction,
  UserActionType,
} from './types';

export const userActions = {
  login: (response: GoogleResponse) => {
    return (dispatch: (action: UserActionType) => void) => {
      userService.login(response).then(
        (user: User) => {
          dispatch(success(user));
        },
        (error: Error) => {
          dispatch(failure(error));
        },
      );
    };
  },

  logout: (dispatch: (action: UserActionType) => void) => () => {
    userService.logout();
    dispatch({ type: LOGOUT });
  },
};

const success = (user: User): LoginSuccessAction => {
  return { type: LOGIN_SUCCESS, user };
};
const failure = (error: Error): LoginFailureAction => {
  return { type: LOGIN_FAILURE, error };
};
