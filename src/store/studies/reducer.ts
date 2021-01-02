import { Reducer } from 'redux';
import { RECEIVE_STUDIES, StudyAction } from './types';

export type StudiesState = Study[];

export const initialState: StudiesState = [];

const reducer: Reducer<StudiesState, StudyAction> = (
  state = initialState,
  action,
): StudiesState => {
  switch (action.type) {
    case RECEIVE_STUDIES:
      return action.studies;
    default:
      return state;
  }
};

export default reducer;
