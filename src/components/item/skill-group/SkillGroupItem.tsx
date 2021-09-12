import React from "react";
import {SkillGroup} from "../../../store/skills/models_d";
import {Badge, Card} from "react-bootstrap";
import "./SkillGroupItem.scss";

interface SkillGroupItemProps extends React.HTMLAttributes<HTMLDivElement> {
    skillGroup: SkillGroup;
}

const SkillGroupItem: React.FC<SkillGroupItemProps> = (props) => {
    return (
        <div className="skill-group">
            <Card className="skill-group-card">
                <Card.Body>
                    <h4 className="skill-group-title">
                        {props?.skillGroup?.title}
                    </h4>
                    {
                        props?.skillGroup?.skills?.map(skill => (
                            <Badge className="skill-group-skill">
                                {skill?.name}
                            </Badge>
                        ))
                    }
                </Card.Body>
            </Card>
        </div>

    )

}

export default SkillGroupItem;
