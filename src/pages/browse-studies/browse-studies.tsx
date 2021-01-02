import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import StudyCard from '../../components/study-card';
import Navbar from '../../components/navbar';
import { Container } from '../../components/base/container';
import { RootState } from '../../store/types';
import GridBox from '../../components/base/grid-box';

const Browse = () => {
  const studies: Study[] = useSelector((state: RootState) => state.studies);
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div>
      <Navbar redirect='/' />
      <SectionHeader>
        <BrowseHeader>Browse</BrowseHeader>
        <SubHeading>Search For Studies</SubHeading>
      </SectionHeader>
      <PaddedSection>
        <Container>
          <GridBox>
            {(studies as Study[])?.map((study: Study) => (
              <StudyCard study={study} />
            ))}
          </GridBox>
        </Container>
      </PaddedSection>
    </div>
  );
};

const SectionHeader = styled.section`
  background-color: #209bde;
  margin-top: 72px;
  text-align: center !important;
  color: #fff !important;
  padding: 8rem 1rem;
  margin-right: -1rem;
  margin-left: -1rem;
`;

const BrowseHeader = styled.h1`
  color: white;
  font-size: 4.5rem;
  line-height: 1.3;
  font-weight: 700 !important;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

const SubHeading = styled.p`
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 1.25rem;
`;

const PaddedSection = styled.section`
  padding: 6rem 0;
`;

export default Browse;
