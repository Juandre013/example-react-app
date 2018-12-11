import * as React from 'react';
import './App.css';
import {appStore} from "./AppStore";
import {Provider} from "react-redux";
import { ExchangeRatesContainer } from "./ExchangeRatesContainer";
import {SelectedValuesContainer} from "./SelectedValuesContainer";

export class App extends React.Component {
  public render() {
    return (
      <Provider store={appStore}>
        <div className="App">
          <header>
            <h1>Example</h1>
          </header>
          <div>
            <ExchangeRatesContainer/>
            <SelectedValuesContainer/>
          </div>
        </div>
      </Provider>
    );
  }
}
