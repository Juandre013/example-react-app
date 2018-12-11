// import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { AppStoreState } from "./AppActions";
import {getExchangeRates} from "./actions";
import {ExchangeRates} from "./ExchangeRates";

const mapStateToProps = (state: AppStoreState) => ({
    currency: state.currency,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ getExchangeRates }, dispatch);

export const ExchangeRatesContainer =
    connect(mapStateToProps, mapDispatchToProps)(ExchangeRates);
