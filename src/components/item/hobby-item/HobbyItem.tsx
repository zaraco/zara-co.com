import React from "react";
import {Hobby} from "../../../store/profile/models_d";
import {Card} from "react-bootstrap";
import "./HobbyItem.scss";
import IconItem from "../icon-item/IconItem";

interface HobbyItemProps extends React.HTMLAttributes<HTMLDivElement> {
    hobby: Hobby;
}

const HobbyItem: React.FC<HobbyItemProps> = (props) => {
    return (
        <div className="hobby-item">
            <Card className="hobby-item-card">
                <Card.Body className="hobby-item-card-body">
                    <IconItem icon={props.hobby.icon} size="1x"/>
                        <div className="hobby-item-title">
                            {props?.hobby?.title}
                        </div>
                </Card.Body>
            </Card>
        </div>
)
}

export default HobbyItem;
