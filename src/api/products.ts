import { CardData } from '../types/CardData';
import { Phone } from '../types/CardDescription';
import { client } from '../utils/fetchClient';

export const getProducts = () => {
  return client.get<CardData[]>('products');
};

export const getProductById = (id: string) => {
  return client.get<Phone>(`phones/${id}`);
};

export const getProductWithPagination = (page: string, limit: string) => {
  return client.get(`products?page=${page}&limit=${limit}`);
};
