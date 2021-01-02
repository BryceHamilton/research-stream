import { ReceiveStudiesAction, RECEIVE_STUDIES } from './types';

export function receiveStudies(studies: [Study]): ReceiveStudiesAction {
  return {
    type: RECEIVE_STUDIES,
    studies,
  };
}
