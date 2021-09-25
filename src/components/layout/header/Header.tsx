import React from 'react';
import profileSelectors from "../../../store/profile/profile-selectors";
import {useAppSelector} from "../../../store/hooks";
import {Card, Col, Row, Image, Button} from "react-bootstrap";
import './Header.scss';
import Social from "../social/Social";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faPrint} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function Header() {

    const about = useAppSelector(profileSelectors.getAbout)

    return (
        <div className="header">
            <Row>
                <Col className="header-col-avatar" md={8} lg={6}>
                    <Image className="header-image" src={about?.image} roundedCircle/>
                    <Card className="header-card">
                        <Card.Body>
                            <h1 className="header-card-name">{about?.name} {about?.surname}</h1>
                            <h2 className="header-card-title">{about?.title}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} lg={6} className="header-col-info">
                    <div className="header-social">
                        <Social/>
                    </div>
                    <div>
                        {about?.email}
                    </div>
                    <div className="header-website">
                        <a href={about?.website}>{about?.website}</a>
                    </div>
                    <div className="header-location">
                        <FontAwesomeIcon className="header-location-icon" icon={faMapMarkerAlt} />
                        {about?.location}
                    </div>
                </Col>
                <Col md={12}>
                    <p className="header-description">{about?.description}</p>
                    <div className="header-buttons">
                        <Button className="header-button" variant="secondary" href={about?.source} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className="header-button-icon" icon={faGithub} />
                            View Source
                        </Button>
                        <Button className="header-button header-button-print" onClick={() => {window.print();}}>
                            <FontAwesomeIcon className="header-button-icon" icon={faPrint} />
                            Print
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
