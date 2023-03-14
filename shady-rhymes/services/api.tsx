import { Product } from '../types/common';

export const getProduct = async () => {
  const res = await fetch('https://6405632440597b65de35cc7e.mockapi.io/blogs');
  return res.json();
};

export const handleAddProduct = async (product: Product) =>
  await fetch('https://6405632440597b65de35cc7e.mockapi.io/blogs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...product, src: '/' })
  });

export const handleDelete = async (id?: string) =>
  await fetch(`https://6405632440597b65de35cc7e.mockapi.io/blogs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
