import React from "react";
import './SocialItem.scss';
import {Social} from "../../../store/profile/models_d";

interface SocialItemProps extends React.HTMLAttributes<HTMLDivElement> {
    social: Social
}

const SocialItem: React.FC<SocialItemProps> = (props) => {
    return(
        <div>
            <a href={props.social.link}>{props.social.icon}</a>
        </div>
    )
}

export default SocialItem;
