import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-aneis-do-poder.onrender.com/api', // URL direta do backend
});

console.log('Base URL da API:', api.defaults.baseURL);

export default api;
