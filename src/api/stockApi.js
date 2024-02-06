import axios from "axios";
const API_KEY = "cn10t21r01quegsk6q20cn10t21r01quegsk6q2g"
const BASE_URL = "https://api.twelvedata.com/stocks"

const stockApi = {
    getStocks: async function () {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;  // Вернуть фактические данные, а не выводить их в консоль
        } catch (error) {
            console.error("Error fetching stocks:", error);
            throw error;  // Прокидывать ошибку дальше для обработки
        }

    }


}



export default stockApi;