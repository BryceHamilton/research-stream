import React, { useState, useEffect } from 'react';
import { apiCall } from './api';
import GoogleButton from './components/google-button';

const TestLogin = () => {
  const [studies, setStudies] = useState<[Study]>();

  useEffect(() => {
    fetch(apiCall('/study/study_list'))
      .then((res) => res.json())
      .then(setStudies);
  }, []);

  return (
    <div>
      {'All Studies'}
      {studies?.map((study) => (
        <pre key={study._id}>{JSON.stringify(study)}</pre>
      ))}
      <GoogleButton />
    </div>
  );
};

export default TestLogin;
