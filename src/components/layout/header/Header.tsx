import React from 'react';
import profileSelectors from "../../../store/profile/profile-selectors";
import {useAppSelector} from "../../../store/hooks";
import {Card, Col, Row, Image} from "react-bootstrap";
import './Header.scss';

function Header() {

    const about = useAppSelector(profileSelectors.getAbout)

    return (
        <div className="header">
            <Row>
                <Col className="header-col">
                    <Image className="header-image" src={about?.image} roundedCircle/>
                    <Card className="header-card">
                        <Card.Body>
                            <h1 className="header-card-name">{about?.name} {about?.surname}</h1>
                            <h2 className="header-card-title">{about?.title}</h2>
                        </Card.Body>
                    </Card>
                    <p className="header-description">{about?.description}</p>
                </Col>
            </Row>
        </div>
    );
}

export default Header;
