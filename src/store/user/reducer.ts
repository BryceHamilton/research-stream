import { UserActionType } from './types';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../constants/user';
import { Reducer } from 'redux';

export type UserState = User;

const initialState: UserState = {
  googleId: '',
  imageUrl: '',
  email: '',
  name: '',
  givenName: '',
  familyName: '',
};

const reducer: Reducer<UserState, UserActionType> = (
  state = initialState,
  action,
): User => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return action.user;
    default:
      return state;
  }
};

export default reducer;
