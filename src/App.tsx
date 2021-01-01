import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { apiCall } from './api';
import AppRoutes from './routes';
import { receiveStudies } from './store/actions';
import GlobalStyles from './components/global-styles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStudies = async () => {
      const res = await fetch(apiCall('/study/study_list'));
      const studies = await res.json();
      dispatch(receiveStudies(studies));
    };
    fetchStudies();
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
