import React from "react";
import {useAppSelector} from "../../../store/hooks";
import profileSelectors from "../../../store/profile/profile-selectors";
import {Col, Row} from "react-bootstrap";
import "./Languages.scss";
import LanguageItem from "../../item/language-item/LanguageItem";

function Languages() {

    const languages = useAppSelector(profileSelectors.getLanguages);

    return (
        <div className="languages">
            <h3 className="languages-name">Languages</h3>
            <Row>
                {
                    languages?.map(item => (
                        <Col md={4}>
                            <LanguageItem language={item}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Languages;
