import {PortfolioState} from "./models_d";
import axios from "axios";
import config from "../config";


const portfolioApi = {
    fetchPortfolio: (): Promise<PortfolioState> => {
        return axios.get(config.PORTFOLIO_URL)
    }
}

export default portfolioApi;
