import React from "react";
import {useAppSelector} from "../../../store/hooks";
import profileSelectors from "../../../store/profile/profile-selectors";
import {Col, Row} from "react-bootstrap";
import PublicationItem from "../../item/publication/publicationItem";
import "./publications.scss";

function Publications() {

    const publications = useAppSelector(profileSelectors.getPublications);

    return (
        <div className="publications">
            <h3 className="publications-name">Publications</h3>
            <Row>
                    {
                        publications?.map(publication => (
                            <Col md={6}>
                                <PublicationItem publication={publication}/>
                            </Col>
                        ))
                    }
            </Row>
        </div>
    )
}

export default Publications;
