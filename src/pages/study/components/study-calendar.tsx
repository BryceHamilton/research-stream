import React, { useState, useEffect, SyntheticEvent } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { SelectedTimeSlots, TimeSlot } from '../studyUtils';
import { useSelector } from 'react-redux';
import { addSelectedTime, removeSelectedTime } from '../studyUtils';

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { AppState } from '../../../store';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop<any, any>(Calendar);

const StudyCalendar: React.FunctionComponent<{
  timeSlots: TimeSlot[];
  selectedTimeSlots: SelectedTimeSlots;
  setSelectedTimeSlots: (newSlots: SelectedTimeSlots) => void;
}> = ({ timeSlots, selectedTimeSlots, setSelectedTimeSlots }) => {
  const [events, setEvents] = useState<TimeSlot[]>([]);
  const [numOfSelectedSlots, setNumOfSelectedSlots] = useState<number>(0);
  const user = useSelector((state: AppState) => state.user.user);

  useEffect(() => {
    let selectedTimesCounter = 0;
    let selectedEvents: SelectedTimeSlots = {};
    let events: TimeSlot[] = [];
    if (timeSlots.length) {
      events = timeSlots.map((event: TimeSlot) => {
        if (Object.keys(event.applicants).includes(user?.googleId || '')) {
          selectedTimesCounter++;
          selectedEvents[event.id] = event;
          return {
            ...event,
            selected: true,
            start: new Date(event.start || ''),
            end: new Date(event.end || ''),
          };
        }

        if (event.confirmed.includes(user?.googleId || '')) {
          return {
            ...event,
            selected: false,
            userConfirmed: true,
            start: new Date(event.start || ''),
            end: new Date(event.end || ''),
          };
        }
        return {
          ...event,
          selected: false,
          start: new Date(event.start || ''),
          end: new Date(event.end || ''),
        };
      });
    }
    setSelectedTimeSlots(selectedEvents);
    setEvents(events);
    setNumOfSelectedSlots(selectedTimesCounter);
  }, [setSelectedTimeSlots, timeSlots, user]);

  const onSelectEvent: (eventClicked: TimeSlot, e: SyntheticEvent) => void = (
    eventClicked,
    e,
  ) => {
    console.log('event selected', eventClicked);
    const newEvents = [...events];
    const idx = newEvents.indexOf(eventClicked);

    if (eventClicked.selected) {
      newEvents[idx].selected = false;
      removeSelectedTime(eventClicked, selectedTimeSlots, setSelectedTimeSlots);
      setEvents(newEvents);
      setNumOfSelectedSlots(numOfSelectedSlots - 1);
      return;
    }

    if (numOfSelectedSlots === 3 || eventClicked.userConfirmed) {
      return;
    }

    newEvents[idx].selected = true;
    addSelectedTime(eventClicked, selectedTimeSlots, setSelectedTimeSlots);
    setEvents(newEvents);
    setNumOfSelectedSlots(numOfSelectedSlots + 1);
  };

  const eventStyleSetter: (event: TimeSlot) => object = ({
    userConfirmed,
    selected,
  }) => ({
    className: 'eventButton',
    style: {
      backgroundColor: userConfirmed
        ? '#2946f7'
        : selected
        ? '#209bde'
        : '#8fceef',
    },
  });

  return (
    <div className='App'>
      <DragAndDropCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView='month'
        events={events}
        style={{ height: '70vh' }}
        onSelectEvent={(obj: object, e: SyntheticEvent) =>
          onSelectEvent(obj as TimeSlot, e)
        }
        eventPropGetter={(obj: object) => eventStyleSetter(obj as TimeSlot)}
        draggableAccessor={(event) => false}
      />
    </div>
  );
};

export default StudyCalendar;
