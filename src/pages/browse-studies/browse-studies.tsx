import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StudyCard from '../../components/study-card';
import Navbar from '../../components/navbar';
import { Container } from '../../components/base/container';
import { apiCall } from '../../api';
// import Footer from './Footer.jsx';

const Browse = (props: any) => {
  const [studies, setStudies] = useState<[Study]>();

  useEffect(() => {
    fetch(apiCall('/study/study_list'))
      .then((res) => res.json())
      .then(setStudies);
  }, []);

  useEffect(() => window.scroll(0, 0), []);

  return (
    <div>
      <Navbar />
      <SectionHeader>
        <BrowseHeader>Browse</BrowseHeader>
        <SubHeading>Search For Studies</SubHeading>
      </SectionHeader>
      <PaddedSection>
        <Container>
          <GridBox>
            {studies?.map((study: any) => (
              <StudyCard study={study} />
            ))}
          </GridBox>
        </Container>
      </PaddedSection>
      {/* <Footer onLandingPage={false} /> */}
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

const GridBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 25px;
`;

export default Browse;
