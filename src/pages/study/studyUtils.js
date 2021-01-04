import moment from 'moment';

const addSelectedTime = (timeSlot, selectedTimeSlots, setSelectedTimeSlots) => {
  const newSlots = { ...selectedTimeSlots };
  newSlots[timeSlot.id] = timeSlot;
  setSelectedTimeSlots(newSlots);
};

const removeSelectedTime = (
  timeSlot,
  selectedTimeSlots,
  setSelectedTimeSlots,
) => {
  const newSlots = { ...selectedTimeSlots };
  delete newSlots[timeSlot.id];
  setSelectedTimeSlots(newSlots);
};

const applyToStudy = async (
  selectedTimeSlots,
  dispatch,
  openModal,
  user,
  _id,
  title,
) => {
  const data = new FormData();
  data.append('participant', user);
  data.append('studyId', _id);
  data.append('studyTitle', title);
  data.append('timeSlots', JSON.stringify(selectedTimeSlots));
  const response = await fetch('/applyToStudy', {
    method: 'post',
    body: data,
  });
  const responseBody = await response.text();
  const { conflict, conflictIds, success, study } = JSON.parse(responseBody);

  if (conflict) {
    const conflictingTimeSlots = [];
    conflictIds.forEach((id) => {
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
