import axios from 'axios';

// Create an Axios instance for Alpha Vantage API
const financeApi = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
});

// Fetch stock data for a given symbol
export const fetchStockData = async (symbol: string) => {
  try {
    const response = await financeApi.get('', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        apikey: 'EWUJN777SOO95FQM', // Hardcoded API key (not recommended for production)
      },
    });

    // Handle missing or erroneous data
    const data = response.data['Time Series (Daily)'];
    if (!data) {
      throw new Error('No data found for this symbol or invalid API response');
    }

    // Format data for the chart
    const formattedData = Object.keys(data).map((date) => ({
      date,
      price: parseFloat(data[date]['4. close']), // Ensure price is a float
    }));

    return formattedData;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw new Error('Error fetching stock data');
  }
};
