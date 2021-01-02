import { ReceiveStudiesAction, RECEIVE_STUDIES } from './types';

export const receiveStudies = (studies: Study[]): ReceiveStudiesAction => {
  return {
    type: RECEIVE_STUDIES,
    studies,
  };
};
