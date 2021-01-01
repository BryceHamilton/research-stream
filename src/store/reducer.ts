import { RECEIVE_STUDIES, RootState, StudyActionTypes } from './types';

export const initialState: RootState = {
  studies: [],
  user: '',
};

const reducer = (
  state: RootState = initialState,
  action: StudyActionTypes,
): RootState => {
  switch (action.type) {
    case RECEIVE_STUDIES:
      return { ...state, studies: action.studies };
    default:
      return state;
  }
};

export default reducer;
