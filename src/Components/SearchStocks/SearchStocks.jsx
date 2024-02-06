import React from 'react';
import style from "./style.module.css";
import {useQuery} from "react-query";
import stockApi from "../../api/stockApi";

const SearchStocks = () => {
    const [value, setValue] = React.useState("")
    const { data } = useQuery("getStocks", () => stockApi.getStocks());
    const [stocks, setStocks] = React.useState([])

    React.useEffect(() => {
        if (!data.data) return
        const filteredStocks = data.data.filter(stock => {
            return stock.name.toLowerCase().includes(value.toLowerCase())
    }).slice(0,9)
        setStocks(filteredStocks)
    }, [data, value]);






    return (
        <div className={style.searchBlock}>
            <input
                className={style.input}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <ul className={style.autocomplete}>
                {
                    stocks?.map((stock, index) => (
                        <li className={style.item} key={index}>{stock.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};




export default SearchStocks;