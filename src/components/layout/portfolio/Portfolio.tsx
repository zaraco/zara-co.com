import React from "react";
import "./Portfolio.scss";
import {Col, Row} from "react-bootstrap";
import {useAppSelector} from "../../../store/hooks";
import portfolioSelectors from "../../../store/portfolio/portfolio-selectors";
import PortfolioItem from "../../item/portfolio/PortfolioItem";

function Portfolio() {

    const portfolio = useAppSelector(portfolioSelectors.getPortfolio);

    return (
        <div className="portfolio">
            <h3 className="portfolio-name">Portfolio</h3>
            <Row>
                {
                    portfolio?.map(item => (
                        <Col md={3}>
                            <PortfolioItem portfolio={item}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Portfolio;
