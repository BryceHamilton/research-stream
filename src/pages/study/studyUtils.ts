import moment from 'moment';
import { Event } from 'react-big-calendar';
import { api } from '../../api';

export interface TimeSlot extends Event {
  id: string;
  applicants: string[];
  confirmed: string[];
  selected: boolean;
  userConfirmed: boolean;
}

export type SelectedTimeSlots = Record<string, TimeSlot>;

const addSelectedTime = (
  timeSlot: TimeSlot,
  selectedTimeSlots: SelectedTimeSlots,
  setSelectedTimeSlots: (newSlots: SelectedTimeSlots) => void,
) => {
  const newSlots: SelectedTimeSlots = { ...selectedTimeSlots };
  newSlots[timeSlot.id] = timeSlot;
  setSelectedTimeSlots(newSlots);
};

const removeSelectedTime = (
  timeSlot: TimeSlot,
  selectedTimeSlots: SelectedTimeSlots,
  setSelectedTimeSlots: (newSlots: SelectedTimeSlots) => void,
) => {
  const newSlots: SelectedTimeSlots = { ...selectedTimeSlots };
  delete newSlots[timeSlot.id];
  setSelectedTimeSlots(newSlots);
};

const applyToStudy = async (
  selectedTimeSlots: SelectedTimeSlots,
  dispatch: (action: object) => void,
  openModal: () => void,
  user: User | undefined,
  _id: string,
  title: string,
) => {
  const data = { user, _id, title, selectedTimeSlots };
  const response = await fetch(api('/applyToStudy'), {
    method: 'post',
    body: JSON.stringify(data),
  });
  const responseBody = await response.text();
  const { conflict, conflictIds, success, study } = JSON.parse(responseBody);

  if (conflict) {
    const conflictingTimeSlots: any[] = [];
    conflictIds.forEach((id: string) => {
      conflictingTimeSlots.push({ ...selectedTimeSlots[id] });
    });
    let messages = '';
    conflictingTimeSlots.forEach(({ start, end }) => {
      messages +=
        moment(start).format('MMMM Do YYYY h:mm a') +
        ' - ' +
        moment(end).format('h:mm a') +
        '\n';
    });
    alert('You have conflicting applications. Please change:\n' + messages);
    return;
  }

  if (success) {
    openModal();
    dispatch({ type: 'updateStudy', study: study });
  }
};

export { applyToStudy, addSelectedTime, removeSelectedTime };
