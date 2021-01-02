import userService from '../../services/user-service';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../constants/user';
import {
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  UserActionType,
} from './types';

export const userActions = {
  login: (response: GoogleResponse) => {
    const user: User = response.profileObj;

    return (dispatch: (action: UserActionType) => void) => {
      dispatch(request(user));

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
};

const request = (user: User): LoginRequestAction => {
  return { type: LOGIN_REQUEST, user };
};
const success = (user: User): LoginSuccessAction => {
  return { type: LOGIN_SUCCESS, user };
};
const failure = (error: Error): LoginFailureAction => {
  return { type: LOGIN_FAILURE, error };
};

// // function logout() {
// //     userService.logout();
// //     return { type: userConstants.LOGOUT };
// // }
