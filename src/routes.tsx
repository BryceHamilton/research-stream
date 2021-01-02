import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import BrowseStudies from './pages/browse-studies';
import LandingPage from './pages/landing-page';
import { AppState } from './store';

const AppRoutes = () => {
  const { isAuthenticated } = useSelector((state: AppState) => state.user);
  return (
    <Switch>
      <Route exact path='/'>
        {isAuthenticated ? <Redirect to='/browse' /> : <LandingPage />}
      </Route>
      <Route path='/browse'>
        <BrowseStudies />
      </Route>
      <Route path='/studys/:studyId'></Route>
    </Switch>
  );
};

export default AppRoutes;
