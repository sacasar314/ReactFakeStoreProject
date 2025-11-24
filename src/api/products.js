import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com/products';

export const getProducts = () => axios.get(API_BASE);
export const getProductById = (id) => axios.get(`${API_BASE}/${id}`);
export const createProduct = (productData) => axios.post(API_BASE, productData);
export const updateProduct = (id, productData) => axios.put(`${API_BASE}/${id}`, productData);
export const deleteProduct = (id) => axios.delete(`${API_BASE}/${id}`);