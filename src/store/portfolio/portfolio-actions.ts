import {Action} from "../models_d";
import portfolioTypes from "./portfolio-types";
import {PortfolioState} from "./models_d";

const portfolioActions = {
    fetchPortfolio: (): Action => ({
        type: portfolioTypes.FETCH_PORTFOLIO,
    }),

    setPortfolio: (payload: PortfolioState): Action<PortfolioState> => ({
        type: portfolioTypes.SET_PORTFOLIO,
        payload: payload
    })
}

export default portfolioActions;
