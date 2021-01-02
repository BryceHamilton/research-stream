import { Reducer } from 'redux';
import { UserActionType } from './types';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../constants/user';

export type UserState = {
  isAuthenticated: boolean;
  user?: User;
};

const localStorageUser = localStorage.getItem('user');
const user = localStorageUser ? JSON.parse(localStorageUser) : null;

export const initialUserState: UserState = user
  ? { isAuthenticated: true, user }
  : { isAuthenticated: false };

const reducer: Reducer<UserState, UserActionType> = (
  state = initialUserState,
  action,
): UserState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { isAuthenticated: true, user: action.user };
    case LOGIN_FAILURE:
      return { isAuthenticated: false };
    case LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export default reducer;
