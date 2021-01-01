import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BrowseStudies from './pages/browse-studies';
import LandingPage from './pages/landing-page';

const AppRoutes = () => (
  <Switch>
    <Route exact path='/'>
      <LandingPage />
    </Route>
    <Route path='/browse'>
      <BrowseStudies />
    </Route>
    <Route path='/items/:itemId'></Route>
  </Switch>
);

export default AppRoutes;
