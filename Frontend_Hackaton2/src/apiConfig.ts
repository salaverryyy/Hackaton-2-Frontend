import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
