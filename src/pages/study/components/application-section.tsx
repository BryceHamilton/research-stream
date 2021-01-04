import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Login from '../../../components/login';
import { applyToStudy } from '../studyUtils';
import StudyCalendar from './study-calendar';
import PrimaryButton from '../../../components/primary-button';

const ApplicationSection: React.FunctionComponent<{
  openModal: () => void;
  user?: User;
  study: Study;
}> = ({ openModal, user, study: { _id, title, timeSlots } }) => {
  const [selectedTimeSlots, setSelectedTimeSlots] = useState({});
  const dispatch = useDispatch();

  const handleApplyClick = () =>
    applyToStudy(selectedTimeSlots, dispatch, openModal, user, _id, title);

  return user ? (
    <div>
      <MutedTextMarginBottom>
        <MarginBottom>Select up to 3 time slots and click Apply</MarginBottom>
        <StudyCalendar
          timeSlots={timeSlots}
          selectedTimeSlots={selectedTimeSlots}
          setSelectedTimeSlots={setSelectedTimeSlots}
        />
      </MutedTextMarginBottom>
      <MarginTop>
        <PrimaryButton to='' onClick={handleApplyClick}>
          Apply
        </PrimaryButton>
        <PrimaryButton to='/browse' style={{ marginLeft: '5px' }}>
          Back to Browse
        </PrimaryButton>
      </MarginTop>
    </div>
  ) : (
    <div>
      <Login custom='Login with Google' />
      <PrimaryButton to='/browse' style={{ marginLeft: '5px' }}>
        Back to Browse
      </PrimaryButton>
    </div>
  );
};

export default ApplicationSection;

const MarginBottom = styled.div`
  margin-bottom: 1.5rem;
`;
const MutedTextMarginBottom = styled(MarginBottom)`
  color: #868e96 !important;
`;
const MarginTop = styled.div`
  margin-top: 4rem;
`;
