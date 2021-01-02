import { combineReducers, Reducer, createStore, compose } from 'redux';
import userReducer, { UserState, initialUserState } from './user/reducer';
import studiesReducer, {
  StudiesState,
  initialStudiesState,
} from './studies/reducer';

export interface AppState {
  user: UserState;
  studies: StudiesState;
}

const initialAppState: AppState = {
  user: initialUserState,
  studies: initialStudiesState,
};

const reducers: Reducer<AppState> = combineReducers<AppState>({
  user: userReducer,
  studies: studiesReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialAppState, composeEnhancers());

export default store;
