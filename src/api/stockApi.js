    import axios from "axios";
    const BASE_URL = "https://api.twelvedata.com/stocks"
    const BASES_URL = "https://api.twelvedata.com"
    const API_KEY = "36fb6d1f66f64b92869d52f8296916a9"
    // https://api.twelvedata.com/profile?symbol=AAPL&apikey=36fb6d1f66f64b92869d52f8296916a9
    // https://api.twelvedata.com/quote?symbol=AAPL&apikey=36fb6d1f66f64b92869d52f8296916a9

    const stockApi = {
        getStocks: async function () {
            try {
                const response = await axios.get(`${BASE_URL}`);
                return response.data;
            } catch (error) {
                console.error("Error fetching stocks:", error);
                throw error;
            }

        },
        getProfile: async function (symbol) {
            try {
                if (typeof symbol !== 'string') {
                    throw new Error('Invalid symbol provided');
                }
                const response = await axios.get(`${BASES_URL}/profile`, {
                    params: {
                        symbol: symbol,
                        apikey: API_KEY
                    }
                });
                return response.data;
            } catch (error) {
                console.error("Error fetching stocks:", error);
                throw error;
            }
        },
        getPrice: async function (symbol) {
            try {
                if (typeof symbol !== 'string') {
                    throw new Error('Invalid symbol provided');
                }
                const response = await axios.get(`${BASES_URL}/quote`, {
                    params: {
                        symbol: symbol,
                        apikey: API_KEY
                    }
                });
                return response.data;
            } catch (error) {
                console.error("Error fetching stocks:", error);
                throw error;
            }
        }
    }





    export default stockApi;