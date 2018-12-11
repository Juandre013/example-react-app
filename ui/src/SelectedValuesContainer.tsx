
// import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { AppStoreState } from "./AppActions";
import {getValues, saveValues} from "./actions";
import {SelectedValuesForm} from "./SelectedValuesForm";

const mapStateToProps = (state: AppStoreState) => ({
    values: state.values,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({ getValues, saveValues }, dispatch);

export const SelectedValuesContainer =
    connect(mapStateToProps, mapDispatchToProps)(SelectedValuesForm);
