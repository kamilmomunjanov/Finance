export const filterStocks = (stocks, value) => {
    return stocks
        .filter(stock => {
        return stock.name.toLowerCase()
            .includes(value.toLowerCase())
    }).slice(0, 9)
}