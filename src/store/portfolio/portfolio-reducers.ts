import {PortfolioState} from "./models_d";
import {Action} from "../models_d";
import portfolioTypes from "./portfolio-types";

const initialState: PortfolioState = {
    portfolio: [],
}

const portfolioReducers = (state: PortfolioState = initialState, action: Action) => {
    switch (action.type) {
        case portfolioTypes.SET_PORTFOLIO:
            return {
                ...state,
                portfolio: action.payload.portfolio
            };
        default:
            return state
    }
}
export default portfolioReducers;
