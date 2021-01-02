import { combineReducers, Reducer, createStore } from 'redux';
import userReducer, { UserState } from './user/reducer';
import studiesReducer, { StudiesState } from './studies/reducer';

export interface AppState {
  user: UserState;
  studies: StudiesState;
}

const reducers: Reducer<AppState> = combineReducers<AppState>({
  user: userReducer,
  studies: studiesReducer,
});

const store = createStore(reducers);

export default store;
