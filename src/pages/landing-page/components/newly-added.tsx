import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from '../../../components/base/container';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AOS from 'aos';
import { RootState } from '../../../store/types';
import StudyCard from '../../../components/study-card';
import GridBox from '../../../components/base/grid-box';
AOS.init();

const NewlyAdded = () => {
  const studies: Study[] | [] = useSelector((state: RootState) =>
    state.studies.slice(0, 3),
  );
  return (
    <GraySection>
      <Container>
        <HeaderRow>
          <PaddedDiv>
            <SubTitleSecondary>Newly Added</SubTitleSecondary>
            <h2>Studies</h2>
          </PaddedDiv>
          <SeeAllStudies>
            <UnderlinedLink to='/browse' className='text-muted text-sm'>
              See all studies
              <i className='fas fa-angle-double-right ml-2' />
            </UnderlinedLink>
          </SeeAllStudies>
        </HeaderRow>
        <GridBox>
          {(studies as Study[]).map((study: Study) => (
            <StudyCard study={study} fadeUp />
          ))}
        </GridBox>
      </Container>
    </GraySection>
  );
};

const GraySection = styled.section`
  padding: 1rem 0;
  margin-top: 50px;
  background-color: #f8f9fa;
`;

const HeaderRow = styled(Row)`
  margin-bottom: 1.5rem;
  justify-content: space-between;
`;

const PaddedDiv = styled.div`
  padding-right: 15px;
  padding-left: 15px;
`;

const SubTitleSecondary = styled.p`
  margin-bottom: 0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #868e96;
  font-weight: bold;
  color: #e83e8c;
`;

const SeeAllStudies = styled(PaddedDiv)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UnderlinedLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export default NewlyAdded;
