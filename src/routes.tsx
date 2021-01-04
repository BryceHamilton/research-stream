import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BrowseStudies from './pages/browse-studies';
import LandingPage from './pages/landing-page';
import Study from './pages/study';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/browse' component={BrowseStudies} />
      <Route exact path='/study/:studyId' component={Study} />
    </Switch>
  );
};

export default AppRoutes;
