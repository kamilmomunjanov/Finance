import React from 'react';
import style from "./style.module.css";
import StockItem from "./StockItem/StockItem";

const StockList = ({stocks, deleteFromFavorite}) => {
    return (
        <ul className={style.lists}>
            {
                stocks?.map((stock, idx) => (
                    <StockItem deleteFromFavorite={deleteFromFavorite} key={idx} stock={stock}/>
                ))
            }
        </ul>
    );
};

export default StockList;