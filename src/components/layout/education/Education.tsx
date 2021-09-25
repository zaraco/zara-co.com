import React from "react";
import {useAppSelector} from "../../../store/hooks";
import profileSelectors from "../../../store/profile/profile-selectors";
import {Col, Row} from "react-bootstrap";
import "./Education.scss";
import EducationItem from "../../item/education-item/EducationItem";

function Education() {

    const education = useAppSelector(profileSelectors.getEducation);

    return (
        <div className="education">
            <h3 className="education-name">Education</h3>
            <Row>
                {
                    education?.map(item => (
                        <Col md={6} lg={4}>
                            <EducationItem education={item}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Education;
