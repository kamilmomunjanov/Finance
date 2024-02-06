import React from 'react';
import style from "./style.module.css";
import {useQuery} from "react-query";
import stockApi from "../../api/stockApi";

const SearchStocks = () => {
    const [value, setValue] = React.useState("")
    const { data, error, isLoading } = useQuery("getStocks", () => stockApi.getStocks());
    const [arr, setArr] = React.useState([])

    React.useEffect(() => {
        if (Array.isArray(data?.data)) {
            const limitedData = data.data.slice(0, 10);
            console.log(limitedData);
            setArr(limitedData)
        }
    }, [data]);






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
                    arr?.map((stock, index) => (
                        <li className={style.item} key={index}>{stock.exchange}</li>
                    ))
                }
            </ul>
        </div>
    );
};




export default SearchStocks;