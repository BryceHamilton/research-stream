import { createStore } from 'redux';
import { RootState } from './types';

const initialState: RootState = {
  user: '',
  isResearcher: false,
  studies: '',
  myDrafts: [],
};

const reducer = (
  state: RootState = initialState,
  action: {
    type: string;
    studies: any;
    myDrafts: any;
    email: any;
    isResearcher: any;
    study: { _id: any };
  },
): RootState => {
  if (action.type === 'getStudies') {
    return { ...state, studies: action.studies };
  }

  if (action.type === 'updateMyDrafts') {
    console.log('updating drafts', action.myDrafts);
    return { ...state, myDrafts: action.myDrafts };
  }
  if (action.type === 'loginSuccess') {
    return { ...state, user: action.email, isResearcher: action.isResearcher };
  }

  if (action.type === 'updateStudy') {
    console.log('updating study');
    let studies = [...state.studies];
    studies = studies.map((study) => {
      if (study._id === action.study._id) {
        return action.study;
      }
      return study;
    });
    return { ...state, studies: studies };
  }

  if (action.type === 'addStudy') {
    let studies = state.studies;
    studies.push(action.study);
    return { ...state, studies: studies };
  }

  if (action.type === 'addDraft') {
    return { ...state, myDrafts: [...state.myDrafts, action.study] };
  }

  if (action.type === 'logOut') {
    console.log('LOGGING OUT USER');
    return { ...state, user: '' };
  }

  return state;
};

let store = createStore(reducer, initialState);

export default store;
