//Develop a currency converter application that allows users to input an amount in one currency and convert it to another. For the sake of this challenge, you can use a hard-coded exchange rate. Take advantage of React state and event handlers to manage the input and conversion calculations.
import React, {useState} from "react";
const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [result, setResult] = useState(0);
    const exchangeRates = {
        USD: { EUR: 0.914, INR: 82.875, JPY: 147.933 },
        EUR: { USD: 1.095, INR: 90.713, JPY: 161.923 },
        INR: { USD: 0.012, EUR: 0.011, JPY: 1.785 },
        JPY: { USD: 0.007, EUR: 0.006, INR: 0.560 },
      };
      const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(value);
        setResult(value * exchangeRates[fromCurrency][toCurrency]);
      };
    
      const handleFromCurrencyChange = (e) => {
        const value = e.target.value;
        setFromCurrency(value);
        setResult(amount * exchangeRates[value][toCurrency]);
      };
    
      const handleToCurrencyChange = (e) => {
        const value = e.target.value;
        setToCurrency(value);
        setResult(amount * exchangeRates[fromCurrency][value]);
      };
return(
    <div>
        <h1>Currency Converter</h1>
        <div>
            <label>
                Amount:
                <input type="number" value={amount} onChange={handleAmountChange}/>
            </label>
        </div>
        <div>
            <label>
                From Currency:
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          </label>
          <div>
        <label>
          To Currency:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {Object.keys(exchangeRates[fromCurrency]).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <h2>Result: {result.toFixed(2)}</h2>
      </div>
        </div>
    </div>
)
}
export default CurrencyConverter;