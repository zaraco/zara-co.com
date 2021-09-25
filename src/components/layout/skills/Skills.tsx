import React from "react";
import {useAppSelector} from "../../../store/hooks";
import skillsSelectors from "../../../store/skills/skills-selectors";
import SkillGroupItem from "../../item/skill-group/SkillGroupItem";
import {Col, Row} from "react-bootstrap";
import "./Skills.scss";

function Skills() {

    const skillGroups = useAppSelector(skillsSelectors.getSkillGroups);
    return (
        <div className="skills">
            <h3 className="skills-name">Skills</h3>
            <Row>
                     {
                        skillGroups?.map(skillGroup => (
                            <Col md={6} lg={4}>
                            <SkillGroupItem skillGroup={skillGroup}/>
                            </Col>
                        ))
                    }
            </Row>
         </div>
    )
}

export default Skills;
