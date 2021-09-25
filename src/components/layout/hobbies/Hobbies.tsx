import React from "react";
import {useAppSelector} from "../../../store/hooks";
import profileSelectors from "../../../store/profile/profile-selectors";
import {Col, Row} from "react-bootstrap";
import "./Hobbies.scss";
import HobbyItem from "../../item/hobby-item/HobbyItem";

function Hobbies() {

    const hobbies = useAppSelector(profileSelectors.getHobbies);

    return (
        <div className="hobbies">
            <h3 className="hobbies-name">Hobbies</h3>
            <Row>
                {
                    hobbies?.map(hobby => (
                        <Col md={4} lg={3}>
                            <HobbyItem hobby={hobby}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Hobbies;
