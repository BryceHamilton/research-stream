export const RECEIVE_STUDIES = 'RECEIVE_STUDIES';

export interface ReceiveStudiesAction {
  type: typeof RECEIVE_STUDIES;
  studies: Study[];
}

export type StudyAction = ReceiveStudiesAction;
