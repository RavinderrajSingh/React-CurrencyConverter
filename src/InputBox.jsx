import React, { useId, useRef } from 'react'

function InputBox({
    label,
    currencyAmount,
    setCurrencyAmount,
    currencyOptions = [],
    curreny,
    setCurrency,
    selectedCurrency,
}) {
    let amountId = useId('');
    let currID = useId('');
    return (
        <div className='flex w-[95%] items-center justify-between m-5 bg-zinc-600 rounded-2xl p-3'>
            <div className='flex flex-col'>

                <label className=' text-white text-m '
                    htmlFor={amountId}>
                    {label}
                </label>
                <input className=' outline-none border-none bg-zinc-800 text-white rounded-2xl py-2 px-2'
                    type="number"
                    id={amountId}
                    name='fromCurre'
                    value={currencyAmount}
                    onChange={(e) => {
                        setCurrencyAmount && setCurrencyAmount(e.target.value);
                    }}
                />

            </div>

            <div className='flex flex-col'>
                <label htmlFor={currID} className='text-white '>Currency</label>
                <select
                    name=""
                    id={currID}
                    className='bg-zinc-800 text-white py-2 px-2 w-[110px] rounded-xl'
                    value={curreny}
                    onChange={(e) => { setCurrency(e.target.value) }}
                >
                    {
                        currencyOptions.map((option) => (
                            <option
                                key={option}
                                defaultValue={selectedCurrency}
                                value={option}
                                className='bg-zinc-800 text-white'
                            >
                                {option.toUpperCase()}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    )
}

export default InputBox