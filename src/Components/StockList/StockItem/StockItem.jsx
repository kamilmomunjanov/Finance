import React from 'react';
import style from "./style.module.css";
import stockApi from "../../../api/stockApi";
import {useQuery} from "react-query";

const fetchStock = async (symbol) => {
    const price = await  stockApi.getPrice(symbol)
    const profile = await  stockApi.getProfile(symbol)
    const logo = await stockApi.getLogo(symbol)

    const stock = {...profile, price: price.high, logo: logo.url}
    return stock
}



const StockItem = ({stock, deleteFromFavorite}) => {
    const {data, isLoading} = useQuery(`getStock/${stock.symbol}`, () => fetchStock(stock.symbol))

        // В этом блоке кода можно выполнить другие действия, когда data изменится
        if (data && !isLoading) {
            console.log(data);
        }


    return (
        <li className={style.items}>
            {
                data ? (
                    <div className={style.info}>
                        {data?.logo ?
                            <img className={style.logo} src={data?.logo} alt={data?.name}/>
                            : <div className={style.logo}></div>}
                        <div style={{display:"flex", flexDirection:"column",gap:"6px"}}>
                            <p>{data?.name}</p>
                            <p>{data?.industry}</p>
                            <p>{data?.price} USD</p>
                        </div>
                    </div>
                ) : <div>Loading...</div>
            }
            <p onClick={() => deleteFromFavorite(stock.name)} className={style.delete}>Delete</p>
        </li>
    );
};

export default StockItem;