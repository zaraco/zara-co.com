import React from "react";
import {Card} from "react-bootstrap";
import "./EducationItem.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {Education} from "../../../store/profile/models_d";

interface EducationItemProps extends React.HTMLAttributes<HTMLDivElement> {
    education: Education;
}

const EducationItem: React.FC<EducationItemProps> = (props) => {
    return (
        <div className="education-item">
            <Card className="education-item-card">
                <Card.Body className="education-item-card-body">
                    <FontAwesomeIcon className="education-item-icon" icon={faGraduationCap}/>
                    <div className="education-item-title">
                        {props?.education?.title}
                    </div>
                    <div className="education-item-level">
                        {props?.education?.level}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EducationItem;
