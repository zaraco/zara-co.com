import React from "react";
import {Col, Row} from "react-bootstrap";
import "./Certificates.scss";
import {useAppSelector} from "../../../store/hooks";
import profileSelectors from "../../../store/profile/profile-selectors";
import CertificateItem from "../../item/certificate/CertificateItem";

function Certificates() {

    const certificates = useAppSelector(profileSelectors.getCertificates);

    return (
        <div className="certificates">
            <h3 className="certificates-name">Certifications</h3>
            <Row>
                {
                    certificates?.map(certificate => (
                            <Col md={6}>
                                <CertificateItem certificate={certificate}/>
                            </Col>
                        )
                    )
                }
            </Row>
        </div>
    )
}

export default Certificates;
