import * as React from 'react';
import { ValuesData } from './Models';

interface SelectedValuesProps {
    getValues: () => Promise<ValuesData>;
    saveValues: (values:ValuesData) => Promise<ValuesData>;
  values: ValuesData;
}

interface SelectedValuesState {
    values:ValuesData;
    fromAmountString: string;
    toAmountString: string;
    error: boolean;
}

export class SelectedValuesForm extends React.Component<SelectedValuesProps, SelectedValuesState> {

    constructor(props : SelectedValuesProps) {
        super(props);
        this.state = { 
            values: this.props.values ,
            toAmountString: this.props.values.toAmount+'',
            fromAmountString: this.props.values.fromAmount+'',
            error: false
        };
        this.onClick = this.onClick.bind(this);
        this.changeFromCurrency = this.changeFromCurrency.bind(this);
        this.changeFromAmount = this.changeFromAmount.bind(this);
        this.changeToCurrency = this.changeToCurrency.bind(this);
        this.changeToAmount = this.changeToAmount.bind(this);
    }   

    public render() {
        const {fromCurrency, toCurrency } = this.state.values;
        const {fromAmountString, toAmountString, error} = this.state;
        let errorView=<p/>;
        if (error) {
            errorView = <p>Only currency input allowed</p>
        }
    return (
      <div>
        <form>
          <fieldset>
            <legend>Select Values</legend>
            <div>
              <label>
                From Currency:
                <select onChange={this.changeFromCurrency} value={fromCurrency}>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                From Amount:
                <input onChange={this.changeFromAmount} type="text" value={fromAmountString}/>
              </label>
            </div>
            <div>
              <label>
                To Currency:
                <select onChange={this.changeToCurrency} value={toCurrency}>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                To Amount:
                <input onChange={this.changeToAmount} type="text" value={toAmountString}/>
              </label>
                        </div>
                    <div>
                        {errorView}
                        </div>
            <div>
              <button onClick={this.onClick} type="button">Save</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
}

    public componentDidMount() {
        this.props.getValues();
    }

    public componentDidUpdate(prevProps: SelectedValuesProps) {
        const newValues = this.props.values;
        const oldValues = prevProps.values;
        if(
            newValues.fromAmount !== oldValues.fromAmount || 
            newValues.fromCurrency !== oldValues.fromCurrency || 
            newValues.toAmount !== oldValues.toAmount || 
            newValues.toCurrency !== oldValues.toCurrency) {
            this.setState({
                values: this.props.values,
                toAmountString: this.props.values.toAmount+'',
                fromAmountString: this.props.values.fromAmount+'',
                error:false
            });
        }        
    }

    private onClick(): void {   

        const values = this.state.values;
        const fromAmount = +this.state.fromAmountString;
        if (isNaN(fromAmount)) {
            this.setState({error:true});
            return;
        }
        values.fromAmount = fromAmount;
        const toAmount = +this.state.toAmountString;
        if (isNaN(toAmount)) {
            this.setState({error:true});
            return;
        }
        values.toAmount = toAmount;
        this.props.saveValues(values);
        this.setState({error:false});
    }

    private changeFromCurrency(e: React.FormEvent<HTMLSelectElement>): void{
        const values = this.state.values;
        values.fromCurrency = e.currentTarget.value;
        this.setState({values});
    }

    private changeFromAmount(e: React.FormEvent<HTMLInputElement>): void{
        const fromAmountString = e.currentTarget.value;
        this.setState({
            fromAmountString
        });
    }

    private changeToCurrency(e: React.FormEvent<HTMLSelectElement>): void{
        const values = this.state.values;
        values.toCurrency = e.currentTarget.value;
        this.setState({values});
    }

    private changeToAmount(e: React.FormEvent<HTMLInputElement>): void{

        const toAmountString = e.currentTarget.value;
        this.setState({toAmountString});
    }

}
