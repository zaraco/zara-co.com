import React from "react";
import {Experience} from "../../../store/experience/models_d";
import {Badge, Card, Image} from "react-bootstrap";
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
                        <div className="experience-item-wrapper">
                        <h4 className="experience-item-title">
                            {props?.experience?.title}
                        </h4>
                        <div className="experience-item-location">
                            <FontAwesomeIcon className="experience-item-location-icon" icon={faMapMarkerAlt}/>
                            {props?.experience?.location}
                        </div>
                        </div>
                        <div className="experience-item-wrapper">
                            <div className="experience-item-company">
                                {props?.experience?.company}
                            </div>
                            <div className="experience-item-duration">
                                {props?.experience?.duration}
                            </div>
                        </div>
                        <div className="experience-item-technologies">
                            {props?.experience?.technologies?.map(item => (
                                <Badge className="experience-item-technology">
                                    {item}
                                </Badge>
                            ))}
                        </div>
                        <div className="experience-item-description">
                            {props?.experience?.description}
                        </div>
                        <div className="experience-item-urls">
                            {props?.experience?.urls.map(item => (
                                <a href={item} className="experience-item-urls-url">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ExperienceItem;
