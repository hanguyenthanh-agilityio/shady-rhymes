import { Product } from '../types/common';

const API_KEY = process.env.NEXT_PUBLIC_GAID || '';

export const getProduct = async () => {
  const res = await fetch(API_KEY);
  return res.json();
};

export const handleAddProduct = async (product: Product) =>
  await fetch(API_KEY, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...product })
  });

export const handleDelete = async (id?: string) =>
  await fetch(`${API_KEY}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
