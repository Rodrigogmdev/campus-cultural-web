import axios from 'axios';

// Configuração da instância do Axios com a URL base da API
const api = axios.create({
  baseURL: 'https://sua-api-url.com', // Substitua pela URL base da sua API Swagger
});

// Função para fazer login
export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data; // Supondo que a API retorne um token ou informações do usuário
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao efetuar login';
  }
};

// Função para cadastrar um novo usuário
export const register = async (name, email, password) => {
  try {
    const response = await api.post('/usuario', { name, email, password });
    return response.data; // Supondo que a API retorne os dados do usuário
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao cadastrar usuário';
  }
};

// Função para cadastrar um novo evento
export const createEvent = async (eventData) => {
  try {
    const response = await api.post('/evento', eventData);
    return response.data; // Supondo que a API retorne os dados do evento
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao cadastrar evento';
  }
};

export const getEvents = async () => {
  try {
    const response = await api.get('/evento'); // Endpoint para obter eventos
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Erro ao buscar eventos';
  }
};

export default api;
