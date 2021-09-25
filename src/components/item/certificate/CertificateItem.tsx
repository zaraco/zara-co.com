import React from "react";
import {Certificate} from "../../../store/profile/models_d";
import {Card, Col, Image, Row} from "react-bootstrap";
import './CertificateItem.scss';


interface CertificateItemProps extends React.HTMLAttributes<HTMLDivElement> {
    certificate: Certificate,
}

const CertificateItem: React.FC<CertificateItemProps> = (props) => {
    return (
        <div className="certificate-item">
            <Card className="certificate-item-card">
                <Card.Body className="certificate-item-card-body">
                    <Image className="certificate-item-image" src={props?.certificate?.image} roundedCircle/>
                    <div className="certificate-item-info">
                        <h4 className="certificate-item-title">
                            {props.certificate.title}
                        </h4>
                        <div className="certificate-item-company">
                            {props.certificate.company}
                        </div>
                        <div className="certificate-item-date">
                            {props.certificate.date}
                        </div>
                        <div className="certificate-item-link">
                            {props.certificate.link}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CertificateItem;
