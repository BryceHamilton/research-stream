import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { trimString } from '../../utils/strings';

const StudyCard = (props: any) => {
  const {
    study: { title, datePosted, _id, purpose },
    isDraft,
    deleteDraft,
    researcher,
    setCalendar,
  } = props;

  const dateFormatted = moment(datePosted).format('MMMM Do YYYY');
  return (
    <CardContainer>
      <CardBody>
        <LocationLink to=''>Kingston, ON</LocationLink>
        <h5>
          {researcher ? (
            <StudyTitle to='' onClick={setCalendar}>
              {title}
            </StudyTitle>
          ) : (
            <StudyTitle to={`study/${_id}`}>{title}</StudyTitle>
          )}
        </h5>
        <DatePosted>
          <i className='far fa-clock mr-2' />
          {`Added ${dateFormatted}`}
        </DatePosted>
        <StudyPurpose>{`${trimString(purpose)} ...`}</StudyPurpose>
        <LearnMore to={`study/${_id}`}>
          {researcher ? 'Edit Study' : 'Learn More'}
          <i className='fa fa-long-arrow-alt-right ml-2' />
        </LearnMore>
        {isDraft && <button onClick={deleteDraft(_id)}>Delete Draft</button>}
      </CardBody>
    </CardContainer>
  );
};

const CardContainer = styled.div``;

const CardBody = styled.div`
  background-color: #fff;
  border: 0 !important;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 0.4rem;
  padding: 1.25rem;
  height: 340px;
`;

const LocationLink = styled(Link)`
  cursor: default;
  letter-spacing: 0.2em;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #868e96 !important;
`;

const StudyTitle = styled(Link)`
  color: #343a40 !important;
  margin-top: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const DatePosted = styled.p`
  color: #adb5bd;
  font-size: 0.875rem;
  margin-top: 1rem !important;
`;

const StudyPurpose = styled.p`
  font-size: 0.875rem;
  color: #868e96 !important;
  margin-bottom: 0.5rem !important;
`;

const LearnMore = styled(Link)`
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: bold;
  padding-left: 0 !important;
  color: #209bde;
  text-decoration: none;
  display: inline-block;
  user-select: none;
  padding: 0.525rem 0.75rem;
  font-size: 0.8rem;
  padding: 0.525rem 0.75rem;
  font-size: 0.8rem;
`;

export default StudyCard;
