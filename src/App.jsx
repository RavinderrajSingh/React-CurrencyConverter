import React, { useEffect } from 'react'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './InputBox';

function App() {



  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(1);
  const [toCurrencyAmount, setToCurrencyAmount] = useState();
  const fromSelectedCurrency = 'usd';
  const toSlectedCurrency = 'inr';

  // for calulation
  let currentFromCurr = useCurrencyInfo(fromCurrency.toLowerCase());
  let currentToCurrValue = currentFromCurr && currentFromCurr[fromCurrency.toLowerCase()] ? currentFromCurr[fromCurrency.toLowerCase()][toCurrency.toLowerCase()] : null;

  // these are displaying the select field options only
  // Check if currencyInfo has data before trying to access its properties
  const currencyInfo = useCurrencyInfo(fromSelectedCurrency);
  // Check if currencyInfo has data before trying to access its properties
  let currencyOptions = currencyInfo && currencyInfo[fromSelectedCurrency] ? Object.keys(currencyInfo[fromSelectedCurrency]) : [];


  function Swap() {
    console.log(currentToCurrValue);
    let prevFromCurr = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(prevFromCurr);

    let prevFromCurrAmount = fromCurrencyAmount;
    setFromCurrencyAmount(toCurrencyAmount);
    setToCurrencyAmount(prevFromCurrAmount);
  }

  let ConvertCurrency = () => {
    if (fromCurrencyAmount > 0 && currentToCurrValue) {
      setToCurrencyAmount(Number((fromCurrencyAmount * currentToCurrValue).toFixed(2)));

    } else {
      setToCurrencyAmount(0);
    }
  }

  useEffect(() => {
    ConvertCurrency();
  }, [Swap, setFromCurrency, setToCurrency, toCurrency, fromCurrency, toCurrency]);


  return (
    <div className='bg-zinc-600 w-full h-screen flex flex-col items-center justify-center'>

      <h1 className='text-5xl font-bold text-gray-400 top-20 absolute tracking-[7px]'>Currency Converter</h1>

      <div className='bg-zinc-700 rounded-3xl w-[30%] flex flex-col items-center justify-center p-2'>


        <InputBox
          label="From"
          currencyAmount={fromCurrencyAmount}
          setCurrencyAmount={setFromCurrencyAmount}
          currencyOptions={currencyOptions}
          curreny={fromCurrency}
          setCurrency={setFromCurrency}
          selectedCurrency={fromSelectedCurrency}
        />

        <div>
          <button
            className='bg-orange-500 p-2 w-[5rem] m-2 text-white rounded-xl'
            onClick={() => { Swap() }}
          >
            Swap
          </button>

          <button
            className='bg-orange-500 p-2 w-[5rem] m-2 text-white rounded-xl'
            onClick={() => { ConvertCurrency() }}
          >
            Convert
          </button>

        </div>

        <InputBox
          label="To"
          currencyAmount={toCurrencyAmount}
          setCurrencyAmount={setToCurrencyAmount}
          currencyOptions={currencyOptions}
          curreny={toCurrency}
          setCurrency={setToCurrency}
          selectedCurrency={toSlectedCurrency}
        />


      </div>

    </div >
  )
}

export default App