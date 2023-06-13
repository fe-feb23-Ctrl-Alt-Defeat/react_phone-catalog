import { CardData } from '../types/CardData';
import { Phone } from '../types/CardDescription';
import { client } from '../utils/fetchClient';

export const getProducts = () => {
  return client.get<CardData[]>('products');
};

export const getProductById = (id: string) => {
  return client.get<Phone>(`phones/${id}`);
};

export const getProductByIds = (ids: number[]) => {
  return client.get<CardData[]>('products', JSON.stringify({ ids }));
};

export const getProductWithPagination = (page: string, limit: string) => {
  return client.get<CardData[]>(`products?page=${page}&limit=${limit}`);
};
