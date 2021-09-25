import React from "react";
import {Publication} from "../../../store/profile/models_d";
import {Card} from "react-bootstrap";
import "./publicationItem.scss";

interface PublicationItemProps extends React.HTMLAttributes<HTMLDivElement> {
    publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
    return (
        <div className="publication-item">
            <Card className="publication-item-card">
                <Card.Body>
                    <h4 className="publication-item-title">
                        {props.publication.title}
                    </h4>
                    <div className="publication-item-journal">
                        {props.publication.journal}
                    </div>
                    <div className="publication-item-link">
                        <a href={props.publication.link} target="_blank" rel="noreferrer">{props.publication.link}</a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PublicationItem;
