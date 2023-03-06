import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://6405632440597b65de35cc7e.mockapi.io/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosClient;
