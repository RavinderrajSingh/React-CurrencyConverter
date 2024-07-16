import { useEffect, useState } from "react";

const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/';

const useCurrencyInfo = (currency) =>{
    const [data, setData] = useState([]);
    const searchUrl = url + currency.toLowerCase() + ".json";

    useEffect(() => {
        fetch(searchUrl)
           .then(response => response.json())
           .then(data => setData(data))
           .catch(error => console.error('Error:', error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;