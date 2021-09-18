import {AxiosResponse} from "axios";
import {PortfolioState} from "./models_d";
import {call, put, takeLatest} from "redux-saga/effects";
import portfolioApi from "./portfolio-api";
import portfolioActions from "./portfolio-actions";
import portfolioTypes from "./portfolio-types";


function* fetchPortfolio() {
    try {
        const response: AxiosResponse<PortfolioState> = yield call(portfolioApi.fetchPortfolio)
        yield put(portfolioActions.setPortfolio(response.data))
    }
    catch (e) {

    }
}

function* watchFetchPortfolio() {
    yield takeLatest(portfolioTypes.FETCH_PORTFOLIO, fetchPortfolio)
}

const portfolioSaga = [
    watchFetchPortfolio()
]

export default portfolioSaga;
