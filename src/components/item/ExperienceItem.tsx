import React from "react";
import {Experience} from "../../store/experience/models_d";
import {Badge, Card, Col, Image, Row} from "react-bootstrap";
import './ExperienceItem.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarker, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
    experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
    return (
        <div className="experience-item">
            <Card className="experience-item-card">
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <Image className="experience-item-image" src={props?.experience?.image} roundedCircle/>
                        </Col>
                        <Col xs={10}>
                            <h4>
                                {props?.experience?.title}
                            </h4>
                            <div>
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
                                        <FontAwesomeIcon className="experience-item-location-icon" icon={faMapMarkerAlt} />
                                        {props?.experience?.location}
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        {props?.experience?.duration}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExperienceItem;
