import {State} from "../models_d";
import {Portfolio} from "./models_d";


const portfolioSelectors = {
    getPortfolio: (state: State): Portfolio[] | undefined => state.portfolio.portfolio,
}

export default portfolioSelectors;
