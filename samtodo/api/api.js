import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Register User
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

// Login User
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  return response.data;
};

// Fetch Todos
export const fetchTodos = async (token) => {
  return await axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Create a new Todo
export const createTodo = async (todoData, token) => {
  return await axios.post(`${API_URL}/todos`, todoData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
