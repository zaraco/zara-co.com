import React from "react";
import './Social.scss';
import SocialItem from "../../item/social-item/SocialItem";
import {useAppSelector} from "../../../store/hooks";
import profileSelectors from "../../../store/profile/profile-selectors";

function Social() {

    const social = useAppSelector(profileSelectors.getSocial)

    return(
            <div className="social">
                {
                    social?.map(item => (
                        <SocialItem social={item}/>
                    ))
                }
            </div>
    )
}

export default Social;
