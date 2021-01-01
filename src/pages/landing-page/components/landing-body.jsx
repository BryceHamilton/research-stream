import React from 'react';
import HomeSection from './home-section.jsx';
import NewlyAdded from './newly-added.jsx';
// import Footer from "../Footer.jsx";

const LandingPageBody = ({ openModal, closeModal }) => {
  return (
    <div style={{ marginTop: '75px' }}>
      <HomeSection />
      <NewlyAdded openModal={openModal} closeModal={closeModal} />
      {/* <Footer onLandingPage /> */}
    </div>
  );
};

export default LandingPageBody;
