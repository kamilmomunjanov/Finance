import React from 'react';
import style from "./style.module.css";
import SearchStocks from "../../Components/SearchStocks/SearchStocks";
import StockList from "../../Components/StockList/StockList";

const Stocks = () => {
    const [favorites, setFavorites] = React.useState([])

    const addSymbolToFavorites = (stock) => {
        const favorite = favorites.find(item => item.name === stock.name)
        if (favorite) return
        setFavorites(prevState => [ ...prevState, stock])
    }

    const deleteFromFavorite = (name) => {
        const filteredStocks = favorites.filter(item => item.name !== name)
        setFavorites(filteredStocks)
    }

    console.log(favorites)
    return (
        <div className={style.stocks}>
            <h1>Stocks</h1>
            <SearchStocks addSymbolToFavorites={addSymbolToFavorites}/>
            <StockList deleteFromFavorite={deleteFromFavorite} stocks={favorites}/>
        </div>
    );
};

export default Stocks;