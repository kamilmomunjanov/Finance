import React from 'react';
import style from "./style.module.css";
import {useQuery} from "react-query";
import stockApi from "../../api/stockApi";
import {filterStocks} from "../../helper/filterStocks";

const SearchStocks = ({addSymbolToFavorites}) => {
    const [value, setValue] = React.useState("")
    const { data } = useQuery("getStocks", () => stockApi.getStocks());
    const [stocks, setStocks] = React.useState([])
    const [focus, setFocus] = React.useState(false)
    const autocompleteRef = React.useRef(null)

    React.useEffect(() => {
        if (!data?.data) return
        const filteredStocks = filterStocks(data?.data, value)
        setStocks(filteredStocks)
    }, [data, value]);

    const onBlurHandler = (e) => {
        setTimeout(() => {
            const isAutocompleteElement = autocompleteRef.current
                && autocompleteRef.current.contains(document.activeElement);

            if (!isAutocompleteElement) {
                setFocus(false);
            }
        },100)
    }

    const selectStock = (stock) => {
        setValue(stock.name)
        addSymbolToFavorites(stock)
    }



    return (
        <div className={style.searchBlock}>
            <div className={style.inputContainer}>
                <input
                    className={style.input}
                    type="text"
                    value={value}
                    onFocus={() => setFocus(true)}
                    onBlur={onBlurHandler}
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className={style.close} onClick={() => setValue("")}>x</span>
            </div>

            {focus && stocks.length ? <ul className={style.autocomplete}>
                {
                    stocks?.map((stock, index) => (
                        <li onClick={() => {
                            selectStock(stock)
                        }} className={style.item} key={index}>{stock.name}</li>
                    ))
                }
            </ul>
                : null
            }
        </div>
    );
};




export default SearchStocks;