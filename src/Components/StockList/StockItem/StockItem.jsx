import React from 'react';
import style from "./style.module.css";
import stockApi from "../../../api/stockApi";
import {useQuery} from "react-query";

const fetchStock = async (symbol) => {
    const price = await  stockApi.getPrice(symbol)
    const profile = await  stockApi.getProfile(symbol)

    const stock = {...profile, price: price.high}
    return stock
}



const StockItem = ({stock, deleteFromFavorite}) => {
    const {data, isLoading} = useQuery(`getStock/${stock.symbol}`, () => fetchStock(stock.symbol))
    if (data && !isLoading) {
        console.log(data);
    }

    return (
        <li className={style.items}>
            <p>{stock.name}</p>
            <p onClick={() => deleteFromFavorite(stock.name)} className={style.delete}>Delete</p>
        </li>
    );
};

export default StockItem;