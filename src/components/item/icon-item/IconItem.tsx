import React from "react";
import "./IconItem.scss";
import {Icon} from "../../../store/models_d";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faFilm, faMusic, faPaintBrush, faSwimmer} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface IconItemProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: Icon,
    size: SizeProp
}

const IconItem: React.FC<IconItemProps> = (props) => {

    let faIcon;
    switch (props.icon) {
        case Icon.GITHUB:
            faIcon = faGithub;
            break
        case Icon.LINKEDIN:
            faIcon = faLinkedin;
            break
        case Icon.MEDIUM:
            faIcon = faMedium;
            break
        case Icon.MUSIC:
            faIcon = faMusic
            break
        case Icon.BOOK:
            faIcon = faBook
            break
        case Icon.MOVIE:
            faIcon = faFilm
            break
        case Icon.PAINTING:
            faIcon = faPaintBrush
            break
        case Icon.SPORT:
            faIcon = faSwimmer
            break
    }
    return(
        <div className="icon">
            <FontAwesomeIcon className="icon-item" icon={faIcon} size={props.size}/>
        </div>
    )
}

export default IconItem;
