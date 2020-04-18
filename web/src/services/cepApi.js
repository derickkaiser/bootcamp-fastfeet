import axios from 'axios';

const cepApi = axios.create({
  baseURL: 'http://viacep.com.br/ws',
});

export default cepApi;