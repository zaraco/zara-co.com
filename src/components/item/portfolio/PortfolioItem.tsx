import React from "react";
import './PortfolioItem.scss';
import {Badge, Button, Card} from "react-bootstrap";
import {Portfolio} from "../../../store/portfolio/models_d";

interface PortfolioItemProps extends React.HTMLAttributes<HTMLDivElement> {
    portfolio: Portfolio;
}

const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
    return (
        <div className="portfolio-item">
            <Card className="portfolio-item-card">
                <Card.Img className="portfolio-item-card-image" variant="top" src={props?.portfolio?.image}/>
                <Card.Body className="portfolio-item-card-body">
                    <Card.Title className="portfolio-item-title">{props?.portfolio?.title}</Card.Title>
                    <Card.Text className="portfolio-item-tags">
                        {props?.portfolio?.tags.map(tag => (
                            <Badge className="portfolio-item-tag">
                                {tag}
                            </Badge>
                        ))}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="portfolio-item-btn d-grid gap-2">
                        <Button variant="secondary"  size="lg" href={props?.portfolio?.url} target="_blank" rel="noreferrer">{props?.portfolio?.buttonText}</Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default PortfolioItem;
