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
  return client.get<CardData[]>(`products?ids=${ids.join(',')}`);
};

export const getProductWithPagination = (page: string, limit: string) => {
  return client.get<CardData[]>(`products?page=${page}&limit=${limit}`);
};

export const getProductWithPaginationSorted = (
  page: string, limit: string, orderDir?: string, orderBy?: string,
) => {
  return client.get(`products?page=${page}&limit=${limit}&orderBy=${orderBy}&orderDir=${orderDir}`);
};

export const getFavoritesProducts = (
  ids: string[],
) => {
  return client.get(`products?ids=${ids}`);
};
