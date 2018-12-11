import {FETCH_VALUES, FETCH_EXCHANGE_RATES, STORE_VALUES} from './AppActions';
import {ValuesData} from './Models' ;
export const getExchangeRates = () => {

    return (dispatch : any, getState: any) => {

        return fetch("http://localhost:5000/api/currency")
            .then(res => res.json())
            .then(currency => {
            
                dispatch({
                    type: FETCH_EXCHANGE_RATES,
                    currency,
                    values: null
                    });

                return currency;
            });
    };

};

export const getValues = () => {

    return (dispatch : any, getState: any) => {

        return fetch("http://localhost:5000/api/stored-values")
            .then(res => res.json())
            .then(values => {

                dispatch({
                    type: FETCH_VALUES,
                    currency: null,
                    values
                    });

                return values;
            });
    };

};

export const saveValues = (values: ValuesData) => {

    return (dispatch : any, getState: any) => {



        return fetch("http://localhost:5000/api/stored-values", {
            method: "POST",
            headers: {          
                  "Content-Type": "application/json; charset=utf-8"
                    },
      body: JSON.stringify({
              FromAmount: values.fromAmount,
              FromCurrency: values.fromCurrency,
              ToAmount: values.toAmount,
              ToCurrency: values.toCurrency,          
      })
    }).then(accepted => {
                
                dispatch({
                    type: STORE_VALUES,
                    currency: null,
                    values
                    });

                return values;
            });
    };

};