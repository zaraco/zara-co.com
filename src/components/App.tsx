import React, {useEffect} from 'react';
import './App.scss';
import {useAppDispatch} from "../store/hooks";
import profileActions from "../store/profile/profile-actions";
import experienceActions from "../store/experience/experience-actions";
import skillsActions from "../store/skills/skills-actions";
import Header from "./layout/header/Header";
import Experience from "./layout/experience/Experience";
import {Container} from "react-bootstrap";
import Skills from "./layout/skills/Skills";
import Publications from "./layout/publications/publications";


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileActions.fetchProfile());
    dispatch(experienceActions.fetchExperience());
    dispatch(skillsActions.fetchAction());
  },[dispatch])

  return (
    <div className="app">
      <Container>
        <Header/>
        <Skills/>
        <Experience/>
        <Publications/>
      </Container>
    </div>
  );
}

export default App;
