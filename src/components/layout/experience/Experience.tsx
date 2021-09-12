import React from 'react';
import './Experience.scss';
import {Col, Row} from "react-bootstrap";
import {useAppSelector} from "../../../store/hooks";
import experienceSelectors from "../../../store/experience/experience-selectors";
import ExperienceItem from "../../item/experience-item/ExperienceItem";

function Experience() {

    const experience = useAppSelector(experienceSelectors.getExperience);

    return (
        <div className="experience">
            <h3 className="experience-name">Experience</h3>
            <Row>
                {
                    experience?.map(item => (
                        <Col md={6}>
                            <ExperienceItem experience={item}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Experience;
