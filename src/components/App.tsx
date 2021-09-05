import React, {useEffect} from 'react';
import './App.scss';
import {useAppDispatch} from "../store/hooks";
import profileActions from "../store/profile/profile-actions";
import experienceActions from "../store/experience/experience-actions";


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileActions.fetchProfile());
    dispatch(experienceActions.fetchExperience());
  },[dispatch])

  return (
    <div className="app">
    </div>
  );
}

export default App;
