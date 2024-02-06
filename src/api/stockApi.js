import axios from "axios";
const BASE_URL = "https://api.twelvedata.com/stocks"

const stockApi = {
    getStocks: async function () {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching stocks:", error);
            throw error;
        }

    }


}



export default stockApi;