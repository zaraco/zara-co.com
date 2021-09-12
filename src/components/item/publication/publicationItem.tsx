import React from "react";
import {Publication} from "../../../store/profile/models_d";
import {Card, Col, Image, Row} from "react-bootstrap";
import "./publicationItem.scss";

interface PublicationItemProps extends React.HTMLAttributes<HTMLDivElement> {
    publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
    return (
        <div className="publication-item">
            <Card className="publication-item-card">
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <Image className="publication-item-image" src={props?.publication?.imag} roundedCircle/>
                        </Col>
                        <Col xs={10}>
                            <h4 className="publication-item-title">
                                {props.publication.title}
                            </h4>
                            <div className="publication-item-journal">
                                {props.publication.journal}
                            </div>
                            <div className="publication-item-link">
                                {props.publication.link}
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PublicationItem;
