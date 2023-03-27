// Constants
import { contentType } from '@/constants/api';

// Types
import { Product } from '@/types/common';

const API_KEY = process.env.NEXT_PUBLIC_GAID || '';

export const getProduct = async (queryParam?: {
  page: string;
  limit: string;
}) => {
  const res = await fetch(
    queryParam
      ? `${API_KEY}?limit=${queryParam.limit}&page=${queryParam.page}`
      : API_KEY
  );

  return res.json();
};

export const handleAddProduct = async (product: Product) =>
  await fetch(API_KEY, {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({ ...product })
  });

export const handleDelete = async (id?: string) =>
  await fetch(`${API_KEY}${id}`, {
    method: 'DELETE',
    headers: contentType
  });
