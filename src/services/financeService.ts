import axios from 'axios';

const financeApi = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
});

export const fetchStockData = async (symbol: string) => {
  try {
    const response = await financeApi.get('', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: 'RNC1B326X1F9UO87',
      },
    });

    console.log('API Response:', response.data);

    const data = response.data['Time Series (Daily)'];
    if (!data) {
      console.error('Time Series (Daily) data not found in response:', response.data);
      throw new Error('Time Series data not found');
    }

    const formattedData = Object.keys(data).map(date => ({
      date,
      price: parseFloat(data[date]['4. close']),
    }));

    return formattedData;
  } catch (error: any) {
    console.error('Error fetching stock data:', error.message || error);
    
    if (error.isAxiosError) {
      console.error('API call failed with status code:', error.response?.status);
      console.error('API error details:', error.response?.data);
    }
    
    throw new Error('Error fetching stock data');
  }
};
