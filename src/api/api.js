import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000'
});

export const getTasks = () => API.get('/tasks');
export const getTags = () => API.get('/tags');

export const createTask = (task) => API.post('/tasks', task);
export const updateTask = (id, updatedTask) => API.put(`/tasks/${id}`, updatedTask);
export const removeTask = (id) => API.delete(`/tasks/${id}`);

export const createTag = (tag) => API.post('/tags', tag);
export const removeTag = (id) => API.delete(`/tags/${id}`);

export default API;
