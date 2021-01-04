import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { addSelectedTime, removeSelectedTime } from '../studyUtils.js';

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './StudyCalendar.css';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

const StudyCalendar = ({
  timeSlots,
  selectedTimeSlots,
  setSelectedTimeSlots,
}) => {
  const [events, setEvents] = useState([]);
  const [numOfSelectedSlots, setNumOfSelectedSlots] = useState(0);
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    let selectedTimesCounter = 0;
    let selectedEvents = {};
    let events = [];
    if (timeSlots.length) {
      events = timeSlots.map((event) => {
        if (Object.keys(event.applicants).includes(user)) {
          selectedTimesCounter++;
          selectedEvents[event.id] = event;
          return {
            ...event,
            selected: true,
            start: new Date(event.start),
            end: new Date(event.end),
          };
        }

        if (event.confirmed.includes(user)) {
          return {
            ...event,
            selected: false,
            userConfirmed: true,
            start: new Date(event.start),
            end: new Date(event.end),
          };
        }
        return {
          ...event,
          selected: false,
          start: new Date(event.start),
          end: new Date(event.end),
        };
      });
    }
    setSelectedTimeSlots(selectedEvents);
    setEvents(events);
    setNumOfSelectedSlots(selectedTimesCounter);
  }, [setSelectedTimeSlots, timeSlots, user]);

  const onSelectEvent = (eventClicked) => {
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

  const eventStyleSetter = ({ userConfirmed, selected }) => ({
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
        onSelectEvent={onSelectEvent}
        eventPropGetter={eventStyleSetter}
        draggableAccessor={(event) => false}
      />
    </div>
  );
};

export default StudyCalendar;
