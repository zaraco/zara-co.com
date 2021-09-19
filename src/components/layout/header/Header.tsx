import React from 'react';
import profileSelectors from "../../../store/profile/profile-selectors";
import {useAppSelector} from "../../../store/hooks";
import {Card, Col, Row, Image} from "react-bootstrap";
import './Header.scss';
import Social from "../social/Social";

function Header() {

    const about = useAppSelector(profileSelectors.getAbout)

    return (
        <div className="header">
            <Row>
                <Col className="header-col-avatar" md={6}>
                    <Image className="header-image" src={about?.image} roundedCircle/>
                    <Card className="header-card">
                        <Card.Body>
                            <h1 className="header-card-name">{about?.name} {about?.surname}</h1>
                            <h2 className="header-card-title">{about?.title}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="header-col-info">
                    <div className="header-social">
                        <Social/>
                    </div>
                    <div>
                        {about?.email}
                    </div>
                    <div className="header-website">
                        <a href={about?.website}>{about?.website}</a>
                    </div>
                </Col>
                <Col md={12}>
                    <p className="header-description">{about?.description}</p>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
