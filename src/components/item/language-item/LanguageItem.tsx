import React from "react";
import {Card} from "react-bootstrap";
import "./LanguageItem.scss";
import {Language} from "../../../store/profile/models_d";

interface LanguageItemProps extends React.HTMLAttributes<HTMLDivElement> {
    language: Language;
}

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
    return (
        <div className="language-item">
            <Card className="language-item-card">
                <Card.Body className="language-item-card-body">
                    <div className="language-item-title">
                        {props?.language.title}
                    </div>
                    <div className="language-item-level">
                        {props?.language.level}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LanguageItem;
