import * as React from 'react';
import { CurrencyData } from './Models';

interface ExchangeRatesProps {
  getExchangeRates: () => Promise<CurrencyData>;
  currency: CurrencyData;
}

export class ExchangeRates extends React.Component<ExchangeRatesProps> {


    public render() {
        const exchangeRates = this.props.currency.exchangeRates;
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>&nbsp;</th>
            <th>USD</th>
            <th>GBP</th>
            <th>EUR</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>USD</td>
            <td />
            <td>{exchangeRates.USD.GBP}</td>
            <td>{exchangeRates.USD.EUR}</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{exchangeRates.GBP.USD}</td>
            <td />
            <td>{exchangeRates.GBP.EUR}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{exchangeRates.EUR.USD}</td>
            <td>{exchangeRates.EUR.GBP}</td>
            <td />
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
public componentDidMount() {
        this.props.getExchangeRates();
    }
}
