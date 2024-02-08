export const filterStocks = (stocks, value) => {
    const pattern = new RegExp(value, 'i')
    return stocks
        .filter(stock => {
        return stock.name.toLowerCase()
            .includes(value.toLowerCase())
    }).filter(stock => pattern.test(stock.name))
        .filter(item => isNaN(item.symbol))
        .filter(stock => ["AAPL", "QQQ", "INFY", "TRP", "VFIAX"].includes(stock.symbol))
}

// if (Array.isArray(stock)) {
//     var numericSymbolObjects =  stock?.filter(item => isNaN(item.symbol));
// }

// .slice(0, 9)