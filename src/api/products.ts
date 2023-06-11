import { CardData } from '../types/CardData';
import { client } from '../utils/fetchClient';

export const getProducts = () => {
  return client.get<CardData[]>('products');
};
