import React from "react";
import {Hobby} from "../../../store/profile/models_d";
import {Card, Col, Row} from "react-bootstrap";
import "./HobbyItem.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

interface HobbyItemProps extends React.HTMLAttributes<HTMLDivElement> {
    hobby: Hobby;
}

const HobbyItem: React.FC<HobbyItemProps> = (props) => {
    return (
        <div className="hobby-item">
            <Card className="hobby-item-card">
                <Card.Body className="hobby-item-card-body">
                        <FontAwesomeIcon className="hobby-item-icon" icon={faMapMarkerAlt}/>
                    <div className="hobby-item-title">
                        {props?.hobby?.title}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HobbyItem;
