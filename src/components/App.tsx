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
import Certificates from "./layout/certificates/Certificates";
import portfolioActions from "../store/portfolio/portfolio-actions";
import Portfolio from "./layout/portfolio/Portfolio";
import Hobbies from "./layout/hobbies/Hobbies";
import Languages from "./layout/languages/Languages";
import Education from "./layout/education/Education";
import ReactGA from 'react-ga';
import config from "../store/config";


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
        ReactGA.pageview(window.location.pathname)
        dispatch(profileActions.fetchProfile());
        dispatch(experienceActions.fetchExperience());
        dispatch(skillsActions.fetchAction());
        dispatch(portfolioActions.fetchPortfolio());
    }, [dispatch])

    return (
        <div className="app">
            <Container className="app-container">
                <Header/>
                <Skills/>
                <Experience/>
                <Publications/>
                <Certificates/>
                <Portfolio/>
                <Languages/>
                <Hobbies/>
                <Education/>
            </Container>
        </div>
    );
}

export default App;
