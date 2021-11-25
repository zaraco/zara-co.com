import React from "react";
import './SocialItem.scss';
import {Social} from "../../../store/profile/models_d";
import IconItem from "../icon-item/IconItem";

interface SocialItemProps extends React.HTMLAttributes<HTMLDivElement> {
    social: Social
}

const SocialItem: React.FC<SocialItemProps> = (props) => {
    return(
        <div className="social-item">
            <a href={props.social.link} target="_blank" rel="noreferrer">
                <div className="social-item-link">{props.social.link}</div>
                <IconItem icon={props.social.icon} size="lg"/>
            </a>
        </div>
    )
}

export default SocialItem;
