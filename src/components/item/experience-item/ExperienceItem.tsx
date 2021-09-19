import React from "react";
import {Experience} from "../../../store/experience/models_d";
import {Badge, Card, Col, Image, Row} from "react-bootstrap";
import './ExperienceItem.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
    experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
    return (
        <div className="experience-item">
            <Card className="experience-item-card">
                <Card.Body className="experience-item-card-body">
                    <Image className="experience-item-image" src={props?.experience?.image} roundedCircle/>
                    <div className="experience-item-info">
                        <h4 className="experience-item-title">
                            {props?.experience?.title}
                        </h4>
                        <div className="experience-item-company">
                            {props?.experience?.company}
                        </div>
                        <div className="experience-item-technologies">
                            {props?.experience?.technologies?.map(item => (
                                <Badge className="experience-item-technology">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                        <Row>
                            <Col>
                                <div className="experience-item-location">
                                    <FontAwesomeIcon className="experience-item-location-icon" icon={faMapMarkerAlt}/>
                                    {props?.experience?.location}
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    {props?.experience?.duration}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExperienceItem;
