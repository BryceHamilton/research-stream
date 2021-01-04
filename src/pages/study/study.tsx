import React, { useState, useEffect, useCallback } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import StaticMap from './components/static-map';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar';
import styled from 'styled-components';
import { Container, Row } from '../../components/base/container';
import StudyModal from './components/study-modal';
import ApplicationSection from './components/application-section';
import {
  PurposeHeader,
  LabHeader,
  LocationHeader,
  WhoIsConductingHeader,
  BenefitHeader,
  CompensationHeader,
  InclusionHeader,
  ExclusionHeader,
} from './components/study-headers';
import { AppState } from '../../store';
import { UserState } from '../../store/user/reducer';

const StudyBlock: React.FunctionComponent<{ criteria: string }> = ({
  criteria,
}) => <StyledBlock>{criteria}</StyledBlock>;

const BottomBlock: React.FunctionComponent<{ criteria: string }> = ({
  criteria,
}) => <FullScreenBlock>{criteria}</FullScreenBlock>;

const Study: React.FunctionComponent = () => {
  const { user }: UserState = useSelector((state: AppState) => state.user);
  const { studyId } = useParams<{ studyId: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  const study = useSelector((state: AppState) =>
    state.studies.find((study) => study._id === studyId),
  );

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (!study) {
    return <Redirect to='/browse' />;
  }
  const {
    _id,
    title,
    purpose,
    lab,
    location: { lat, lng },
    whoIsConducting,
    benefits,
    compensation,
    inclusion,
    exclusion,
    expectations,
  } = study;

  return (
    <div>
      <Navbar />
      <TopPadding>
        <MajorHeader>Study Information</MajorHeader>
        <Row>
          <HalfDiv>
            <PurposeHeader />
            <StudyBlock criteria={purpose} />
            <LabHeader />
            <StudyBlock criteria={lab} />
            <LocationHeader />
            <StyledBlock>
              <StaticMap lat={lat} lng={lng} />
            </StyledBlock>
          </HalfDiv>
          <HalfDiv>
            <WhoIsConductingHeader />
            <StudyBlock criteria={whoIsConducting} />
            <BenefitHeader />
            <StudyBlock criteria={benefits} />
            <CompensationHeader />
            <StudyBlock criteria={compensation} />
          </HalfDiv>
        </Row>
        <hr style={{ marginTop: '180px' }} />
        <PaddedDiv>
          <MajorHeader>Inclusion/Exclusion Criteria</MajorHeader>
          <Row>
            <HalfDiv>
              <InclusionHeader />
              <div>
                <ol>
                  {inclusion.map((listItem) => (
                    <li>{listItem}</li>
                  ))}
                </ol>
              </div>
            </HalfDiv>
            <HalfDiv>
              <ExclusionHeader />
              <div>
                <ol>
                  {exclusion.map((listItem) => (
                    <li>{listItem}</li>
                  ))}
                </ol>
              </div>
            </HalfDiv>
          </Row>
        </PaddedDiv>
        <hr style={{ marginTop: '40px' }} />
        <PaddedDiv>
          <MajorHeader>Participant Expectations</MajorHeader>
          <Row>
            <HalfDiv>
              <BottomBlock criteria={expectations} />
            </HalfDiv>
          </Row>
          <PaddedDiv>
            <MajorHeader style={{ marginTop: '30px' }}>
              Interested in Participating?
            </MajorHeader>
            <ApplicationSection
              openModal={openModal}
              user={user}
              study={study}
            />
          </PaddedDiv>
        </PaddedDiv>
      </TopPadding>
      <StudyModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        _id={_id}
        user={user}
        title={title}
      />
    </div>
  );
};

export default Study;

const TopPadding = styled(Container)`
  padding-top: 148px;
`;

const StyledBlock = styled.div`
  color: #868e96 !important;
  margin-bottom: 1.5rem !important;
`;

const MajorHeader = styled.h2`
  color: #209bde !important;
  margin-bottom: 3rem !important;
`;

const HalfDiv = styled.div`
  flex: 0 0 50%;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
`;

const PaddedDiv = styled.div`
  padding: 1.5rem 0 !important;
`;

const FullScreenBlock = styled(StyledBlock)`
  width: 1050px;
`;
