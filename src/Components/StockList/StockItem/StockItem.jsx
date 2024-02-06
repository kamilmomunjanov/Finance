import React from 'react';
import style from "./style.module.css";

const StockItem = ({stock, deleteFromFavorite}) => {
    return (
        <li className={style.items}>
            <p>{stock.name}</p>
            <p onClick={() => deleteFromFavorite(stock.name)} className={style.delete}>Delete</p>
        </li>
    );
};

export default StockItem;