import { CardData } from '../types/CardData';
import { Phone } from '../types/CardDescription';
import { PhonesForCatalogData } from '../types/PhonesForCatalogData';
import { PhonesForFavorites } from '../types/PhonesForFavorites';
import { client } from '../utils/fetchClient';

export const getProducts = () => {
  return client.get<CardData[]>('products');
};

export const getRecomendedProducts = () => {
  return client.get<CardData[]>('products/recommended');
};

export const getProductsByCategory = (productType: string) => {
  return client.get<CardData[]>(`products?productType=${productType}`);
};

export const getProductsWithDiscount = () => {
  return client.get<CardData[]>('products/discount');
};

export const getProductById = (id: string) => {
  return client.get<Phone>(`phones/${id}`);
};

export const getProductByItemId = (itemId: string) => {
  return client.get<PhonesForFavorites>(`products/${itemId}`);
};

export const getProductByIds = (ids: number[]) => {
  return client.get<CardData[]>(`products?ids=${ids.join(',')}`);
};

export const getProductWithPagination = (page: string, limit: string) => {
  return client.get<PhonesForCatalogData>(`products?page=${page}&limit=${limit}`);
};

export const getProductWithPaginationSorted = (
  page: string, limit: string, orderDir?: string, orderBy?: string,
) => {
  return client.get(`products?page=${page}&limit=${limit}&orderBy=${orderBy}&orderDir=${orderDir}`);
};
