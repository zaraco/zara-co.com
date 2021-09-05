import React, {useEffect} from 'react';
import './App.scss';
import {useAppDispatch} from "../store/hooks";
import profileActions from "../store/profile/profile-actions";


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileActions.fetchProfile());
  },[dispatch])

  return (
    <div className="app">
    </div>
  );
}

export default App;
