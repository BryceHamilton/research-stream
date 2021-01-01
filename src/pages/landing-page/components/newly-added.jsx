import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from '../../../components/base/container';
import { useSelector } from 'react-redux';
import Card from '../../../components/study-card';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const GraySection = styled.section`
  padding: 6rem 0;
  margin-top: 175px;
  background-color: #f8f9fa;
`;

const HeaderRow = styled(Row)`
  margin-bottom: 3rem;
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

const NewlyAdded = () => {
  const studies = useSelector((state) => state.studies);
  return (
    <GraySection>
      <Container>
        <HeaderRow>
          <PaddedDiv>
            <SubTitleSecondary>Newly Added</SubTitleSecondary>
            <h2>Studies</h2>
          </PaddedDiv>
          <SeeAllStudies>
            <Link to='/browse' className='text-muted text-sm'>
              See all studies
              <i className='fas fa-angle-double-right ml-2' />
            </Link>
          </SeeAllStudies>
        </HeaderRow>
        <Row>
          {studies.length > 0 &&
            studies.map((study) => <Card study={study} fadeUp />)}
        </Row>
      </Container>
    </GraySection>
  );
};

export default NewlyAdded;
